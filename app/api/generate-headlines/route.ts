import OpenAI from "openai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { story, avoidWords, includeWords, referenceHeadline } = await req.json();

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

Each headline must reflect ONE of these editorial angles:
1. Decision
2. Impact
3. Scale
4. Timeline
5. Key actor
6. Secondary detail

${avoidWords ? `- STRICTLY avoid: ${avoidWords}` : ""}
${includeWords ? `- MUST include when relevant: ${includeWords}` : ""}
${referenceHeadline ? `Use this headline as directional guidance: ${referenceHeadline}` : ""}

Return ONLY valid JSON in this format:

[
  {
    "headline": "...",
    "angle": "Decision",
    "reason": "Why this headline works"
  }
]

Story:
${story}
`;

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const text = response.choices[0].message.content || "";

    let headlines = [];

    try {
      headlines = JSON.parse(text);
    } catch {
      console.error("JSON parse failed:", text);
      headlines = [];
    }

    return NextResponse.json({ headlines });

  } catch (error) {
    console.error("Headline error:", error);

    return NextResponse.json(
      { error: "Failed to generate headlines" },
      { status: 500 }
    );
  }
}