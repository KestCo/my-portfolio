"use client";

import { useState } from "react";

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

function adjustLength(text: string, min: number, max: number) {
  if (text.length > max) {
    let trimmed = text.slice(0, max);
    return trimmed.slice(0, trimmed.lastIndexOf(" "));
  }
  return text;
}

function removeFirstNames(text: string) {
  return text.replace(/\b[A-Z][a-z]+\s([A-Z][a-z]+)\b/g, "$1");
}

function toSentenceCase(text: string) {
  if (!text) return text;

  let result = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

  const properNouns = ["Zverev", "Jodar", "French Open"];

  properNouns.forEach((name) => {
    const regex = new RegExp(name, "gi");
    result = result.replace(regex, name);
  });

  return result;
}

const ranges = [
  { label: "H1", min: 62, max: 68 },
  { label: "H2", min: 57, max: 63 },
  { label: "H3", min: 52, max: 58 },
  { label: "H4", min: 47, max: 53 },
  { label: "H5", min: 42, max: 48 },
  { label: "H6", min: 37, max: 43 },
];

export default function HeadlineTool() {
  const [story, setStory] = useState("");
  const [headline, setHeadline] = useState("");
  const [avoidWords, setAvoidWords] = useState("");
  const [includeWords, setIncludeWords] = useState("");
  const [results, setResults] = useState<any[]>([]);
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

    const data = await res.json();
    const generated = data.headlines || [];

    const structured = ranges.map((range, i) => {
      const item = generated[i] || generated[0] || {
        headline: "Unable to generate",
        angle: "",
        reason: "",
      };

      const clean = toSentenceCase(
        removeFirstNames(
          adjustLength(item.headline, range.min, range.max)
        )
      );

      return {
        label: range.label,
        text: clean,
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

          {/* EDITOR CONTROLS */}
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
            Leave blank if you don’t need constraints.
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
          {results.map((r, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-gray-700 bg-gray-900"
            >
              <h2 className="text-lg font-semibold mb-2">
                {r.label}: {r.text}
              </h2>

              <p className="text-sm mb-2">
                Score: {r.score.total}/10
              </p>

              <p className="text-xs text-gray-400">
                Angle: {r.angle}
              </p>

              <p className="text-xs text-gray-500">
                {r.reason}
              </p>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}