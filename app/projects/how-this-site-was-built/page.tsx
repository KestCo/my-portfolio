import Link from "next/link";
import { ProjectCaseStudy } from "@/app/components/ProjectCaseStudy";

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
          This guide follows the portfolio from its first build with Next.js, GitHub and Vercel to the editorial and design decisions behind its latest updates. The work includes both getting a site online and improving how it presents my experience.
        </p>

        <ProjectCaseStudy
          sections={[
            {
              title: "Problem",
              children:
                "A portfolio should show the work while also making the build process understandable and repeatable.",
            },
            {
              title: "What I built",
              children:
                "A Next.js portfolio with project pages, interactive tools, media demos and a documented path from local project to deployment.",
            },
            {
              title: "Why it matters",
              children:
                "Documenting the build turns the site itself into evidence of process, not just a container for finished projects.",
            },
            {
              title: "Tools used",
              children:
                "Next.js, React, Tailwind CSS, GitHub, Vercel and iterative AI-assisted development.",
            },
          ]}
        />

        <h2 className="text-2xl font-semibold mb-8">The first build</h2>

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

        <section aria-labelledby="evolution-heading" className="border-t border-gray-800 mt-16 pt-12">
          <h2 id="evolution-heading" className="text-2xl font-semibold mb-6">
            The next chapter: A more focused portfolio
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-10">
            Once the site was live, the next challenge was editorial: deciding what to feature, how to explain my role and where to remove repetition. I used AI-assisted development to make those changes, reviewing the copy and local previews before approving each release.
          </p>

          <div className="space-y-8 text-gray-400 leading-relaxed">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Make the introduction clearer</h3>
              <p>
                I updated the homepage headline to bring journalism, newsroom leadership and digital building together. Direct contact and résumé links made the next step easier for visitors, and I removed my phone number from the public résumé PDF.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Show the work, with accurate credit</h3>
              <p>
                I added a <Link href="/projects/editorial-design" className="text-gray-200 underline underline-offset-4 hover:text-white">journalism and editorial design collection</Link> with six examples, page previews and original PDFs. The collection identifies my contribution as design, layout and headline writing, not reporting or copy editing. Multi-page examples include both the front page and inside spread.
              </p>
              <p className="mt-3">
                After reviewing the first version, I moved the full collection off the homepage and gave it a dedicated page. One homepage card now introduces the work without making visitors scroll through every design before reaching the digital projects.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Show how the products are managed</h3>
              <p>
                The <Link href="/projects/apps" className="text-gray-200 underline underline-offset-4 hover:text-white">Game Suite</Link> gained game logos, editor screenshots and a Command Center view to show the production tools behind the games. The <Link href="/projects/cloud-coding-system" className="text-gray-200 underline underline-offset-4 hover:text-white">Innovation Accelerator</Link> page evolved with the project, adding its new name, workflow screenshots and a link to its public introduction.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Remove duplication</h3>
              <p>
                I removed the Apps &amp; Tools card because it led to the same collection as The Game Suite. I also narrowed Automation Systems to <Link href="/projects/automation" className="text-gray-200 underline underline-offset-4 hover:text-white">page automation</Link>, leaving headline development and audio experiments in their own project sections. Each entry now has a more distinct purpose.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Review locally, then verify the release</h3>
              <p>
                Changes were built and reviewed locally before publication. The release process included production builds, checks of links and media, commits to GitHub and deployment through Vercel. After publication, the live pages and files were checked, including confirmation that the design PDFs matched the originals.
              </p>
            </div>
          </div>

          <p className="mt-10 text-gray-300 leading-relaxed">
            The lesson was not simply to add more content. It was to choose stronger evidence, describe responsibilities accurately and make the site easier to navigate. AI helped with implementation, while I directed the priorities, reviewed the results and decided what to publish.
          </p>
        </section>

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
