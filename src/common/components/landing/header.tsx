import Link from "next/link";

const LANDING_LINKS = [
  { label: "Product", href: "#product" },
  { label: "Research", href: "#research" },
  { label: "Company", href: "#company" }
] as const;

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-higgs-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold tracking-tighter text-white">
            DRESSCODE
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {LANDING_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-higgs-text-muted transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <a
          href="/app"
          className="inline-flex items-center justify-center rounded-xl border border-[#8A6CD9]/60 bg-[#8A6CD9] px-4 py-2 text-sm font-bold text-white shadow-[0_0_16px_rgba(138,108,217,0.3)] transition-all hover:scale-105 hover:bg-[#9C81E1] hover:shadow-[0_0_24px_rgba(138,108,217,0.42)]"
        >
          Open app
        </a>
      </div>
    </header>
  );
}
