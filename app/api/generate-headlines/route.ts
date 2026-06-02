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
You are a professional newsroom editor.

Write 6 high-quality news headlines for the story below.

Rules:
- Use clear, direct, non-clickbait language
- Use active voice and strong verbs
- Be specific and avoid vague phrasing
- Each headline must be distinct
- Do NOT number the headlines
- Do NOT use bullet points

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