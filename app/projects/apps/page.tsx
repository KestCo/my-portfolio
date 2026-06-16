import { ProjectCaseStudy } from "@/app/components/ProjectCaseStudy";

export default function AppsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Apps & Interactive Tools
        </h1>

        {/* Intro */}
        <p className="text-gray-300 mb-10 text-lg">
          A collection of small applications built to explore interaction, logic, and real-world problem solving.
        </p>

        <ProjectCaseStudy
          sections={[
            {
              title: "Problem",
              children:
                "Interactive systems need clear rules and feedback so users understand how their choices shape the result.",
            },
            {
              title: "What I built",
              children:
                "Small applications that test language play, decision feedback and constraint-based interaction.",
            },
            {
              title: "Why it matters",
              children:
                "The apps explore how structure can make creative or strategic choices easier to see and evaluate.",
            },
            {
              title: "Tools used",
              children:
                "Front-end prototyping, interaction design, game logic, feedback systems and deployment on Vercel.",
            },
          ]}
        />

        <div className="space-y-16">

          {/* App 1 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Word Architect
            </h2>

            <p className="text-gray-400 mb-4 text-sm">
              An interactive word-based game focused on structure, creativity and user-driven input to shape outcomes.
            </p>

            <video controls className="w-full rounded-2xl mb-4">
              <source src="/videos/app-one.mp4" type="video/mp4" />
            </video>

            {/* ✅ LIVE BUTTON */}
            <a
              href="https://word-architect.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-4 py-2 rounded-xl text-sm mt-2 hover:opacity-80 transition"
            >
              Try Word Architect Live →
            </a>

            <p className="text-gray-500 text-sm mt-4">
              Built to explore how users interact with language, structure and creative constraints.
            </p>
          </div>

          {/* App 2 */}
          <div className="border border-gray-800 rounded-2xl p-6 bg-gray-900/40">
            <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">
              Interactive Game
            </p>

            <h2 className="text-2xl font-semibold mb-2">
              Top Tier Game
            </h2>

            <p className="text-gray-400 mb-4 text-sm">
              A fast, playful ranking game focused on quick choices, comparison and replayable decision-making.
            </p>

            <a
              href="https://top-tier-game.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-4 py-2 rounded-xl text-sm hover:opacity-80 transition"
            >
              Play Top Tier Game Live →
            </a>

            <p className="text-gray-500 text-sm mt-4">
              Built to make ranking and comparison feel immediate, light and fun.
            </p>
          </div>

          {/* App 3 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Decision Feedback System
            </h2>

            <p className="text-gray-400 mb-4 text-sm">
              A system designed to evaluate decisions after they’re made, helping users reflect on outcomes and improve future choices.
            </p>

            <video controls className="w-full rounded-2xl mb-4">
              <source src="/videos/app-two.mp4" type="video/mp4" />
            </video>

            <p className="text-gray-500 text-sm">
              Built to explore how structured feedback loops can improve decision-making in fast-paced environments.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}
