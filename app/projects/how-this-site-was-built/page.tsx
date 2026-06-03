export default function HowBuiltPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          How This Site Was Built
        </h1>

        {/* Intro */}
        <p className="text-gray-300 mb-10 text-lg">
          This guide walks through how I built and deployed this portfolio using Next.js, GitHub and Vercel. It’s a simple, repeatable process that goes from a blank folder to a live website quickly.
        </p>

        {/* Steps */}
        <div className="space-y-10 text-gray-300">

          <div>
            <h2 className="text-xl font-semibold mb-2">1. Create the project</h2>
            <pre className="bg-gray-900 p-4 rounded-xl text-sm overflow-x-auto">
{`npx create-next-app@latest .`}
            </pre>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">2. Run locally</h2>
            <pre className="bg-gray-900 p-4 rounded-xl text-sm">
{`npm run dev`}
            </pre>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3. Build pages</h2>
            <p className="text-gray-400">Edit app/page.tsx and create routes like:</p>
            <pre className="bg-gray-900 p-4 rounded-xl text-sm">
{`app/projects/automation/page.tsx
app/projects/apps/page.tsx`}
            </pre>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">4. Add media</h2>
            <pre className="bg-gray-900 p-4 rounded-xl text-sm">
{`public/videos/`}
            </pre>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">5. Initialize Git</h2>
            <pre className="bg-gray-900 p-4 rounded-xl text-sm">
{`git init
git add .
git commit -m "initial portfolio"`}
            </pre>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6. Connect to GitHub</h2>
            <pre className="bg-gray-900 p-4 rounded-xl text-sm">
{`git remote add origin https://github.com/YOUR-USERNAME/my-portfolio.git
git branch -M main`}
            </pre>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">7. Push</h2>
            <pre className="bg-gray-900 p-4 rounded-xl text-sm">
{`git push -u origin main`}
            </pre>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">8. Deploy</h2>
            <p className="text-gray-400">Import the repo into Vercel and click deploy.</p>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-16"></div>

        {/* NEW GUIDE SECTION */}
        <div>

          <h2 className="text-2xl font-semibold mb-6">
            How to Use These Tools
          </h2>

          <p className="text-gray-400 mb-6">
            This site isn’t just a portfolio — it’s a set of systems designed to explore how content is created, evaluated and delivered.
          </p>

          <h3 className="text-xl font-semibold mb-2">
            Headline Architect
          </h3>
          <p className="text-gray-400 mb-6">
            This tool simulates how an editor evaluates headlines before publishing. You can start with your own headline, apply constraints, generate alternatives and compare them based on clarity, structure and editorial intent.
          </p>

          <h3 className="text-xl font-semibold mb-2">
            Front Page Focus
          </h3>
          <p className="text-gray-400 mb-6">
            This tool transforms written reporting into a conversational audio format. It breaks a story into a natural discussion and presents it as a podcast-style experience.
          </p>

          <h3 className="text-xl font-semibold mb-2">
            How the tools connect
          </h3>
          <p className="text-gray-400 mb-6">
            Use Headline Architect to refine how a story is framed, then use Front Page Focus to explore how that story sounds in conversation. Together, they represent different ways of shaping and delivering the same information.
          </p>

          <h3 className="text-xl font-semibold mb-2">
            Why this exists
          </h3>
          <p className="text-gray-400">
            Across journalism, automation and AI, the same patterns kept appearing — repetition, constraint-based decision making and the need to translate information across formats. These tools are experiments in making those processes more visible and more intentional.
          </p>

        </div>

        {/* Footer */}
        <div className="mt-16 text-gray-500 text-sm">
          This process can be reused for any future project, not just a portfolio.
        </div>

      </div>
    </main>
  );
}