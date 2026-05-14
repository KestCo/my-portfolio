import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">

        {/* Hero Section */}
        <section className="mb-24">
          <p className="text-gray-500 mb-4 text-sm tracking-widest uppercase">
            Brad Kester — Production Editor & Developer
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

          <div className="grid md:grid-cols-2 gap-8">

            {/* Automation */}
            <Link
              href="/projects/automation"
              className="group border border-gray-800 rounded-2xl p-8 hover:border-gray-500 transition"
            >
              <h3 className="text-xl font-semibold mb-3 group-hover:underline">
                Automation Systems
              </h3>
              <p className="text-gray-400 mb-6">
                AI-powered tools and workflows for headline writing, page automation and content production efficiency.
              </p>
              <span className="text-sm text-gray-500 group-hover:text-white transition">
                View demos →
              </span>
            </Link>

            {/* Apps */}
            <Link
              href="/projects/apps"
              className="group border border-gray-800 rounded-2xl p-8 hover:border-gray-500 transition"
            >
              <h3 className="text-xl font-semibold mb-3 group-hover:underline">
                Apps & Interactive Tools
              </h3>
              <p className="text-gray-400 mb-6">
                Interactive applications exploring logic, feedback systems and user-driven experiences.
              </p>
              <span className="text-sm text-gray-500 group-hover:text-white transition">
                View demos →
              </span>
            </Link>

          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-24">
          <h2 className="text-2xl font-semibold mb-6">About</h2>

          <p className="text-gray-400 max-w-2xl leading-relaxed">
            I started in small-town journalism, working as a news reporter in Junction City, Kansas, then moved into sports reporting in Columbus, Nebraska. From there, I stepped into larger roles — becoming a sports editor and eventually a managing editor in Ridgecrest, California.
            <br /><br />
            My path shifted into production and design in Carson City, Nevada, then expanded further in Austin, Texas, where I led design teams responsible for multiple publications. I continued taking on broader operational roles in Killeen and Houston, working across copy editing, production systems and team management.
            <br /><br />
            Along the way, I started noticing the same themes showing up everywhere — in the Wall Street Journal, The New York Times, CNBC and across our own Texas publications: automation, AI and the future of work. That curiosity turned into focus. About five years ago, I began working directly with automation systems through Stibo, helping develop template and layout systems as part of Hearst’s early push into production automation.
            <br /><br />
            From there, I wanted to understand AI more deeply, so I started building. I trained tools using a Hearst stylebook, grammar references and dictionaries to see how far I could push them in real editorial workflows. That experimentation turned into practical systems — GPT tools, APIs, automation workflows and the projects showcased on this site.
            <br /><br />
            I’m entirely self-taught, and I tend to work across disciplines rather than within one lane — connecting ideas between journalism, technology and operations. That cross-pollination is what drives most of what I build: tools that are grounded in real workflows but shaped by experimentation and curiosity.
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
