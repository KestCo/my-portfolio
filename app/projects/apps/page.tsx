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
          A collection of small applications built to explore interaction, logic and real-world problem solving. These projects focus on how users engage with systems and how feedback shapes behavior.
        </p>

        <div className="space-y-16">

          {/* App 1 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Word Architect
            </h2>

            <p className="text-gray-400 mb-4 text-sm">
              An interactive word-based game focused on structure, creativity and user-driven input to shape outcomes.
            </p>

            <video controls className="w-full rounded-2xl mb-4">
              <source src="/videos/app-one.mp4" type="video/mp4" />
            </video>

            <p className="text-gray-500 text-sm">
              Built to explore how users interact with language, structure and creative constraints.
            </p>
          </div>

          {/* App 2 */}
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

        {/* Impact Section */}
        <div className="mt-20">
          <h2 className="text-xl font-semibold mb-6">What this shows</h2>

          <div className="space-y-4 text-gray-400">
            <p>
              • Ability to build interactive systems and applications from the ground up
            </p>
            <p>
              • Understanding of user interaction, feedback loops and system behavior
            </p>
            <p>
              • Experience moving from concept to working application
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}