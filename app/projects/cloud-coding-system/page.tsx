import type { Metadata } from "next";
import Image from "next/image";
import roadmap from "@/public/images/innovation-accelerator/roadmap.png";
import progress from "@/public/images/innovation-accelerator/progress.png";
import iphone from "@/public/images/innovation-accelerator/iphone.png";

export const metadata: Metadata = {
  title: "Innovation Accelerator | Brad J Kester",
  description: "An independent project connecting ideas, digital assets and reviewed work.",
};

const capabilities = [
  "Individual accounts and separate project workspaces.",
  "File uploads, downloads and recovery from interrupted transfers.",
  "Work assignments, returned versions, feedback, revisions and acceptance.",
  "Controlled static website creation with explicit approval and review.",
];

const desktopViews = [
  {
    image: progress,
    alt: "Project progress showing completed, current and upcoming steps from starting an idea through review, testing, launch and improvement.",
    caption: "Project progress: completed, current and upcoming steps make responsibilities and the next action visible.",
  },
  {
    image: roadmap,
    alt: "A six-step project roadmap with goals, files, work, returned versions, accepted reviews and open feedback.",
    caption: "Project roadmap: a six-step workflow connects goals, files, work, versions, review and feedback, keeping progress and the next action visible.",
  },
];

export default function InnovationAcceleratorPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm text-emerald-400 mb-3">Independent project / Private pilot</p>
        <h1 className="text-3xl md:text-5xl font-bold mb-6 break-words">Innovation Accelerator</h1>
        <p className="text-xl text-gray-200 mb-8 max-w-3xl">An independent project connecting ideas, digital assets and reviewed work.</p>
        <div className="max-w-3xl space-y-5 text-gray-300 leading-relaxed mb-12">
          <p>I’m designing and developing Innovation Accelerator to help people organize files, coordinate project work, review results and keep decisions visible. It brings these activities into a guided workflow that people can use across computers and mobile devices.</p>
          <p>Using AI-assisted development, I’ve led the product design, defined permissions and approval steps, documented user journeys and tested the experience on Windows and iPhone.</p>
        </div>

        <section className="border-t border-gray-800 py-10" aria-labelledby="pilot-heading">
          <h2 id="pilot-heading" className="text-2xl font-semibold mb-6">What the private pilot supports</h2>
          <ul className="list-disc pl-5 space-y-3 text-gray-300 max-w-3xl leading-relaxed">
            {capabilities.map((capability) => <li key={capability}>{capability}</li>)}
          </ul>
        </section>

        <section className="border-t border-gray-800 py-10" aria-labelledby="screenshots-heading">
          <h2 id="screenshots-heading" className="text-2xl font-semibold mb-8">Inside the pilot</h2>
          <div className="space-y-10">
            {desktopViews.map((view) => (
              <figure key={view.alt}>
                <Image src={view.image} alt={view.alt} sizes="(max-width: 1072px) calc(100vw - 48px), 1024px" className="w-full h-auto rounded-lg" />
                <figcaption className="mt-3 text-sm text-gray-400 leading-relaxed">{view.caption}</figcaption>
              </figure>
            ))}
            <figure className="max-w-sm mx-auto">
              <Image src={iphone} alt="Innovation Accelerator on iPhone showing project starting choices and an option to bring existing files." sizes="(max-width: 432px) calc(100vw - 48px), 384px" className="w-full h-auto rounded-lg" />
              <figcaption className="mt-3 text-sm text-gray-400 leading-relaxed">Starting a project on iPhone: a guided entry point helps users choose what they want to make or bring existing files into a project. Website creation in the pilot is limited to controlled static sites.</figcaption>
            </figure>
          </div>
        </section>

        <section className="border-t border-gray-800 pt-10" aria-labelledby="lessons-heading">
          <h2 id="lessons-heading" className="text-2xl font-semibold mb-6">What this project demonstrates</h2>
          <div className="max-w-3xl space-y-5 text-gray-300 leading-relaxed">
            <p>The technical work is part of a broader challenge: making complex processes understandable and dependable. I’ve used hands-on testing to identify confusing navigation, improve recovery after sign-out and make the next action easier to find.</p>
            <p>Those lessons connect directly to newsroom leadership: establish clear responsibilities, listen to users, document decisions, protect access and evaluate technology by whether it helps people produce better work.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
