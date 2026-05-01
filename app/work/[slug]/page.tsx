import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { getProject, getProjects } from "@/lib/projects";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) return { title: "Not found" };
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.cover.url],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();

  const all = await getProjects();
  const related = all
    .filter((p) => p.slug !== project.slug && p.featured)
    .slice(0, 3);

  return (
    <>
      {/* Kick off the video fetch in parallel with the HTML so the player has bytes ready on mount */}
      {project.videoUrl && (
        <link rel="preload" as="video" href={project.videoUrl} type="video/mp4" />
      )}
      <Nav />
      <main id="main" className="bg-[var(--color-ink)]">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-[1440px] px-6 pt-12 pb-12 md:px-12 md:pt-20 md:pb-16">
            <Link
              href="/#work"
              className="eyebrow inline-flex items-center gap-2 mb-12 hover:text-[var(--color-paper)] transition-colors"
            >
              ← Back to the index
            </Link>

            <div className="mb-8 flex flex-wrap items-end gap-3 md:mb-10">
              <span className="eyebrow">{project.category}</span>
              <span className="h-px w-8 bg-[var(--color-paper)]/30" />
              <span className="eyebrow">{project.year}</span>
              {project.client && (
                <>
                  <span className="h-px w-8 bg-[var(--color-paper)]/30" />
                  <span className="eyebrow">Client / {project.client}</span>
                </>
              )}
            </div>

            <h1 className="cut-headline text-[clamp(56px,11vw,176px)] mb-12 text-[var(--color-paper)]">
              {project.title}
            </h1>

            <div className="grid gap-8 md:grid-cols-12 md:gap-12">
              <p className="md:col-span-7 text-[18px] leading-[1.65] md:text-[20px] md:leading-[1.7] text-[var(--color-paper)]">
                {project.description}
              </p>
              {project.tags?.length ? (
                <div className="md:col-span-4 md:col-start-9">
                  <div className="eyebrow mb-3">Tags</div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] border border-[var(--color-paper-fade)] text-[var(--color-paper)] px-3 py-1.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </section>

        {/* HERO MEDIA · video player or cover image */}
        <section className="relative">
          <div className="mx-auto max-w-[1440px] px-6 md:px-12">
            {project.videoUrl ? (
              <div className="mx-auto flex justify-center">
                <div
                  className={`relative w-full overflow-hidden border border-[var(--color-ink-line)] bg-[var(--color-ink-elevated)] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] ${
                    project.orientation === "vertical" ? "max-w-[460px]" : "max-w-[1280px]"
                  }`}
                  style={{
                    aspectRatio: project.orientation === "vertical" ? "9 / 16" : "16 / 9",
                  }}
                >
                  <video
                    autoPlay
                    muted
                    loop
                    controls
                    playsInline
                    preload="auto"
                    poster={project.cover.url}
                    className="absolute inset-0 h-full w-full object-cover"
                  >
                    <source src={project.videoUrl} type="video/mp4" />
                  </video>
                </div>
              </div>
            ) : (
              <div className="relative aspect-video w-full overflow-hidden border border-[var(--color-ink-line)] bg-[var(--color-ink-elevated)] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]">
                <Image
                  src={project.cover.url}
                  alt={project.cover.alt}
                  fill
                  priority
                  sizes="(min-width: 768px) 90vw, 100vw"
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </section>

        {/* DETAILS / NOTES */}
        <section className="relative">
          <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32">
            <div className="grid gap-10 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-5">
                <div className="flex items-center gap-3 mb-4">
                  <span className="cut-headline-roman text-[24px] text-[var(--color-stamp-red)]">§</span>
                  <span className="eyebrow">Field Notes</span>
                </div>
                <h2 className="cut-headline text-[clamp(36px,5vw,72px)] text-[var(--color-paper)]">
                  Behind the <span className="cutout-outline not-italic">cut</span>.
                </h2>
              </div>

              <div className="md:col-span-6 md:col-start-7 space-y-6 text-[17px] leading-[1.7] md:text-[18px] text-[var(--color-paper)]">
                <p>{project.description}</p>
                <p className="text-[var(--color-paper-mute)]">
                  Want the long version, BTS, or the full cut? Drop me a note ·{" "}
                  <a
                    href="mailto:rift.clb.media@gmail.com"
                    className="underline decoration-[var(--color-stamp-red)] decoration-2 underline-offset-4 hover:text-[var(--color-stamp-red)]"
                  >
                    rift.clb.media@gmail.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RELATED */}
        {related.length > 0 && (
          <section className="relative bg-[var(--color-ink-elevated)] border-y border-[var(--color-ink-line)]">
            <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 md:py-28">
              <div className="mb-10 flex items-end justify-between gap-4 md:mb-14">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="cut-headline-roman text-[24px] text-[var(--color-stamp-red)]">§</span>
                    <span className="eyebrow">Keep Reading</span>
                  </div>
                  <h2 className="cut-headline text-[clamp(36px,5vw,72px)] text-[var(--color-paper)]">
                    More from the index.
                  </h2>
                </div>
                <Link href="/#work" className="btn-ghost hidden md:inline-flex">
                  View all →
                </Link>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {related.map((p, i) => (
                  <Link
                    key={p._id}
                    href={`/work/${p.slug}`}
                    className="tile-card group relative block aspect-[4/3]"
                  >
                    <Image
                      src={p.cover.url}
                      alt={p.cover.alt}
                      fill
                      sizes="(min-width: 768px) 30vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/85 via-transparent to-[var(--color-ink)]/30" />
                    <span className="absolute top-3 right-3 cut-headline-roman text-[20px] text-[var(--color-paper)] [text-shadow:_0_2px_8px_rgba(0,0,0,0.6)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                      <p className="eyebrow-bright mb-1">
                        {p.category} · {p.year}
                      </p>
                      <h3 className="cut-headline-roman text-[22px] tracking-[-0.03em] text-[var(--color-paper)]">
                        {p.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
