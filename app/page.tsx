import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white px-6 py-16 md:py-20">
      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <section className="mb-28">

          <p className="text-gray-500 mb-4 text-sm tracking-widest uppercase">
            Brad J Kester
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight max-w-4xl">
            Journalist, newsroom leader and digital builder.
          </h1>

          <p className="text-lg text-gray-400 max-w-2xl mb-10">
            I bring editorial judgment, design experience and hands-on experimentation to journalism and digital products.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#journalism"
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
            <span className="max-w-full break-words px-3 py-3 text-gray-300 select-text">
              bradjkester@gmail.com
            </span>
            <a href="/documents/brad-kester-resume-2026.pdf" download className="px-3 py-3 text-gray-300 underline underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              Résumé (PDF)
            </a>
          </div>

        </section>

        <section id="journalism" aria-label="Journalism and editorial design" className="mb-16 scroll-mt-24">
          <Link href="/projects/editorial-design" className="group block rounded-lg border border-gray-700 p-6 sm:p-8 hover:border-white transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            <h2 className="text-2xl font-semibold mb-3 group-hover:underline">Journalism &amp; Editorial Design</h2>
            <p className="text-gray-400 max-w-2xl mb-5">Selected newspaper pages showcasing design, layout and headline writing, from local accountability coverage to commemorative editions and international news.</p>
            <span className="text-sm text-gray-200 underline underline-offset-4">View the design collection</span>
          </Link>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mb-28">
          <h2 className="text-2xl font-semibold mb-12 text-gray-300">
            Digital Projects
          </h2>

          {/* FEATURED ROW */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">

            {/* Innovation Accelerator */}
            <Link
              href="/projects/cloud-coding-system"
              className="group border border-gray-700 rounded-3xl p-10 hover:border-white transition bg-gray-900/50 backdrop-blur shadow-lg"
            >
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">
                Prelaunch Development
              </p>

              <h3 className="text-2xl font-semibold mb-4 group-hover:underline">
                Innovation Accelerator
              </h3>

              <p className="text-gray-400 mb-6">
                A private-pilot workspace for organizing files, assigning work and reviewing results. An independent project I’m designing and developing with AI assistance.
              </p>

              <span className="text-sm text-gray-500 group-hover:text-white transition">
                Explore project →
              </span>
            </Link>

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

            {/* Game Suite */}
            <Link
              href="/projects/apps"
              className="group border border-gray-700 rounded-3xl p-10 hover:border-white transition bg-gray-900/50 backdrop-blur shadow-lg"
            >
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">
                Game Collection
              </p>

              <h3 className="text-2xl font-semibold mb-4 group-hover:underline">
                The Game Suite
              </h3>

              <p className="text-gray-400 mb-6">
                A public showcase for Word Architect, Top Tier and Your Story.
              </p>

              <span className="text-sm text-gray-500 group-hover:text-white transition">
                View games →
              </span>
            </Link>

          </div>

          {/* SUPPORTING GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Front Page Focus */}
            <Link
              href="/projects/podcast-tool"
              className="group border border-gray-800 rounded-2xl p-6 hover:border-gray-500 transition bg-gray-900/40"
            >
              <h3 className="text-lg font-semibold mb-2 group-hover:underline">
                Front Page Focus
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Transform news stories into conversational podcast-style discussions with AI-generated audio.
              </p>
              <span className="text-xs text-gray-500 group-hover:text-white transition">
                Listen →
              </span>
            </Link>

            {/* Automation */}
            <Link
              href="/projects/automation"
              className="group border border-gray-800 rounded-2xl p-6 hover:border-gray-500 transition bg-gray-900/40"
            >
              <h3 className="text-lg font-semibold mb-2 group-hover:underline">
                Automation Systems
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Page automation for more consistent layouts and less repetitive production work.
              </p>
              <span className="text-xs text-gray-500 group-hover:text-white transition">
                View →
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
        <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-800 pt-6 text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Brad J Kester</p>
          <nav aria-label="Contact and résumé" className="flex flex-wrap gap-6">
            <span className="max-w-full break-words py-2 select-text">bradjkester@gmail.com</span>
            <a href="/documents/brad-kester-resume-2026.pdf" download className="py-2 underline underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Résumé (PDF)</a>
          </nav>
        </footer>

      </div>
    </main>
  );
}
