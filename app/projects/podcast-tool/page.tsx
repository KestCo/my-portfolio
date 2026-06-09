"use client";

import { useState } from "react";
import { ProjectCaseStudy } from "@/app/components/ProjectCaseStudy";

export default function PodcastTool() {
  const [story, setStory] = useState("");
  const [pronunciations, setPronunciations] = useState("");
  const [audioUrl, setAudioUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("Writing script...");

  const fillSample = () => {
    setStory(
      "The Houston City Council approved a major downtown redevelopment plan Tuesday that will bring new housing, retail, and public spaces to the area over the next five years."
    );
    setPronunciations("Jodar = Hodar");
  };

  const generatePodcast = async () => {
    if (!story) return;

    setLoading(true);
    setLoadingMessage("Writing script...");
    setAudioUrl("");

    const loadingTimers = [
      window.setTimeout(() => setLoadingMessage("Generating distinct AI voices..."), 2500),
      window.setTimeout(() => setLoadingMessage("Preparing audio..."), 8000),
    ];

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
    } finally {
      loadingTimers.forEach((timer) => window.clearTimeout(timer));
      setLoading(false);
    }
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
            disabled={loading}
            className="w-full bg-white text-black py-3 rounded-xl font-semibold hover:opacity-80 transition disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? loadingMessage : "Generate Podcast"}
          </button>

        </div>

        {/* Audio Player */}
        {audioUrl ? (
          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 shadow-lg">

            <h2 className="text-xl font-semibold mb-4">
              Podcast Player
            </h2>

            <audio controls className="w-full">
              <source src={audioUrl} type="audio/wav" />
            </audio>

          </div>
        ) : null}

        <ProjectCaseStudy
          sections={[
            {
              title: "Problem",
              children:
                "A written story can lose context when it is converted into audio without editorial framing.",
            },
            {
              title: "What I built",
              children:
                "A story-to-audio tool that writes a two-host AI conversation, applies pronunciation notes and gives each AI host a distinct voice profile.",
            },
            {
              title: "Why it matters",
              children:
                "It explores how the same reporting can become a clearer listening experience without pretending the hosts are human.",
            },
            {
              title: "Tools used",
              children:
                "Next.js, OpenAI chat generation, OpenAI text-to-speech, structured script parsing and audio assembly.",
            },
            {
              title: "Try it",
              children:
                "Paste a story above, add pronunciation notes for names if needed and generate a short Front Page Focus segment.",
            },
          ]}
        />

      </div>
    </main>
  );
}
