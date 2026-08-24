import { ProjectCaseStudy } from "@/app/components/ProjectCaseStudy";

const games = [
  {
    title: "Word Architect",
    text: "A word-based strategy game about structure, constraints and creative decisions.",
    href: "https://word-architect.vercel.app/",
  },
  {
    title: "Top Tier",
    text: "4 tiers. 12 questions. 30 seconds each. Can you reach the Top Tier?",
    href: "https://top-tier-game.vercel.app/",
  },
  {
    title: "Your Story",
    text: "A creative world-building experience built around player choices and story prompts.",
    href: "https://your-story-zeta.vercel.app/",
  },
];

const cloudCodingBenefits = [
  "Keeps product context from getting lost across branches, chats and tools.",
  "Helps teams compare experiments before deciding what should ship.",
  "Gives AI coding tools the same mission brief, constraints and review expectations.",
  "Creates an event trail for what changed, why it changed and what still needs attention.",
];

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
                "Games and interactive systems need clear rules, fast feedback and enough personality that people want to come back.",
            },
            {
              title: "What I built",
              children:
                "A public Game Suite that gathers Word Architect, Top Tier and Your Story into one portfolio showcase.",
            },
            {
              title: "Why it matters",
              children:
                "The suite shows how structure, constraints and replayable choices can turn editorial instincts into playful digital experiences.",
            },
            {
              title: "Tools used",
              children:
                "Front-end prototyping, interaction design, game logic, feedback systems and deployment on Vercel.",
            },
          ]}
        />

        <div className="space-y-16">

          {/* Cloud Coding System */}
          <div className="border border-gray-700 rounded-3xl p-8 bg-gray-900/50">
            <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">
              Product system
            </p>

            <h2 className="text-2xl font-semibold mb-3">
              Cloud Coding CNS
            </h2>

            <p className="text-gray-400 mb-6 text-sm">
              A control plane for building digital products such as websites, apps and platforms. The goal is to give every product branch one shared place for context, tasks, lineage, status, review signals and AI coding handoffs.
            </p>

            <div className="grid gap-4 md:grid-cols-2 mb-6">
              {cloudCodingBenefits.map((benefit) => (
                <div
                  key={benefit}
                  className="border border-gray-800 rounded-2xl p-5 bg-black/30"
                >
                  <p className="text-gray-500 text-sm">{benefit}</p>
                </div>
              ))}
            </div>

            <a
              href="/projects/cloud-coding-system"
              className="inline-block bg-white text-black px-4 py-2 rounded-xl text-sm hover:opacity-80 transition"
            >
              Read the project notes →
            </a>
          </div>

          {/* Game Suite */}
          <div className="border border-gray-700 rounded-3xl p-8 bg-gray-900/50">
            <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">
              Game Collection
            </p>

            <h2 className="text-2xl font-semibold mb-3">
              The Game Suite
            </h2>

            <p className="text-gray-400 mb-6 text-sm">
              A lightweight showcase for the games I have built: Word Architect, Top Tier and Your Story. Each game explores a different kind of interaction: word logic, timed reasoning and creative world-building.
            </p>

            <div className="grid gap-4 md:grid-cols-2 mb-6">
              {games.map((game) => (
                <a
                  key={game.title}
                  href={game.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-gray-800 rounded-2xl p-5 hover:border-gray-500 transition bg-black/30"
                >
                  <h3 className="font-semibold mb-2">{game.title}</h3>
                  <p className="text-gray-500 text-sm">{game.text}</p>
                </a>
              ))}
            </div>

            <p className="text-gray-500 text-sm">
              The portfolio now acts as the public showcase for the suite, with direct links to each live game.
            </p>
          </div>

          {/* App 1 */}
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
