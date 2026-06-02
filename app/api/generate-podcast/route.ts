import OpenAI from "openai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { story, pronunciations } = await req.json();

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
You are creating a casual but intelligent news podcast conversation.

Turn the following story into a natural spoken discussion.

Guidelines:
- DO NOT label speakers (no "Host 1", "Host 2")
- Write as natural conversational dialogue
- Keep sentences short and clear for audio
- Sound like two people talking naturally
- Avoid repetition and filler
- Focus on clarity and insight

${pronunciations ? `Use these pronunciation adjustments when writing:
${pronunciations}` : ""}

Story:
${story}
`;

    // Generate script
    const scriptResponse = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const script = scriptResponse.choices[0].message.content || "";

    // Convert to speech
    const audioResponse = await client.audio.speech.create({
      model: "gpt-4o-mini-tts",
      voice: "alloy",
      input: script,
    });

    const audioBuffer = Buffer.from(await audioResponse.arrayBuffer());

    return new NextResponse(audioBuffer, {
      headers: {
        "Content-Type": "audio/mpeg",
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