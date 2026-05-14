export default function ProjectPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Automation Systems
        </h1>

        {/* Summary */}
        <p className="text-gray-300 mb-10 text-lg">
          A collection of tools and workflows designed to improve efficiency in content production. These projects explore how automation and AI can reduce manual work, improve consistency, and scale output across teams.
        </p>

        {/* Demo Section */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Demos</h2>

          <div className="space-y-10">

            {/* Demo 1 */}
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Headline Writing GPT
              </h3>
              <p className="text-gray-400 mb-3 text-sm">
                Generates headlines using GPT workflows tailored to editorial style, tone, and newsroom standards.
              </p>
              <video controls className="w-full rounded-2xl">
                <source src="/videos/headline-tool.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Demo 2 */}
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Page Automation
              </h3>
              <p className="text-gray-400 mb-3 text-sm">
                Automates layout and production workflows, reducing manual effort and improving consistency across publications.
              </p>
              <video controls className="w-full rounded-2xl">
                <source src="/videos/layout-automation.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Demo 3 */}
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Front Page Focus — AI-Generated News Podcast
              </h3>
              <p className="text-gray-400 mb-3 text-sm">
                A text-to-audio experiment that turns front page content into a conversational podcast experience.
              </p>
              <audio controls className="w-full">
                <source src="/videos/front-page-focus.wav" type="audio/wav" />
                Your browser does not support the audio element.
              </audio>
            </div>

          </div>
        </div>

        {/* Details */}
        <div className="mb-12 space-y-6">

          <div>
            <h3 className="text-lg font-semibold mb-2">What it does</h3>
            <p className="text-gray-400">
              These systems automate repetitive editorial tasks, improve consistency, and allow teams to focus on higher-value work.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Why I built it</h3>
            <p className="text-gray-400">
              Working in high-volume publishing environments, I identified opportunities to reduce manual work and improve efficiency through automation and AI-assisted tools.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Tools used</h3>
            <p className="text-gray-400">
              OpenAI API, GPT tools, workflow design, newsroom systems, experimentation
            </p>
          </div>

        </div>

        {/* Impact Section */}
        <div className="mb-16">
          <h2 className="text-xl font-semibold mb-6">Impact</h2>

          <div className="space-y-4 text-gray-400">
            <p>
              • Reduced manual editing and headline writing time through GPT-assisted workflows
            </p>
            <p>
              • Improved consistency in tone, structure, and SEO optimization across content
            </p>
            <p>
              • Helped scale production workflows across multiple publications and teams
            </p>
            <p>
              • Enabled experimentation with AI-driven formats, including automated podcast generation
            </p>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-12">
          <p className="text-gray-500 text-sm">
            More tools and systems coming soon.
          </p>
        </div>

      </div>
    </main>
  );
}