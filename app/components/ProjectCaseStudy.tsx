import type { ReactNode } from "react";

type ProjectCaseStudySection = {
  title: string;
  children: ReactNode;
};

type ProjectCaseStudyProps = {
  sections: ProjectCaseStudySection[];
};

export function ProjectCaseStudy({ sections }: ProjectCaseStudyProps) {
  return (
    <section className="mt-12 mb-12 border-t border-gray-800 pt-8">
      <h2 className="text-xl font-semibold mb-6 text-gray-200">
        Project Notes
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="text-xs uppercase tracking-wide text-gray-500 mb-2">
              {section.title}
            </h3>
            <div className="text-sm leading-relaxed text-gray-400">
              {section.children}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
