import Link from "next/link";
import Image from "next/image";
import auditPreview from "../../../public/images/editorial-design/audit-fallout-2.jpg";
import auditFront from "../../../public/images/editorial-design/audit-fallout.jpg";
import glennPreview from "../../../public/images/editorial-design/john-glenn-front.jpg";
import glennTimeline from "../../../public/images/editorial-design/john-glenn-timeline.jpg";
import airportPreview from "../../../public/images/editorial-design/airport.jpg";
import ukrainePreview from "../../../public/images/editorial-design/ukraine.jpg";
import waitingPreview from "../../../public/images/editorial-design/waiting-and-hoping.jpg";
import rallyPreview from "../../../public/images/editorial-design/rally-with-a-message.jpg";

const editorialWork = [
  {
    title: "Waiting & hoping",
    description: "A Columbus Dispatch Sunday front page pairing a restrained headline with prominent photography to frame follow-up coverage of the Pike County killings.",
    pages: [{ image: waitingPreview, alt: "Columbus Dispatch front page headed Waiting and hoping, with a large cemetery photograph", file: "waiting-and-hoping.pdf", label: "View full page (PDF)" }],
  },
  {
    title: "Rally with a message",
    description: "A MetroWest Daily News front page bringing Washington and Boston Women's March coverage together through a strong lead headline, crowd photography and distinct story groupings.",
    pages: [{ image: rallyPreview, alt: "MetroWest Daily News front page headed Rally with a message, with photographs of marches in Washington and Boston", file: "rally-with-a-message.pdf", label: "View full page (PDF)" }],
  },
  {
    title: "Audit Fallout",
    description: "A front page and two-page spread organizing coverage of Killeen's financial audit, with related stories and key findings brought together in one package.",
    pages: [
      { image: auditFront, alt: "Killeen Daily Herald front page headed Audit Fallout", file: "audit-fallout.pdf#page=1", label: "View front page (PDF)" },
      { image: auditPreview, alt: "Two-page Killeen Daily Herald financial audit spread", file: "audit-fallout.pdf#page=2", label: "View inside spread (PDF)" },
    ],
  },
  {
    title: "John Glenn",
    description: "A commemorative front page and timeline spread pairing a bold visual tribute with a chronological look at Glenn's life.",
    pages: [
      { image: glennPreview, alt: "John Glenn commemorative front page", file: "john-glenn-front.pdf", label: "View front page (PDF)" },
      { image: glennTimeline, alt: "John Glenn life timeline spread", file: "john-glenn-timeline.pdf", label: "View timeline (PDF)" },
    ],
  },
  {
    title: "Airport",
    description: "A local news front page using a custom InDesign graphic to give airport coverage a clear visual entry point.",
    pages: [{ image: airportPreview, alt: "Airport coverage with a custom graphic on a newspaper front page", file: "airport.pdf", label: "View full page (PDF)" }],
  },
  {
    title: "Ukraine",
    description: "A news page bringing together war coverage, photography and supporting stories, with a clear hierarchy for a dense package of international news.",
    pages: [{ image: ukrainePreview, alt: "War in Ukraine newspaper page with a lead photograph and supporting stories", file: "ukraine.pdf", label: "View full page (PDF, 26.5 MB)" }],
  },
];

export const metadata = {
  title: "Journalism & Editorial Design | Brad J Kester",
  description: "Newspaper design, layout and headline writing by Brad J Kester.",
};

export default function EditorialDesign() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        <Link href="/#journalism" className="inline-block mb-10 py-2 text-gray-300 underline underline-offset-4 hover:text-white">Back to home</Link>
        <section id="journalism" aria-labelledby="journalism-heading" className="mb-28 scroll-mt-24">
          <h1 id="journalism-heading" className="text-2xl font-semibold mb-6 text-gray-300">
            Journalism &amp; Editorial Design
          </h1>
          <p className="max-w-3xl text-gray-300 leading-relaxed mb-3">
            Selected newspaper pages showing my work in design, layout and headline writing.
          </p>
          <p className="max-w-3xl text-gray-400 leading-relaxed mb-10">
            My role in these examples did not include reporting or copy editing. Original bylines and photo credits appear on the pages.
          </p>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-14">
            {editorialWork.map((work) => (
              <article key={work.title} className="min-w-0">
                <div className={`grid gap-3 bg-gray-100 p-3 h-[360px] sm:h-[440px] ${work.pages.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
                  {work.pages.map((page) => (
                    <a key={page.file} href={`/documents/editorial-design/${page.file}`} aria-label={`${work.title}: ${page.label}`} className="relative min-w-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                      <Image src={page.image} alt={page.alt} fill sizes={work.pages.length > 1 ? "(max-width: 767px) 44vw, 260px" : "(max-width: 767px) 90vw, 540px"} className="object-contain" />
                    </a>
                  ))}
                </div>
                <h2 className="text-xl font-semibold mt-6 mb-3">{work.title}</h2>
                <p className="text-gray-400 leading-relaxed mb-4">{work.description}</p>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {work.pages.map((page) => (
                    <a key={page.file} href={`/documents/editorial-design/${page.file}`} className="py-2 text-sm text-gray-200 underline underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">{page.label}</a>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <a href="https://muckrack.com/brad-kester/portfolio" className="inline-block mt-10 py-2 text-gray-300 underline underline-offset-4 hover:text-white">More work on Muck Rack</a>
        </section>

      </div>
    </main>
  );
}

