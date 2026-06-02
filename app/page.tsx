import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">

        {/* Hero Section */}
        <section className="mb-24">
          <p className="text-gray-500 mb-4 text-sm tracking-widest uppercase">
            Brad Kester — Journalist & Developer
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            I build tools that improve how content gets created.
          </h1>

          <p className="text-lg text-gray-400 max-w-2xl mb-10">
            Working at the intersection of journalism, automation and AI — building systems and tools that make newsrooms and workplaces more efficient.
          </p>

          <div className="flex gap-4">
            <Link
              href="#projects"
              className="bg-white text-black px-6 py-3 rounded-2xl font-medium hover:opacity-80 transition"
            >
              View Projects
            </Link>
            <Link
              href="#about"
              className="border border-gray-700 px-6 py-3 rounded-2xl font-medium hover:border-white transition"
            >
              About Me
            </Link>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-24">
          <h2 className="text-2xl font-semibold mb-10">Featured Work</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

            {/* Automation */}
            <Link
              href="/projects/automation"
              className="group border border-gray-800 rounded-2xl p-6 hover:border-gray-500 transition"
            >
              <h3 className="text-lg font-semibold mb-2 group-hover:underline">
                Automation Systems
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                AI-powered workflows for newsroom efficiency.
              </p>
              <span className="text-xs text-gray-500 group-hover:text-white transition">
                View demos →
              </span>
            </Link>

            {/* Apps */}
            <Link
              href="/projects/apps"
              className="group border border-gray-800 rounded-2xl p-6 hover:border-gray-500 transition"
            >
              <h3 className="text-lg font-semibold mb-2 group-hover:underline">
                Apps & Interactive Tools
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Interactive systems exploring logic and feedback.
              </p>
              <span className="text-xs text-gray-500 group-hover:text-white transition">
                View demos →
              </span>
            </Link>

            {/* Headline Tool */}
            <Link
              href="/projects/headline-tool"
              className="group border border-gray-800 rounded-2xl p-6 hover:border-gray-500 transition"
            >
              <h3 className="text-lg font-semibold mb-2 group-hover:underline">
                Headline Architect
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                AI-powered headline generation, scoring and refinement.
              </p>
              <span className="text-xs text-gray-500 group-hover:text-white transition">
                Try tool →
              </span>
            </Link>

            {/* Podcast Tool */}
            <Link
              href="/projects/podcast-tool"
              className="group border border-gray-800 rounded-2xl p-6 hover:border-gray-500 transition"
            >
              <h3 className="text-lg font-semibold mb-2 group-hover:underline">
                Front Page Focus
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Turn stories into conversational podcast discussions.
              </p>
              <span className="text-xs text-gray-500 group-hover:text-white transition">
                Listen →
              </span>
            </Link>

            {/* Guide */}
            <Link
              href="/projects/how-this-site-was-built"
              className="group border border-gray-800 rounded-2xl p-6 hover:border-gray-500 transition"
            >
              <h3 className="text-lg font-semibold mb-2 group-hover:underline">
                How This Site Was Built
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                From scratch to live deployment.
              </p>
              <span className="text-xs text-gray-500 group-hover:text-white transition">
                View guide →
              </span>
            </Link>

          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-24">
          <h2 className="text-2xl font-semibold mb-6">About</h2>

          <p className="text-gray-400 max-w-2xl leading-relaxed">
            I started in small-town journalism, working as a news reporter in Junction City, Kansas then moved into sports reporting in Columbus, Nebraska. From there, I stepped into larger roles — becoming a sports editor and eventually a managing editor in Ridgecrest, California.
            <br /><br />
            My path shifted into production and design in Carson City, Nevada then expanded further in Austin, Texas where I led design teams responsible for multiple publications. I continued taking on broader operational roles in Killeen and Houston working across copy editing, production systems and team management.
            <br /><br />
            Along the way, I started noticing recurring themes across major publications — automation, AI and the future of work. That curiosity led me to build tools and systems that improve efficiency and output.
            <br /><br />
            I’m entirely self-taught and tend to work across disciplines connecting ideas between journalism, technology and operations.
            <br /><br />
            Outside of work, I played college football and paint — two disciplines that continue to shape how I approach structure, creativity and problem-solving.
          </p>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-800 pt-6 text-gray-500 text-sm">
          © {new Date().getFullYear()} Brad Kester
        </footer>

      </div>
    </main>
  );
}