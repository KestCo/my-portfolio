"use client";

import { useState } from "react";

export default function PodcastTool() {
  const [story, setStory] = useState("");
  const [script, setScript] = useState("");
  const [loading, setLoading] = useState(false);

  const generatePodcast = async () => {
    if (!story) return;

    setLoading(true);

    const res = await fetch("/api/generate-podcast", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ story }),
    });

    const data = await res.json();
    setScript(data.script);

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-16">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold mb-4">
          Front Page Focus
        </h1>

        <p className="text-gray-400 mb-8">
          Turn stories into conversational podcast-style discussions.
        </p>

        <div className="bg-gray-900 p-6 rounded-2xl mb-8">

          <textarea
            className="w-full p-4 rounded-xl bg-white text-black mb-4"
            placeholder="Paste story here..."
            value={story}
            onChange={(e) => setStory(e.target.value)}
          />

          <button
            onClick={generatePodcast}
            className="bg-white text-black px-5 py-2 rounded-xl"
          >
            {loading ? "Generating..." : "Generate Podcast"}
          </button>

        </div>

        {script && (
          <div className="bg-gray-900 p-6 rounded-2xl">
            <h2 className="text-xl font-semibold mb-4">
              Podcast Script
            </h2>

            <p className="text-gray-300 whitespace-pre-line">
              {script}
            </p>
          </div>
        )}

      </div>
    </main>
  );
}