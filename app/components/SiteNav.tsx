import Link from "next/link";

const navItems = [
  { href: "/projects/cloud-coding-system", label: "Innovation Accelerator" },
  { href: "/projects/headline-tool", label: "Headline Architect" },
  { href: "/projects/apps", label: "Game Suite" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-900 bg-black/85 backdrop-blur">
      <nav aria-label="Main navigation" className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 py-4 text-sm text-gray-400 md:flex-row md:items-center">
        <Link href="/" className="font-semibold text-white hover:text-gray-300 transition">
          Brad J Kester
        </Link>

        <div className="flex flex-wrap gap-x-4 gap-y-2 md:justify-end">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-white transition"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
