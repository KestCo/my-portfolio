export default function HowBuiltPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          How I Built This Site
        </h1>

        {/* Intro */}
        <p className="text-gray-400 mb-10 text-lg leading-relaxed">
          This guide walks through how I built and deployed this portfolio using Next.js, GitHub, and Vercel. It’s a simple, repeatable process that goes from a blank folder to a live website quickly.
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
{`git push -u origin main

# if needed
git rebase --abort
git push -u origin main --force`}
            </pre>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">8. Deploy</h2>
            <p className="text-gray-400">Import the repo into Vercel and click deploy.</p>
          </div>

        </div>

        {/* Closing */}
        <div className="mt-16 text-gray-500">
          This process can be reused for any future project, not just a portfolio.
        </div>

      </div>
    </main>
  );
}
