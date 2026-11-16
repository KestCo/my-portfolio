import { ProjectCaseStudy } from "@/app/components/ProjectCaseStudy";
import Image from "next/image";
import wordArchitectLogo from "@/public/images/games/word-architect-logo.png";
import topTierLogo from "@/public/images/games/top-tier-logo.png";
import yourStoryLogo from "@/public/images/games/your-story-logo.png";

const games = [
  {
    title: "Word Architect",
    logo: wordArchitectLogo,
    text: "A word-based strategy game about structure, constraints and creative decisions.",
    href: "https://word-architect.vercel.app/",
  },
  {
    title: "Top Tier",
    logo: topTierLogo,
    text: "4 tiers. 12 questions. 30 seconds each. Can you reach the Top Tier?",
    href: "https://top-tier-game.vercel.app/",
  },
  {
    title: "Your Story",
    logo: yourStoryLogo,
    text: "A creative world-building experience built around player choices and story prompts.",
    href: "https://your-story-zeta.vercel.app/",
  },
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
          A collection of small applications built to explore interaction, logic and real-world problem solving.
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

          {/* Game Suite */}
          <section aria-labelledby="game-suite-heading" className="border-t border-gray-800 pt-8">
            <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">
              Game Collection
            </p>

            <h2 id="game-suite-heading" className="text-2xl font-semibold mb-3">
              The Game Suite
            </h2>

            <p className="text-gray-400 mb-6 text-sm">
              A lightweight showcase for the games I have built: Word Architect, Top Tier and Your Story. Each game explores a different kind of interaction: word logic, timed reasoning and creative world-building.
            </p>

            <div className="grid gap-4 md:grid-cols-3 mb-6">
              {games.map((game) => (
                <a
                  key={game.title}
                  href={game.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block min-w-0 border border-gray-800 rounded-lg p-5 hover:border-gray-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white transition bg-black/30"
                >
                  <Image src={game.logo} alt={`${game.title} logo`} sizes="(min-width: 944px) 246px, (min-width: 768px) 30vw, calc(100vw - 90px)" className="w-full h-56 object-contain mb-5" />
                  <h3 className="font-semibold mb-2">{game.title}</h3>
                  <p className="text-gray-400 text-sm">{game.text}</p>
                </a>
              ))}
            </div>

            <p className="text-gray-500 text-sm">
              The portfolio now acts as the public showcase for the suite, with direct links to each live game.
            </p>
          </section>

          <section aria-labelledby="command-center-heading" className="border-t border-gray-800 pt-8">
            <h2 id="command-center-heading" className="text-2xl font-semibold mb-3">Editorial Command Center</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Behind the games is a shared Command Center that brings editorial work for Word Architect, Top Tier and Your Story into one place. Editors can open each game's editing or writing tools, make fixes and track drafts through review.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Draft status and readiness views help editors see what needs attention, send work back for corrections and prepare content for publication. The system extends the games beyond the player experience into the editorial work needed to maintain them.
            </p>
          </section>

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
