"use client";

import { useState } from "react";

export default function PodcastTool() {
  const [story, setStory] = useState("");
  const [pronunciations, setPronunciations] = useState("");
  const [audioUrl, setAudioUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const fillSample = () => {
    setStory(
      "The Houston City Council approved a major downtown redevelopment plan Tuesday that will bring new housing, retail, and public spaces to the area over the next five years."
    );
    setPronunciations("Jodar = Hodar");
  };

  const generatePodcast = async () => {
    if (!story) return;

    setLoading(true);
    setAudioUrl("");

    try {
      const res = await fetch("/api/generate-podcast", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          story,
          pronunciations,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to generate podcast");
      }

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);

      setAudioUrl(url);
    } catch (err) {
      console.error(err);
      alert("Something went wrong generating the podcast.");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-2">
          Front Page Focus
        </h1>

        <p className="text-gray-400 mb-8">
          Turn stories into natural, conversational podcast discussions.
        </p>

        <div className="bg-gray-900/80 backdrop-blur p-8 rounded-3xl mb-10 shadow-xl border border-gray-800">

          {/* Story */}
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
            className="w-full p-4 rounded-xl bg-white text-black mb-5 min-h-[160px]"
            placeholder="Paste story here..."
            value={story}
            onChange={(e) => setStory(e.target.value)}
          />

          {/* Pronunciation */}
          <label className="block text-sm text-gray-300 mb-2">
            Pronunciation Notes (optional)
          </label>

          <input
            className="w-full p-3 rounded-xl bg-white text-black mb-6"
            placeholder="e.g. Jodar = Hodar"
            value={pronunciations}
            onChange={(e) => setPronunciations(e.target.value)}
          />

          <button
            onClick={generatePodcast}
            className="w-full bg-white text-black py-3 rounded-xl font-semibold hover:opacity-80 transition"
          >
            {loading ? "Generating Podcast..." : "Generate Podcast"}
          </button>

        </div>

        {/* Audio Player */}
        {audioUrl ? (
          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 shadow-lg">

            <h2 className="text-xl font-semibold mb-4">
              Podcast Player
            </h2>

            <audio controls className="w-full">
              <source src={audioUrl} type="audio/mpeg" />
            </audio>

          </div>
        ) : null}

      </div>
    </main>
  );
}