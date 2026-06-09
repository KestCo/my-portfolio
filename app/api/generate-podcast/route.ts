import OpenAI from "openai";
import { NextResponse } from "next/server";

type GeneratePodcastRequest = {
  story?: string;
  pronunciations?: string;
};

type Speaker = "maya" | "ellis";

type PodcastTurn = {
  speaker: Speaker;
  text: string;
};

type VoiceProfile = {
  voice: "coral" | "cedar";
  speed: number;
  instructions: string;
};

type WavChunk = {
  format: Buffer;
  data: Buffer;
};

const voiceProfiles: Record<Speaker, VoiceProfile> = {
  maya: {
    voice: "coral",
    speed: 1.04,
    instructions:
      "Warm, bright and curious. Sound like an energetic AI news host who keeps the conversation moving with crisp delivery.",
  },
  ellis: {
    voice: "cedar",
    speed: 0.94,
    instructions:
      "Calm, grounded and analytical. Sound like a measured AI co-host with a lower, steadier delivery and thoughtful pauses.",
  },
};

function cleanInput(value?: string) {
  return typeof value === "string" ? value.trim() : "";
}

function cleanTurnText(value: string) {
  return value
    .replace(/^\s*(?:maya|ellis|host\s*[12]?|speaker\s*[12]?)\s*[:\-]\s*/i, "")
    .replace(/\s+/g, " ")
    .trim();
}

function toPodcastTurn(value: unknown): PodcastTurn | null {
  if (!value || typeof value !== "object") return null;

  const record = value as Record<string, unknown>;
  const speaker = typeof record.speaker === "string"
    ? record.speaker.trim().toLowerCase()
    : "";
  const text = typeof record.text === "string" ? cleanTurnText(record.text) : "";

  if ((speaker !== "maya" && speaker !== "ellis") || !text) return null;

  return {
    speaker,
    text,
  };
}

function parseScriptTurns(text: string) {
  const trimmed = text.trim();
  const candidates = [
    trimmed,
    trimmed.match(/\{[\s\S]*\}/)?.[0] ?? "",
    trimmed.match(/\[[\s\S]*\]/)?.[0] ?? "",
  ].filter(Boolean);

  for (const candidate of candidates) {
    try {
      const parsed = JSON.parse(candidate) as unknown;
      const rawTurns =
        Array.isArray(parsed)
          ? parsed
          : parsed && typeof parsed === "object" && Array.isArray((parsed as { turns?: unknown }).turns)
            ? (parsed as { turns: unknown[] }).turns
            : [];

      const turns = rawTurns
        .map(toPodcastTurn)
        .filter((turn): turn is PodcastTurn => Boolean(turn));

      if (turns.length) return turns;
    } catch {
      // Try the next candidate.
    }
  }

  return [];
}

function fallbackTurns(text: string): PodcastTurn[] {
  const lines = text
    .split("\n")
    .map((line) => cleanTurnText(line))
    .filter((line) => line.length > 20)
    .slice(0, 8);

  if (lines.length) {
    return lines.map((line, index) => ({
      speaker: index % 2 === 0 ? "maya" : "ellis",
      text: line,
    }));
  }

  return [
    {
      speaker: "maya",
      text: "Welcome to Front Page Focus. I am Maya, an AI tool built to turn a news story into a clear conversation.",
    },
    {
      speaker: "ellis",
      text: "And I am Ellis, another AI tool here to ask what matters, why it matters and what readers should notice.",
    },
  ];
}

function normalizeTurns(turns: PodcastTurn[]) {
  const cleaned = turns
    .map((turn) => ({
      speaker: turn.speaker,
      text: cleanTurnText(turn.text),
    }))
    .filter((turn) => turn.text.length > 0)
    .slice(0, 10);

  if (!cleaned.length) return fallbackTurns("");

  return cleaned;
}

