import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white px-6 py-16 md:py-20">
      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <section className="mb-28">

          <p className="text-gray-500 mb-4 text-sm tracking-widest uppercase">
            Brad Kester — Journalist & Developer
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight max-w-4xl">
            Tools for better headlines, clearer stories and smarter workflows.
          </h1>

          <p className="text-lg text-gray-400 max-w-2xl mb-10">
            Working at the intersection of journalism, automation and AI — building systems that improve how content is created, evaluated and delivered.
          </p>

          <div className="flex gap-4">
            <Link
              href="#projects"
              className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:opacity-80 transition"
            >
              View Work
            </Link>

            <Link
              href="#about"
              className="border border-gray-700 px-6 py-3 rounded-xl font-medium hover:border-white transition"
            >
              About
            </Link>
          </div>

        </section>

        {/* PROJECTS */}
        <section id="projects" className="mb-28">
          <h2 className="text-2xl font-semibold mb-12 text-gray-300">
            Selected Work
          </h2>

          {/* FEATURED ROW */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">

            {/* Headline Architect */}
            <Link
              href="/projects/headline-tool"
              className="group border border-gray-700 rounded-3xl p-10 hover:border-white transition bg-gray-900/50 backdrop-blur shadow-lg"
            >
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">
                Featured Tool
              </p>

              <h3 className="text-2xl font-semibold mb-4 group-hover:underline">
                Headline Architect
              </h3>

              <p className="text-gray-400 mb-6">
                AI-powered headline generation, scoring and editorial refinement built around real newsroom constraints.
              </p>

              <span className="text-sm text-gray-500 group-hover:text-white transition">
                Try tool →
              </span>
            </Link>

            {/* Front Page Focus */}
            <Link
              href="/projects/podcast-tool"
              className="group border border-gray-700 rounded-3xl p-10 hover:border-white transition bg-gray-900/50 backdrop-blur shadow-lg"
            >
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">
                Featured Tool
              </p>

              <h3 className="text-2xl font-semibold mb-4 group-hover:underline">
                Front Page Focus
              </h3>

              <p className="text-gray-400 mb-6">
                Transform news stories into natural, conversational podcast-style discussions with AI-generated audio.
              </p>

              <span className="text-sm text-gray-500 group-hover:text-white transition">
                Listen →
              </span>
            </Link>

            {/* Word Architect */}
            <Link
              href="https://word-architect.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-gray-700 rounded-3xl p-10 hover:border-white transition bg-gray-900/50 backdrop-blur shadow-lg"
            >
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">
                Interactive Experience
              </p>

              <h3 className="text-2xl font-semibold mb-4 group-hover:underline">
                Word Architect
              </h3>

              <p className="text-gray-400 mb-6">
                A word-based strategy game exploring structure, constraints and creative decision-making.
              </p>

              <span className="text-sm text-gray-500 group-hover:text-white transition">
                Play →
              </span>
            </Link>

          </div>

          {/* SUPPORTING GRID */}
          <div className="grid md:grid-cols-3 gap-6">

            {/* Automation */}
            <Link
              href="/projects/automation"
              className="group border border-gray-800 rounded-2xl p-6 hover:border-gray-500 transition bg-gray-900/40"
            >
              <h3 className="text-lg font-semibold mb-2 group-hover:underline">
                Automation Systems
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                AI-driven workflows for newsroom production and efficiency.
              </p>
              <span className="text-xs text-gray-500 group-hover:text-white transition">
                View →
              </span>
            </Link>

            {/* Apps */}
            <Link
              href="/projects/apps"
              className="group border border-gray-800 rounded-2xl p-6 hover:border-gray-500 transition bg-gray-900/40"
            >
              <h3 className="text-lg font-semibold mb-2 group-hover:underline">
                Apps & Tools
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Interactive systems exploring logic, feedback and behavior.
              </p>
              <span className="text-xs text-gray-500 group-hover:text-white transition">
                Explore →
              </span>
            </Link>

            {/* Guide */}
            <Link
              href="/projects/how-this-site-was-built"
              className="group border border-gray-800 rounded-2xl p-6 hover:border-gray-500 transition bg-gray-900/40"
            >
              <h3 className="text-lg font-semibold mb-2 group-hover:underline">
                How This Site Was Built
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                From idea to deployment — the full process.
              </p>
              <span className="text-xs text-gray-500 group-hover:text-white transition">
                Read →
              </span>
            </Link>

          </div>

        </section>

        {/* ABOUT */}
        <section id="about" className="mb-28">
          <h2 className="text-2xl font-semibold mb-6 text-gray-300">
            About
          </h2>

         <div className="text-gray-400 max-w-2xl leading-relaxed space-y-4">

  <p>
    I started in small-town journalism, working as a news reporter in Junction City, Kansas then moved into sports reporting in Columbus, Nebraska. From there, I stepped into larger roles — becoming a sports editor and eventually a managing editor in Ridgecrest, California.
  </p>

  <p>
    My path shifted into production and design in Carson City, Nevada then expanded further in Austin, Texas where I led design teams responsible for multiple publications. I continued taking on broader operational roles in Killeen and Houston working across copy editing, production systems and team management.
  </p>

  <p>
    Along the way, I started noticing recurring patterns — repetition, constraint-based decision making and the challenge of translating information across formats. That led me to build tools that make those processes more visible and more intentional.
  </p>

  <p>
    The projects on this site explore that idea from different angles — how headlines are evaluated, how stories are reframed and how content changes depending on how it’s delivered.
  </p>

  <p>
    I’m entirely self-taught and tend to work across disciplines connecting journalism, technology and systems thinking.
  </p>

</div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-gray-800 pt-6 text-gray-500 text-sm">
          © {new Date().getFullYear()} Brad Kester
        </footer>

      </div>
    </main>
  );
}
