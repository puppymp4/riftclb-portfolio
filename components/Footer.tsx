export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-paper)]">
      <div className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="cut-headline-roman text-[44px] md:text-[64px] tracking-[-0.04em]">
              rift<span className="text-[var(--color-stamp-red)]">.</span>clb
            </div>
            <p className="mt-3 text-[14px] text-[var(--color-paper)]/70 max-w-[40ch]">
              Cinematic car content out of the garage and into the frame.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <div className="eyebrow text-[var(--color-paper)]/60 mb-4">Index</div>
            <ul className="space-y-2 text-[14px]">
              <li><a href="#work" className="hover:text-[var(--color-stamp-red)]">Work</a></li>
              <li><a href="#about" className="hover:text-[var(--color-stamp-red)]">About</a></li>
              <li><a href="#contact" className="hover:text-[var(--color-stamp-red)]">Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 md:col-start-10">
            <div className="eyebrow text-[var(--color-paper)]/60 mb-4">Elsewhere</div>
            <ul className="space-y-2 text-[14px]">
              <li>
                <a href="https://instagram.com/rift.clb" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-stamp-red)]">
                  Instagram ↗
                </a>
              </li>
              <li>
                <a href="mailto:rift.clb.media@gmail.com" className="hover:text-[var(--color-stamp-red)]">
                  Email ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--color-paper)]/15 pt-6">
          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-paper)]/50">
            © {year} rift.clb · All work shown is original
          </p>
          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-paper)]/50">
            Issue 001 · Printed on the web
          </p>
        </div>
      </div>
    </footer>
  );
}