function parseWav(buffer: Buffer): WavChunk {
  if (
    buffer.toString("ascii", 0, 4) !== "RIFF" ||
    buffer.toString("ascii", 8, 12) !== "WAVE"
  ) {
    throw new Error("Expected WAV audio from speech endpoint");
  }

  let offset = 12;
  let format: Buffer | null = null;
  const dataChunks: Buffer[] = [];

  while (offset + 8 <= buffer.length) {
    const chunkId = buffer.toString("ascii", offset, offset + 4);
    const chunkSize = buffer.readUInt32LE(offset + 4);
    const chunkStart = offset + 8;
    const chunkEnd = chunkStart + chunkSize;

    if (chunkEnd > buffer.length) break;

    if (chunkId === "fmt ") {
      format = buffer.subarray(chunkStart, chunkEnd);
    }

    if (chunkId === "data") {
      dataChunks.push(buffer.subarray(chunkStart, chunkEnd));
    }

    offset = chunkEnd + (chunkSize % 2);
  }

  if (!format || !dataChunks.length) {
    throw new Error("Could not read WAV chunks");
  }

  return {
    format,
    data: Buffer.concat(dataChunks),
  };
}

function combineWavChunks(chunks: WavChunk[]) {
  if (!chunks.length) {
    throw new Error("No WAV chunks to combine");
  }

  const format = chunks[0].format;
  const data = Buffer.concat(chunks.map((chunk) => chunk.data));

  const riffHeader = Buffer.alloc(12);
  riffHeader.write("RIFF", 0, "ascii");
  riffHeader.writeUInt32LE(4 + 8 + format.length + 8 + data.length, 4);
  riffHeader.write("WAVE", 8, "ascii");

  const formatHeader = Buffer.alloc(8);
  formatHeader.write("fmt ", 0, "ascii");
  formatHeader.writeUInt32LE(format.length, 4);

  const dataHeader = Buffer.alloc(8);
  dataHeader.write("data", 0, "ascii");
  dataHeader.writeUInt32LE(data.length, 4);

  return Buffer.concat([riffHeader, formatHeader, format, dataHeader, data]);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as GeneratePodcastRequest;
    const story = cleanInput(body.story);
    const pronunciations = cleanInput(body.pronunciations);

    if (!story) {
      return NextResponse.json(
        { error: "Story is required" },
        { status: 400 }
      );
    }

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const prompt = `
Create a concise Front Page Focus conversation from the story inside <story> tags.

Return exactly one valid JSON object:
{
  "turns": [
    {
      "speaker": "maya",
      "text": "Spoken line with no speaker label"
    }
  ]
}

Speaker roles:
- Maya is a bright, curious AI news tool that frames the story clearly.
- Ellis is a calmer, analytical AI news tool that asks practical follow-up questions and explains stakes.

Required opening:
- The first two turns must introduce Maya and Ellis as AI tools, not human podcasters.
- Mention Front Page Focus by name once in the opening.
- Keep the AI disclosure natural and brief.

Conversation rules:
- Write 8 to 10 total turns.
- Alternate speakers after the opening.
- Keep each turn to one or two short spoken sentences.
- Do not put speaker names, labels, markdown or stage directions inside "text".
- Make the two hosts sound distinct in wording: Maya should be brisk and curious; Ellis should be measured and explanatory.
- Avoid filler, fake banter and repeated phrases.
- Focus on what happened, why it matters and what a reader should watch next.
- Do not invent facts beyond the story.
${pronunciations ? `\nPronunciation notes:\n${pronunciations}` : ""}

<story>
${story}
</story>
`;

    const scriptResponse = await client.chat.completions.create({
      model: "gpt-4o-mini",
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content:
            "You write concise, natural two-host news podcast scripts. Return only valid JSON in the requested structure.",
        },
        { role: "user", content: prompt },
      ],
    });

    const script = scriptResponse.choices[0].message.content || "";
    const parsedTurns = parseScriptTurns(script);
    const turns = normalizeTurns(parsedTurns.length ? parsedTurns : fallbackTurns(script));

    const audioChunks = await Promise.all(
      turns.map(async (turn) => {
        const profile = voiceProfiles[turn.speaker];
        const audioResponse = await client.audio.speech.create({
          model: "gpt-4o-mini-tts",
          voice: profile.voice,
          instructions: profile.instructions,
          speed: profile.speed,
          response_format: "wav",
          input: turn.text,
        });

        return parseWav(Buffer.from(await audioResponse.arrayBuffer()));
      })
    );

    const audioBuffer = combineWavChunks(audioChunks);

    return new NextResponse(audioBuffer, {
      headers: {
        "Content-Type": "audio/wav",
      },
    });

  } catch (error) {
    console.error("Podcast error:", error);

    return NextResponse.json(
      { error: "Failed to generate podcast" },
      { status: 500 }
    );
  }
}
