"use client";

import { useState } from "react";

function scoreHeadline(headline: string, story: string) {
  const words = headline.split(" ");

  let clarity = words.length > 4 ? 8 : 6;
  let brevity = words.length <= 12 ? 9 : 6;

  let verbStrength = /announces|reveals|launches|approves|rejects|wins|loses/i.test(headline)
    ? 9
    : 6;

  let specificity =
    /\d|Houston|Mayor|City|Texas/i.test(headline) ? 8 : 6;

  let contextMatch = story
    .toLowerCase()
    .includes(words[0]?.toLowerCase())
    ? 8 : 6;

  let total =
    (clarity + brevity + verbStrength + specificity + contextMatch) / 5;

  return {
    clarity,
    brevity,
    verbStrength,
    specificity,
    contextMatch,
    total: total.toFixed(1),
  };
}

const ranges = [
  { label: "H1", min: 62, max: 68 },
  { label: "H2", min: 57, max: 63 },
  { label: "H3", min: 52, max: 58 },
  { label: "H4", min: 47, max: 53 },
  { label: "H5", min: 42, max: 48 },
  { label: "H6", min: 37, max: 43 },
];

function adjustLength(text: string, min: number, max: number) {
  let result = text;

  while (result.length < min) {
    result += " more";
  }

  if (result.length > max) {
    result = result.slice(0, max);
  }

  return result;
}

export default function HeadlineTool() {
  const [story, setStory] = useState("");
  const [userHeadline, setUserHeadline] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [userScore, setUserScore] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const fillSample = () => {
    setStory(
      "The Houston City Council approved a major downtown redevelopment plan Tuesday that will bring new housing, retail, and public spaces to the area over the next five years."
    );
    setUserHeadline("");
  };

  const generateHeadlines = () => {
    if (!story) return;

    setLoading(true);

    setTimeout(() => {
      const base = [
        "City announces new downtown redevelopment plan",
        "Officials reveal major changes to downtown project",
        "New plan could reshape Houston downtown area",
        "Downtown redevelopment plan approved by city council",
        "City leaders move forward with new downtown plan",
        "New downtown plan moves ahead after approval",
      ];

      const generated = ranges.map((range, i) => {
        const adjusted = adjustLength(base[i], range.min, range.max);

        return {
          label: range.label,
          text: adjusted,
          length: adjusted.length,
          score: scoreHeadline(adjusted, story),
        };
      });

      const best = generated.reduce((prev, current) =>
        parseFloat(prev.score.total) > parseFloat(current.score.total)
          ? prev
          : current
      );

      setResults(
        generated.map((g) => ({
          ...g,
          isBest: g.text === best.text,
        }))
      );

      if (userHeadline) {
        setUserScore({
          text: userHeadline,
          length: userHeadline.length,
          score: scoreHeadline(userHeadline, story),
        });
      }

      setLoading(false);
    }, 600);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-12">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-3xl font-bold mb-4">
          Headline Generator + Scorer
        </h1>

        <p className="text-gray-400 mb-8">
          Enter your headline and story to generate alternatives and evaluate them like an editor.
        </p>

        {/* INPUT CARD */}
        <div className="bg-gray-800 p-6 rounded-2xl mb-8 shadow-lg">

          {/* HEADLINE FIRST */}
          <label className="block text-sm text-gray-300 mb-2">
            Your Headline (optional)
          </label>

          <input
            className="w-full p-3 rounded-xl bg-white text-black mb-6"
            placeholder="Enter your headline..."
            value={userHeadline}
            onChange={(e) => setUserHeadline(e.target.value)}
          />

          {/* STORY SECOND */}
          <div className="flex justify-between items-center mb-3">
            <label className="text-sm text-gray-300">
              Story / Article
            </label>

            <button
              onClick={fillSample}
              className="text-xs text-gray-400 hover:text-white"
            >
              Use sample
            </button>
          </div>

          <textarea
            className="w-full p-4 rounded-xl bg-white text-black mb-4"
            placeholder="Paste your story here..."
            value={story}
            onChange={(e) => setStory(e.target.value)}
          />

          <button
            onClick={generateHeadlines}
            className="bg-white text-black px-5 py-2 rounded-xl font-medium hover:opacity-80 transition"
          >
            {loading ? "Analyzing..." : "Generate & Score Headlines"}
          </button>

        </div>

        {/* USER HEADLINE */}
        {userScore && (
          <div className="mb-8 border border-gray-700 p-4 rounded-xl bg-gray-800">
            <h2 className="text-lg font-semibold mb-2">
              Your Headline
            </h2>

            <div className="flex justify-between">
              <p>{userScore.text}</p>
              <span className="text-xs text-gray-400">
                {userScore.length} chars
              </span>
            </div>

            <p className="text-sm mt-2">
              Score: <strong>{userScore.score.total}/10</strong>
            </p>
          </div>
        )}

        {/* RESULTS */}
        <div className="space-y-6">
          {results.map((r, i) => (
            <div
              key={i}
              className={`p-5 rounded-xl ${
                r.isBest
                  ? "border border-green-500 bg-green-900/20"
                  : "border border-gray-700 bg-gray-800"
              }`}
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold">
                  {r.label}: {r.text}
                </h2>

                <span className="text-xs text-gray-400">
                  {r.length} chars
                </span>
              </div>

              {r.isBest && (
                <p className="text-green-400 text-sm mb-2">
                  ⭐ Recommended
                </p>
              )}

              <p className="text-sm mb-3">
                Score: <strong>{r.score.total}/10</strong>
              </p>

              <div className="text-xs text-gray-400 grid grid-cols-2 gap-2">
                <p>Clarity: {r.score.clarity}</p>
                <p>Brevity: {r.score.brevity}</p>
                <p>Verb Strength: {r.score.verbStrength}</p>
                <p>Specificity: {r.score.specificity}</p>
                <p>Context Match: {r.score.contextMatch}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}