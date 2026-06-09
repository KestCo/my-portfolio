"use client";

import { useState } from "react";
import { ProjectCaseStudy } from "@/app/components/ProjectCaseStudy";

function scoreHeadline(headline: string, reference?: string) {
  let score = 10;

  if (!/defeats|wins|advances|approves|rejects|announces|reveals/i.test(headline)) {
    score -= 2;
  }

  if (/\bis\b|\bare\b|\bwas\b|\bwere\b/.test(headline)) {
    score -= 1.5;
  }

  if (/very|really|huge|big|major/.test(headline)) {
    score -= 1.5;
  }

  if (headline.split(" ").length < 5) {
    score -= 2;
  }

  if (reference && headline.toLowerCase().includes(reference.toLowerCase().split(" ")[0])) {
    score += 1;
  }

  return {
    total: Math.max(1, Math.min(10, score)).toFixed(1),
  };
}

function removeFirstNames(text: string) {
  return text.replace(/\b[A-Z][a-z]+\s([A-Z][a-z]+)\b/g, "$1");
}

function enforceAvoidWords(text: string, avoidWords: string) {
  if (!avoidWords) return text;

  const words = avoidWords
    .split(",")
    .map((w) => w.trim().toLowerCase())
    .filter(Boolean);

  let result = text;

  words.forEach((word) => {
    const regex = new RegExp(`\\b${word}\\b`, "gi");
    result = result.replace(regex, "");
  });

  return result.replace(/\s+/g, " ").trim();
}

function toSentenceCase(text: string) {
  if (!text) return text;

  let result = text.charAt(0).toUpperCase() + text.slice(1);

  const properNouns = ["Zverev", "Jodar", "French Open"];

  properNouns.forEach((name) => {
    const regex = new RegExp(name, "gi");
    result = result.replace(regex, name);
  });

  return result;
}

const headlineRanges = [
  { label: "H1", min: 62, max: 68 },
  { label: "H2", min: 57, max: 63 },
  { label: "H3", min: 52, max: 58 },
  { label: "H4", min: 47, max: 53 },
  { label: "H5", min: 42, max: 48 },
  { label: "H6", min: 37, max: 43 },
];

type GeneratedHeadline = {
  label?: string;
  headline: string;
  angle?: string;
  reason?: string;
};

type HeadlineResult = {
  label: string;
  text: string;
  range: {
    min: number;
    max: number;
  };
  angle?: string;
  reason?: string;
  score: ReturnType<typeof scoreHeadline>;
};

export default function HeadlineTool() {
  const [story, setStory] = useState("");
  const [headline, setHeadline] = useState("");
  const [avoidWords, setAvoidWords] = useState("");
  const [includeWords, setIncludeWords] = useState("");
  const [results, setResults] = useState<HeadlineResult[]>([]);
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    if (!story) return;

    setLoading(true);

    const res = await fetch("/api/generate-headlines", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        story,
        avoidWords,
        includeWords,
        referenceHeadline: headline,
      }),
    });

    const data = (await res.json()) as { headlines?: GeneratedHeadline[] };
    const generated = data.headlines ?? [];

    const structured = headlineRanges.map((range, i) => {
      const item: GeneratedHeadline =
        generated.find((candidate) => candidate.label?.toUpperCase() === range.label) ??
        generated[i] ??
        generated[0] ??
        {
          headline: "Unable to generate",
          angle: "",
          reason: "",
        };

      const clean = toSentenceCase(
        enforceAvoidWords(
          removeFirstNames(item.headline),
          avoidWords
        )
      );

      return {
        label: range.label,
        text: clean,
        range: {
          min: range.min,
          max: range.max,
        },
        angle: item.angle,
        reason: item.reason,
        score: scoreHeadline(clean, headline),
      };
    });

    setResults(structured);
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white px-6 py-16">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold mb-6">
          Headline Architect
        </h1>

        {/* INPUT CARD */}
        <div className="bg-gray-900/80 backdrop-blur p-8 rounded-3xl mb-10 border border-gray-800 shadow-lg">

          {/* HEADLINE FIRST */}
          <label className="block text-sm text-gray-300 mb-2">
            Your Headline (optional)
          </label>

          <input
            className="w-full p-3 rounded-xl bg-white text-black mb-5"
            placeholder="Enter headline direction..."
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
          />

          {/* CONTROLS */}
          <div className="grid md:grid-cols-2 gap-4 mb-5">

            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Words to Avoid
              </label>
              <input
                className="w-full p-3 rounded-xl bg-white text-black"
                placeholder="e.g. huge, major"
                value={avoidWords}
                onChange={(e) => setAvoidWords(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Words to Include
              </label>
              <input
                className="w-full p-3 rounded-xl bg-white text-black"
                placeholder="e.g. French Open"
                value={includeWords}
                onChange={(e) => setIncludeWords(e.target.value)}
              />
            </div>

          </div>

          <p className="text-xs text-gray-500 mb-5">
            Leave blank if you don&apos;t need constraints.
          </p>

          {/* STORY */}
          <label className="block text-sm text-gray-300 mb-2">
            Story / Article
          </label>

          <textarea
            className="w-full p-4 rounded-xl bg-white text-black mb-5 min-h-[140px]"
            placeholder="Paste story..."
            value={story}
            onChange={(e) => setStory(e.target.value)}
          />

          <button
            onClick={generate}
            className="w-full bg-white text-black py-3 rounded-xl font-semibold"
          >
            {loading ? "Generating..." : "Generate Headlines"}
          </button>

        </div>

        {/* RESULTS */}
        <div className="space-y-6">
          {results.map((r, i) => {
            const characterCount = r.text.length;
            const isInRange =
              characterCount >= r.range.min && characterCount <= r.range.max;

            return (
              <div
                key={i}
                className="p-6 rounded-2xl border border-gray-700 bg-gray-900"
              >
                <h2 className="text-lg font-semibold mb-2">
                  {r.label}: {r.text}
                </h2>

                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs mb-3">
                  <span className="text-gray-500">
                    {characterCount} characters
                  </span>
                  <span className={isInRange ? "text-emerald-400" : "text-amber-300"}>
                    {isInRange
                      ? `In range (${r.range.min}-${r.range.max})`
                      : `Target ${r.range.min}-${r.range.max}`}
                  </span>
                  <span className="text-gray-500">
                    Score: {r.score.total}/10
                  </span>
                </div>

                {r.angle && (
                  <p className="text-xs text-gray-400">
                    Angle: {r.angle}
                  </p>
                )}

                {r.reason && (
                  <p className="text-xs text-gray-500">
                    {r.reason}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <ProjectCaseStudy
          sections={[
            {
              title: "Problem",
              children:
                "Headline work has to balance clarity, tone, length and editorial judgment under real deadline pressure.",
            },
            {
              title: "What I built",
              children:
                "A headline generator that accepts a story, directional headline, required words and blocked words, then returns H1-H6 options with scoring and range feedback.",
            },
            {
              title: "Why it matters",
              children:
                "It makes headline tradeoffs visible instead of treating AI output as a black box.",
            },
            {
              title: "Tools used",
              children:
                "Next.js, React state, OpenAI API, structured prompting and editorial scoring rules.",
            },
            {
              title: "Try it",
              children:
                "Paste a story above and compare how the framing changes as the target headline length gets shorter.",
            },
          ]}
        />

      </div>
    </main>
  );
}
