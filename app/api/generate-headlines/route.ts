import OpenAI from "openai";
import { NextResponse } from "next/server";

type GenerateHeadlinesRequest = {
  story?: string;
  avoidWords?: string;
  includeWords?: string;
  referenceHeadline?: string;
};

type HeadlineSlot = {
  label: string;
  min: number;
  max: number;
};

type GeneratedHeadline = {
  label?: string;
  headline?: string;
  angle?: string;
  reason?: string;
};

const headlineSlots: HeadlineSlot[] = [
  { label: "H1", min: 62, max: 68 },
  { label: "H2", min: 57, max: 63 },
  { label: "H3", min: 52, max: 58 },
  { label: "H4", min: 47, max: 53 },
  { label: "H5", min: 42, max: 48 },
  { label: "H6", min: 37, max: 43 },
];

function cleanInput(value?: string) {
  return typeof value === "string" ? value.trim() : "";
}

function toHeadlineItem(value: unknown): GeneratedHeadline | null {
  if (!value || typeof value !== "object") return null;

  const record = value as Record<string, unknown>;
  const headline = typeof record.headline === "string" ? record.headline.trim() : "";

  if (!headline) return null;

  return {
    label: typeof record.label === "string" ? record.label.trim().toUpperCase() : undefined,
    headline,
    angle: typeof record.angle === "string" ? record.angle.trim() : "",
    reason: typeof record.reason === "string" ? record.reason.trim() : "",
  };
}

function parseJsonHeadlines(text: string) {
  const trimmed = text.trim();
  const candidates = [
    trimmed,
    trimmed.match(/\{[\s\S]*\}/)?.[0] ?? "",
    trimmed.match(/\[[\s\S]*\]/)?.[0] ?? "",
  ].filter(Boolean);

  for (const candidate of candidates) {
    try {
      const parsed = JSON.parse(candidate) as unknown;
      const rawHeadlines =
        Array.isArray(parsed)
          ? parsed
          : parsed && typeof parsed === "object" && Array.isArray((parsed as { headlines?: unknown }).headlines)
            ? (parsed as { headlines: unknown[] }).headlines
            : [];

      const headlines = rawHeadlines
        .map(toHeadlineItem)
        .filter((item): item is GeneratedHeadline => Boolean(item));

      if (headlines.length) return headlines;
    } catch {
      // Try the next candidate.
    }
  }

  return [];
}

function parsePlainTextHeadlines(text: string): GeneratedHeadline[] {
  return text
    .split("\n")
    .map((line) => line.replace(/^\s*(?:\d+[\).:-]\s*|[-*]\s*)/, "").trim())
    .filter((line) => line.length > 10)
    .slice(0, headlineSlots.length)
    .map((headline, index) => ({
      label: headlineSlots[index].label,
      headline,
      angle: "",
      reason: "",
    }));
}

function normalizeHeadlines(items: GeneratedHeadline[]) {
  return headlineSlots
    .map((slot, index) => {
      const item =
        items.find((candidate) => candidate.label === slot.label) ?? items[index];
      const headline = cleanInput(item?.headline);

      if (!headline) return null;

      return {
        label: slot.label,
        headline,
        angle: cleanInput(item?.angle),
        reason: cleanInput(item?.reason),
      };
    })
    .filter((item): item is {
      label: string;
      headline: string;
      angle: string;
      reason: string;
    } => Boolean(item))
    .slice(0, headlineSlots.length);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as GenerateHeadlinesRequest;
    const story = cleanInput(body.story);
    const avoidWords = cleanInput(body.avoidWords);
    const includeWords = cleanInput(body.includeWords);
    const referenceHeadline = cleanInput(body.referenceHeadline);

    if (!story) {
      return NextResponse.json(
        { error: "Story is required" },
        { status: 400 }
      );
    }

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const slotInstructions = headlineSlots
      .map((slot) => `- ${slot.label}: ${slot.min}-${slot.max} characters`)
      .join("\n");

    const userConstraints = [
      avoidWords ? `- Strictly avoid these words or close variants: ${avoidWords}` : "",
      includeWords ? `- Include these words or phrases naturally when factually accurate: ${includeWords}` : "",
      referenceHeadline ? `- Use this existing headline as directional guidance only; do not copy it: ${referenceHeadline}` : "",
    ].filter(Boolean).join("\n");

    const prompt = `
Generate newsroom-ready headline options for the story inside <story> tags.

Return exactly one valid JSON object with this shape:
{
  "headlines": [
    {
      "label": "H1",
      "headline": "A complete headline within the assigned character range",
      "angle": "The editorial angle this option emphasizes",
      "reason": "One concise sentence explaining why this headline works"
    }
  ]
}

Headline slots and target lengths:
${slotInstructions}

Rules:
- Return exactly six headline objects, one for each label H1 through H6.
- Keep every headline within its assigned character range.
- Make each headline a complete thought with a clear subject, strong active verb and object or outcome.
- Use sentence case while preserving proper nouns and acronyms.
- Use last names only for people already identified in the story.
- Do not invent facts, names, outcomes or certainty not supported by the story.
- Make the six editorial angles genuinely distinct.
- Keep "angle" short, such as Outcome, Stakes, Conflict, Cause, Consequence or Reader impact.
- Keep "reason" to one concise sentence.
- If a user constraint conflicts with accuracy, prioritize accuracy and explain the compromise in "reason".
- Do not include markdown, code fences, commentary or numbered lists.
${userConstraints ? `\nUser constraints:\n${userConstraints}` : ""}

<story>
${story}
</story>
`;

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: "You are a senior newsroom editor. Return only valid JSON for the requested headline structure.",
        },
        { role: "user", content: prompt },
      ],
    });

    const text = response.choices[0].message.content || "";
    const parsedHeadlines = parseJsonHeadlines(text);
    const fallbackHeadlines = parsedHeadlines.length
      ? parsedHeadlines
      : parsePlainTextHeadlines(text);
    const headlines = normalizeHeadlines(fallbackHeadlines);

    return NextResponse.json({ headlines });

  } catch (error) {
    console.error("Headline API error:", error);

    return NextResponse.json(
      { error: "Failed to generate headlines" },
      { status: 500 }
    );
  }
}
