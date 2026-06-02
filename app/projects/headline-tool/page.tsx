"use client";

import { useState } from "react";

function scoreHeadline(headline: string, story: string) {
  const words = headline.split(" ");

  let clarity = words.length > 4 ? 8 : 6;
  let brevity = words.length <= 12 ? 9 : 6;

  let strongVerbPattern =
    /announces|reveals|launches|approves|rejects|wins|loses|passes|builds|cuts/i;
  let verbStrength = strongVerbPattern.test(headline) ? 9 : 5;

  let weakWords = /very|really|huge|big|major|important/i;
  let penalty = weakWords.test(headline) ? -2 : 0;

  let specificity =
    /\d|Houston|Mayor|City|Texas|Council/i.test(headline) ? 8 : 6;

  let passive = /\bis\b|\bare\b|\bwas\b|\bwere\b/.test(headline);
  let voiceScore = passive ? 5 : 9;

  let contextMatch = story
    .toLowerCase()
    .includes(words[0]?.toLowerCase())
    ? 8
    : 6;

  let total =
    (clarity +
      brevity +
      verbStrength +
      specificity +
      contextMatch +
      voiceScore) /
      6 +
    penalty;

  return {
    clarity,
    brevity,
    verbStrength,
    specificity,
    contextMatch,
    voiceScore,
    total: total.toFixed(1),
  };
}

function getFeedback(headline: string) {
  let feedback = [];

  if (/very|really|huge|big|major/.test(headline)) {
    feedback.push("Avoid vague or inflated language.");
  }

  if (/\bis\b|\bare\b|\bwas\b|\bwere\b/.test(headline)) {
    feedback.push("Use stronger active verbs.");
  }

  if (headline.length > 70) {
    feedback.push("Headline may be too long.");
  }

  if (headline.split(" ").length < 4) {
    feedback.push("Headline may be too vague.");
  }

  return feedback;
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

  return result.trim();
}

export default function HeadlineTool() {
  const [story, setStory] = useState("");
  const [userHeadline, setUserHeadline] = useState("");
  const [avoidWords, setAvoidWords] = useState("");
  const [includeWords, setIncludeWords] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [userScore, setUserScore] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const fillSample = () => {
    setStory(
      "The Houston City Council approved a major downtown redevelopment plan Tuesday that will bring new housing, retail, and public spaces to the area over the next five years."
    );
    setUserHeadline("");
  };

  const generateHeadlines = async () => {
    if (!story) return;

    setLoading(true);

    try {
      const res = await fetch("/api/generate-headlines", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          story,
          avoidWords,
          includeWords,
        }),
      });

      const data = await res.json();
      const generated = data.headlines || [];

      const structured = ranges.map((range, i) => {
        const base = generated[i] || "Headline not generated";
        const adjusted = adjustLength(base, range.min, range.max);

        return {
          label: range.label,
          text: adjusted,
          length: adjusted.length,
          score: scoreHeadline(adjusted, story),
        };
      });

      const best = structured.reduce((prev, current) =>
        parseFloat(prev.score.total) > parseFloat(current.score.total)
          ? prev
          : current
      );

      setResults(
        structured.map((r) => ({
          ...r,
          isBest: r.text === best.text,
        }))
      );

      if (userHeadline) {
        setUserScore({
          text: userHeadline,
          length: userHeadline.length,
          score: scoreHeadline(userHeadline, story),
        });
      }
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-2">
          Headline Architect
        </h1>

        <p className="text-gray-400 mb-8">
          AI-powered headline generation, scoring, and editorial refinement.
        </p>

        <div className="bg-gray-900/80 backdrop-blur p-8 rounded-3xl mb-10 shadow-xl border border-gray-800">

          <label className="block text-sm text-gray-300 mb-2">
            Your Headline (optional)
          </label>

          <input
            className="w-full p-4 rounded-xl bg-white text-black mb-5"
            value={userHeadline}
            onChange={(e) => setUserHeadline(e.target.value)}
          />

          <div className="grid md:grid-cols-2 gap-4 mb-5">
            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Words to Avoid
              </label>
              <input
                className="w-full p-3 rounded-xl bg-white text-black"
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
                value={includeWords}
                onChange={(e) => setIncludeWords(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-between items-center mb-2">
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
            className="w-full p-4 rounded-xl bg-white text-black mb-5 min-h-[140px]"
            value={story}
            onChange={(e) => setStory(e.target.value)}
          />

          <button
            onClick={generateHeadlines}
            className="w-full bg-white text-black py-3 rounded-xl font-semibold hover:opacity-80"
          >
            {loading ? "Analyzing..." : "Generate Headlines"}
          </button>
        </div>

        {userScore && (
          <div className="mb-10 border border-gray-700 p-5 rounded-2xl bg-gray-900">
            <h2 className="text-lg font-semibold mb-2">Your Headline</h2>
            <p>{userScore.text}</p>
            <p className="text-sm mt-2">
              Score: <strong>{userScore.score.total}/10</strong>
            </p>
          </div>
        )}

        <div className="space-y-6">
          {results.map((r, i) => {
            const feedback = getFeedback(r.text);

            return (
              <div
                key={i}
                className={`p-6 rounded-2xl transition-all ${
                  r.isBest
                    ? "border border-green-400 bg-green-900/20"
                    : "border border-gray-700 bg-gray-900"
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

                <p className="text-sm mb-2">
                  Score: <strong>{r.score.total}/10</strong>
                </p>

                {feedback.length > 0 && (
                  <div className="mt-2 text-xs text-gray-400">
                    {feedback.map((f, i) => (
                      <p key={i}>• {f}</p>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </main>
  );
}
