import OpenAI from "openai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { story, avoidWords, includeWords } = await req.json();

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

Your job is not just to write headlines, but to identify the most compelling editorial angles from the story and express them clearly.

Write 6 distinct news headlines for the story below.

Each headline should:
- Emphasize a DIFFERENT angle (decision, impact, conflict, scale, timeline, or key detail)
- Use strong, active verbs
- Be specific and concrete
- Avoid vague or generic phrasing
- Sound like something that would appear in a major publication (NYT, WSJ, etc.)
- Avoid repetition in structure
- Each headline should vary in structure, not just wording

Strict rules:
- Do NOT use clickbait
- Do NOT use filler words like "huge", "big", "major" unless necessary
- Do NOT repeat the same phrasing across headlines
- Do NOT number the headlines

${avoidWords ? `- STRICTLY avoid using these words: ${avoidWords}` : ""}
${includeWords ? `- MUST include at least one of these words when relevant: ${includeWords}` : ""}

Story:
${story}
`;

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const text = response.choices[0].message.content || "";

    // Clean up output (remove numbering, bullets, etc.)
    const headlines = text
      .split("\n")
      .map(line => line.replace(/^\d+[\).\s-]*/, "").trim())
      .filter(line => line.length > 0);

    return NextResponse.json({ headlines });

  } catch (error) {
    console.error("Headline generation error:", error);

    return NextResponse.json(
      { error: "Failed to generate headlines" },
      { status: 500 }
    );
  }
}