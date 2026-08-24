import { ProjectCaseStudy } from "@/app/components/ProjectCaseStudy";

const earlyShapeItems = [
  {
    title: "Project Registry",
    text: "A source of truth for products, repositories, branches, tasks, owners, decisions and status.",
  },
  {
    title: "Branch Graph",
    text: "A layer above Git that shows strategic lineage: prototype to product, feature to release, experiment to archive.",
  },
  {
    title: "Context Spine",
    text: "Versioned context bundles that help human developers and AI coding tools work from the same brief, rules and product history.",
  },
  {
    title: "Event Ledger",
    text: "A timeline of meaningful actions: branch created, workspace launched, context exported, agent attached, tests run and review requested.",
  },
];

const productBenefits = [
  {
    title: "For websites",
    text: "Track the brief, pages, content decisions, SEO notes, design direction, deployment status and follow-up work in one place.",
  },
  {
    title: "For apps",
    text: "Keep features, user flows, data models, bugs, previews and release readiness connected as the product evolves.",
  },
  {
    title: "For platforms",
    text: "Preserve architectural decisions, branch lineage, integration work, review gates and long-running product context across many contributors.",
  },
  {
    title: "For AI-assisted builds",
    text: "Give each coding tool the same mission context, then capture what it changed, what it tested and what still needs human judgment.",
  },
];

export default function CloudCodingSystemPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs text-gray-500 mb-3 uppercase tracking-wide">
          System in progress
        </p>

        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Cloud Coding CNS
        </h1>

        <p className="text-gray-300 mb-10 text-lg">
          The beginning of a tool-agnostic cloud coding system for building websites, apps and platforms. Products start here, branches form here, context accumulates here, and human or AI coding tools can work from the same source of truth.
        </p>

        <ProjectCaseStudy
          sections={[
            {
              title: "Problem",
              children:
                "Digital products are increasingly built across multiple tools, chats, branches and AI coding sessions. The work moves fast, but product context, decisions and review state can scatter quickly.",
            },
            {
              title: "What I am building",
              children:
                "A control plane above Git that tracks products, repositories, mission branches, tasks, context bundles, adapter sessions, review state and an event ledger.",
            },
            {
              title: "Why it matters",
              children:
                "Git records code history. This system is meant to preserve product history: what is being built, why a branch exists, what context guided the work, who or what worked on it, and whether it is ready to ship.",
            },
            {
              title: "Tools used",
              children:
                "Product systems design, Git workflows, cloud workspaces, adapter APIs, event modeling, context exports and AI-assisted development.",
            },
          ]}
        />

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6 text-gray-200">
            Uses And Benefits
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {productBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="border border-gray-800 rounded-2xl p-5 bg-gray-900/40"
              >
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6 text-gray-200">
            Early Shape
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {earlyShapeItems.map((item) => (
              <div
                key={item.title}
                className="border border-gray-800 rounded-2xl p-5 bg-gray-900/40"
              >
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 border-t border-gray-800 pt-8">
          <h2 className="text-xl font-semibold mb-6 text-gray-200">
            MVP Loop
          </h2>

          <ol className="space-y-3 text-gray-400 text-sm leading-relaxed">
            <li>1. Create a product and connect one repository.</li>
            <li>2. Create a mission branch with a clear reason and owner.</li>
            <li>3. Generate a structured context bundle for the work.</li>
            <li>4. Let a human or AI coding tool report progress through an adapter API.</li>
            <li>5. Show branch lineage, status, review state and event history.</li>
          </ol>
        </section>

        <section className="border-t border-gray-800 pt-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-200">
            Current Status
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed">
            The foundation work has defined the product thesis, branch graph model, event ledger, context bundle model and a phased MVP plan. The current update is about making the concept easier to understand as a product-building system: one place to start work, preserve context, coordinate AI coding sessions, review progress and decide what is ready to become real.
          </p>
        </section>
      </div>
    </main>
  );
}
