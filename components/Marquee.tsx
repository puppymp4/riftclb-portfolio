const ITEMS = [
  "Cinematic Car Content",
  "Films",
  "Stills",
  "Brand Reels",
  "Culture First",
  "Established 2026",
  "rift.clb",
];

export function Marquee() {
  const repeated = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div
      className="border-y border-[var(--color-ink-line)] bg-[var(--color-paper)] text-[var(--color-ink)] overflow-hidden"
      role="presentation"
    >
      <div className="marquee-track flex whitespace-nowrap py-5">
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center gap-8 px-6">
            <span className="cut-headline-roman text-[34px] md:text-[48px] uppercase">
              {item}
            </span>
            <span aria-hidden className="text-[34px] md:text-[48px] text-[var(--color-stamp-red)]">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
