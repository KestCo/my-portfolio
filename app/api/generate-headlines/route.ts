import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { story, avoidWords, includeWords } = await req.json();

    const prompt = `
You are a professional newsroom editor.

Write 6 high-quality news headlines for the story below.

Rules:
- Clear, direct, non-clickbait
- Active voice
- Strong verbs
- Avoid vague language
- Avoid: ${avoidWords || "none"}
- Prefer: ${includeWords || "none"}
- Each headline should feel distinct
- Do NOT number them
- Do NOT include bullet points

Story:
${story}
`;

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const text = response.choices[0].message.content || "";

    // CLEAN OUTPUT (this is the key upgrade)
    const headlines = text
      .split("\n")
      .map(line => line.replace(/^\d+[\).\s-]*/, "").trim())
      .filter(line => line.length > 0);

    return NextResponse.json({ headlines });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to generate headlines" },
      { status: 500 }
    );
  }
}