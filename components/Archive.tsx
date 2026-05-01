import Link from "next/link";
import { CATEGORY_ORDER, type Project, type ProjectCategory } from "@/lib/projects";

const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  Cinema: "Cinema",
  Rollers: "Rollers & Speedramps",
  Reels: "Reels",
  Trucks: "Trucks",
  Events: "Events & Meets",
  Brand: "Brand & Commercial",
};

export function Archive({ projects }: { projects: Project[] }) {
  // Group by category preserving CATEGORY_ORDER
  const grouped = CATEGORY_ORDER.map((cat) => ({
    category: cat,
    items: projects
      .filter((p) => p.category === cat)
      .sort((a, b) => b.year - a.year),
  })).filter((g) => g.items.length > 0);

  let runningIndex = 0;

  return (
    <section id="archive" className="relative bg-[var(--color-ink-elevated)] border-y border-[var(--color-ink-line)]">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-40">
        {/* header */}
        <div className="mb-16 grid items-end gap-6 md:mb-24 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="cut-headline-roman text-[28px] text-[var(--color-stamp-red)]">§</span>
              <span className="eyebrow">The Index · 39 Cuts on File</span>
            </div>
            <h2 className="cut-headline text-[clamp(48px,8vw,128px)] text-[var(--color-paper)]">
              The <span className="cutout-outline not-italic">Archive</span>
            </h2>
          </div>
          <p className="md:col-span-4 md:col-start-9 max-w-[40ch] text-[16px] leading-[1.6] text-[var(--color-paper-mute)]">
            Every reel, every roller, every brand cut shot under the rift.clb name. Filed by category, dated, and waiting in the can.
          </p>
        </div>

        {/* category blocks */}
        <div className="space-y-16 md:space-y-24">
          {grouped.map(({ category, items }) => (
            <div key={category}>
              <div className="mb-6 flex items-end justify-between gap-6 border-b-2 border-[var(--color-paper)] pb-4">
                <h3 className="cut-headline-roman text-[32px] md:text-[40px] text-[var(--color-paper)]">
                  {CATEGORY_LABELS[category]}
                </h3>
                <span className="eyebrow">
                  {items.length} {items.length === 1 ? "Cut" : "Cuts"}
                </span>
              </div>
              <ul>
                {items.map((p) => {
                  runningIndex += 1;
                  const num = String(runningIndex).padStart(2, "0");
                  return (
                    <li key={p._id} className="border-b border-[var(--color-ink-line)]">
                      <Link
                        href={`/work/${p.slug}`}
                        className="group flex flex-wrap items-center justify-between gap-3 py-4 text-[var(--color-paper)] transition-colors hover:bg-[var(--color-ink-raised)]"
                      >
                        <span className="flex items-baseline gap-4 min-w-0">
                          <span className="font-[var(--font-mono)] text-[12px] uppercase tracking-[0.18em] text-[var(--color-paper-mute)] w-8 shrink-0">
                            {num}
                          </span>
                          <span className="text-[17px] md:text-[19px] tracking-tight truncate">
                            {p.title}
                          </span>
                          {p.videoUrl && (
                            <span className="hidden md:inline font-[var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-[var(--color-stamp-red)] shrink-0">
                              ▶ Reel
                            </span>
                          )}
                        </span>
                        <span className="flex items-center gap-4 shrink-0">
                          <span className="eyebrow">{p.category} · {p.year}</span>
                          <span aria-hidden className="text-[var(--color-paper-fade)] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[var(--color-paper)]">
                            ↗
                          </span>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
