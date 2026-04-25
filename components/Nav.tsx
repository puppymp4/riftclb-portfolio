import Link from "next/link";

export function Nav() {
  return (
    <nav
      aria-label="Primary"
      className="sticky top-0 z-30 border-b border-[var(--color-ink-line)] bg-[var(--color-ink)]/85 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 md:px-12">
        <Link
          href="/"
          aria-label="rift.clb home"
          className="cut-headline-roman text-[22px] tracking-[-0.06em] text-[var(--color-paper)]"
        >
          rift<span className="text-[var(--color-stamp-red)]">.</span>clb
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link href="#work" className="eyebrow hover:text-[var(--color-paper)] transition-colors">
            Work
          </Link>
          <Link href="#archive" className="eyebrow hover:text-[var(--color-paper)] transition-colors">
            Archive
          </Link>
          <Link href="#about" className="eyebrow hover:text-[var(--color-paper)] transition-colors">
            About
          </Link>
          <Link href="#contact" className="eyebrow hover:text-[var(--color-paper)] transition-colors">
            Contact
          </Link>
        </div>

        <a
          href="https://instagram.com/rift.clb"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost text-[10px] px-3 py-2"
          aria-label="Open Instagram"
        >
          @rift.clb
        </a>
      </div>
    </nav>
  );
}
