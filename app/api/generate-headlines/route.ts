import OpenAI from "openai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { story, avoidWords, includeWords, referenceHeadline } = await req.json();

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
You are a senior newsroom editor.

Write EXACTLY 6 headlines for the story below.

Each headline must:
- Be a complete thought (subject + verb + object)
- Use strong, active verbs
- Use last names only (no first names)
- Use sentence case
- Be specific and clear

Each headline should reflect a DIFFERENT editorial angle.

${avoidWords ? `- STRICTLY avoid: ${avoidWords}` : ""}
${includeWords ? `- MUST include when relevant: ${includeWords}` : ""}
${referenceHeadline ? `Use this headline as directional guidance: ${referenceHeadline}` : ""}

Return EITHER:
1. A JSON array like:
[
  { "headline": "...", "angle": "...", "reason": "..." }
]

OR
2. Plain text headlines, one per line.

Story:
${story}
`;

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const text = response.choices[0].message.content || "";

    let headlines: any[] = [];

    // 🔥 Try structured JSON first
    try {
      const jsonMatch = text.match(/\[[\s\S]*\]/);
      if (jsonMatch) {
        headlines = JSON.parse(jsonMatch[0]);
      }
    } catch (err) {
      console.error("JSON parse failed:", text);
    }

    // 🔥 Fallback to plain text headlines
    if (!headlines.length) {
      headlines = text
        .split("\n")
        .filter(line => line.trim().length > 10)
        .slice(0, 6)
        .map(line => ({
          headline: line.trim(),
          angle: "",
          reason: "Generated headline (fallback mode)"
        }));
    }

    return NextResponse.json({ headlines });

  } catch (error) {
    console.error("Headline API error:", error);

    return NextResponse.json(
      { error: "Failed to generate headlines" },
      { status: 500 }
    );
  }
}