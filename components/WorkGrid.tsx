import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const issueNum = String(index + 1).padStart(2, "0");
  const rotateClass =
    index % 4 === 0
      ? "md:-rotate-[0.6deg]"
      : index % 4 === 1
      ? "md:rotate-[0.4deg]"
      : index % 4 === 2
      ? "md:rotate-[0.7deg]"
      : "md:-rotate-[0.5deg]";

  return (
    <Link
      href={`/work/${project.slug}`}
      className={`group relative block ${rotateClass} transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:!rotate-0 hover:-translate-y-1`}
      aria-label={`Open project: ${project.title}`}
    >
      <div
        className="tape -top-3 left-[18%] hidden md:block"
        style={{ transform: "rotate(-4deg)" }}
        aria-hidden
      />
      <div className="tape -top-3 right-[18%] hidden md:block" style={{ transform: "rotate(3deg)" }} aria-hidden />

      <article className="bg-[var(--color-cream)] border border-[var(--color-ink)]/25 p-3 shadow-[0_20px_40px_-20px_rgba(13,12,10,0.25)] transition-shadow group-hover:shadow-[0_30px_60px_-20px_rgba(13,12,10,0.4)]">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={project.cover.url}
            alt={project.cover.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="halftone object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          />
          {project.featured && (
            <span className="absolute top-3 left-3 cutout-stamp text-[10px] font-[var(--font-mono)] uppercase tracking-[0.2em]">
              Featured
            </span>
          )}
          <span className="absolute top-3 right-3 cut-headline-roman text-[28px] text-[var(--color-paper)] [text-shadow:_0_2px_8px_rgba(0,0,0,0.6)]">
            {issueNum}
          </span>
        </div>

        <div className="mt-4 flex items-start justify-between gap-3 px-1">
          <div>
            <p className="eyebrow text-[var(--color-ink-mute)] mb-1">
              {project.category} · {project.year}
              {project.client ? ` · ${project.client}` : ""}
            </p>
            <h3 className="cut-headline-roman text-[28px] md:text-[32px] tracking-[-0.03em] leading-[0.95]">
              {project.title}
            </h3>
          </div>
          <span
            aria-hidden
            className="mt-1 text-[var(--color-ink)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          >
            ↗
          </span>
        </div>

        {project.tags?.length ? (
          <div className="mt-3 flex flex-wrap gap-2 px-1 pb-1">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-mute)] border border-[var(--color-ink)]/20 px-2 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </article>
    </Link>
  );
}

export function WorkGrid({ projects }: { projects: Project[] }) {
  return (
    <section id="work" className="relative">
      <div className="mx-auto max-w-[1440px] px-6 pt-24 pb-20 md:px-12 md:pt-40 md:pb-32">
        {/* section header · magazine spread style */}
        <div className="mb-12 grid items-end gap-6 md:mb-20 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="cut-headline-roman text-[28px] text-[var(--color-stamp-red)]">§</span>
              <span className="eyebrow text-[var(--color-ink-mute)]">Selected Work · 2025·2026</span>
            </div>
            <h2 className="cut-headline text-[clamp(48px,8vw,128px)]">
              The <span className="cutout-outline not-italic">Index</span>
            </h2>
          </div>
          <p className="md:col-span-4 md:col-start-9 max-w-[40ch] text-[16px] leading-[1.6] text-[var(--color-ink-soft)]">
            <span className="editorial text-[var(--color-ink)]">Six pieces.</span>{" "}
            Each one shot, cut, and color-graded by hand. Click a tile to see the cut.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-12">
          {projects.map((p, i) => (
            <ProjectCard key={p._id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
