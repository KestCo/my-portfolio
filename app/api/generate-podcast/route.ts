"use client";

import { useState } from "react";

export default function PodcastTool() {
  const [story, setStory] = useState("");
  const [audioUrl, setAudioUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const fillSample = () => {
    setStory(
      "The Houston City Council approved a major downtown redevelopment plan Tuesday that will bring new housing, retail, and public spaces to the area over the next five years."
    );
  };

  const generatePodcast = async () => {
    if (!story) return;

    setLoading(true);

    try {
      const res = await fetch("/api/generate-podcast", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ story }),
      });

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);

      setAudioUrl(url);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <h1 className="text-4xl font-bold mb-2">
          Front Page Focus
        </h1>

        <p className="text-gray-400 mb-8">
          Turn news stories into conversational podcast discussions.
        </p>

        {/* Input Card */}
        <div className="bg-gray-900/80 p-8 rounded-3xl mb-10 shadow-xl border border-gray-800">

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
            className="w-full p-4 rounded-xl bg-white text-black mb-6 min-h-[160px]"
            placeholder="Paste story here..."
            value={story}
            onChange={(e) => setStory(e.target.value)}
          />

          <button
            onClick={generatePodcast}
            className="w-full bg-white text-black py-3 rounded-xl font-semibold"
          >
            {loading ? "Generating Podcast..." : "Generate Podcast"}
          </button>

        </div>

        {/* Player */}
        {audioUrl && (
          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 shadow-lg">

            <h2 className="text-xl font-semibold mb-4">
              Podcast Player
            </h2>

            <audio controls className="w-full">
              <source src={audioUrl} type="audio/mpeg" />
            </audio>

          </div>
        )}

      </div>
    </main>
  );
}