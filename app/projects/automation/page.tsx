import Link from "next/link";
import { ProjectCaseStudy } from "@/app/components/ProjectCaseStudy";

export default function ProjectPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/#projects" className="inline-block mb-8 py-2 text-gray-300 underline underline-offset-4 hover:text-white">
          Back to projects
        </Link>
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Page Automation
        </h1>
        <p className="text-gray-300 mb-10 text-lg">
          Layout and production workflows designed to reduce repetitive page-building tasks and improve consistency across publications.
        </p>

        <ProjectCaseStudy
          sections={[
            {
              title: "Problem",
              children:
                "High-volume publishing requires repeated layout and production tasks that take time away from editorial decisions.",
            },
            {
              title: "What I built",
              children:
                "Page automation workflows focused on repeatable layout and production steps in a newsroom environment.",
            },
            {
              title: "Why it matters",
              children:
                "Automating routine production steps gives editors more room to focus on story presentation, accuracy and the finished page.",
            },
            {
              title: "Tools used",
              children:
                "Layout automation, newsroom systems and production-process design.",
            },
          ]}
        />

        <section aria-labelledby="demo-heading" className="mb-12">
          <h2 id="demo-heading" className="text-xl font-semibold mb-4">Page automation demo</h2>
          <p className="text-gray-400 mb-6">
            A look at automation in the page production process, with editorial review remaining part of the workflow.
          </p>
          <video controls preload="metadata" aria-label="Page automation demonstration" className="w-full rounded-lg">
            <source src="/videos/layout-automation.mp4" type="video/mp4" />
            <a href="/videos/layout-automation.mp4">Download the page automation demo</a>
          </video>
        </section>

        <section aria-labelledby="purpose-heading" className="mb-12">
          <h2 id="purpose-heading" className="text-xl font-semibold mb-4">Why I built it</h2>
          <p className="text-gray-400 leading-relaxed">
            Working in high-volume publishing environments, I saw opportunities to simplify recurring page production tasks. This work explores how automation can support consistent layouts while keeping the final presentation in editors' hands.
          </p>
        </section>
      </div>
    </main>
  );
}
