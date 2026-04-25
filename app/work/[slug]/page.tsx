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
  const related = all.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <Nav />
      <main id="main">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-[1440px] px-6 pt-12 pb-12 md:px-12 md:pt-16 md:pb-16">
            <Link
              href="/#work"
              className="eyebrow text-[var(--color-ink-mute)] hover:text-[var(--color-ink)] inline-flex items-center gap-2 mb-12"
            >
              ← Back to the index
            </Link>

            <div className="mb-8 flex flex-wrap items-end gap-3 md:mb-10">
              <span className="eyebrow text-[var(--color-ink-mute)]">
                {project.category}
              </span>
              <span className="h-px w-8 bg-[var(--color-ink)]/40" />
              <span className="eyebrow text-[var(--color-ink-mute)]">
                {project.year}
              </span>
              {project.client && (
                <>
                  <span className="h-px w-8 bg-[var(--color-ink)]/40" />
                  <span className="eyebrow text-[var(--color-ink-mute)]">
                    Client / {project.client}
                  </span>
                </>
              )}
            </div>

            <h1 className="cut-headline text-[clamp(56px,11vw,176px)] mb-12">
              {project.title}
            </h1>

            <div className="grid gap-8 md:grid-cols-12 md:gap-12">
              <p className="md:col-span-7 text-[18px] leading-[1.65] md:text-[20px] md:leading-[1.7]">
                {project.description}
              </p>
              {project.tags?.length ? (
                <div className="md:col-span-4 md:col-start-9">
                  <div className="eyebrow text-[var(--color-ink-mute)] mb-3">Tags</div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] border border-[var(--color-ink)]/30 px-3 py-1.5"
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

        {/* HERO MEDIA · video iframe or cover image */}
        <section className="relative">
          <div className="mx-auto max-w-[1440px] px-6 md:px-12">
            <div className="relative aspect-[16/9] w-full overflow-hidden border border-[var(--color-ink)]/30 shadow-[0_30px_60px_-20px_rgba(13,12,10,0.35)]">
              {project.videoUrl ? (
                <iframe
                  src={project.videoUrl}
                  title={`${project.title} · film`}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              ) : (
                <Image
                  src={project.cover.url}
                  alt={project.cover.alt}
                  fill
                  priority
                  sizes="(min-width: 768px) 90vw, 100vw"
                  className="halftone object-cover"
                />
              )}
            </div>
          </div>
        </section>

        {/* DETAILS / NOTES */}
        <section className="relative">
          <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32">
            <div className="grid gap-10 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-5">
                <div className="flex items-center gap-3 mb-4">
                  <span className="cut-headline-roman text-[24px] text-[var(--color-stamp-red)]">§</span>
                  <span className="eyebrow text-[var(--color-ink-mute)]">Field Notes</span>
                </div>
                <h2 className="cut-headline text-[clamp(36px,5vw,72px)]">
                  Behind the <span className="cutout-outline not-italic">cut</span>.
                </h2>
              </div>

              <div className="md:col-span-6 md:col-start-7 space-y-6 text-[17px] leading-[1.7] md:text-[18px]">
                <p>
                  This page will hold the long-form story of every shoot · what the brief was, how
                  the day actually went, what made the cut, what got left on the cutting room
                  floor.
                </p>
                <p className="text-[var(--color-ink-mute)]">
                  Once Sanity is wired up, you'll be able to add a rich-text body, a frame gallery,
                  BTS clips, and credits directly from the admin panel · no code changes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RELATED */}
        <section className="relative bg-[var(--color-cream)] border-y border-[var(--color-ink)]/15">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 md:py-28">
            <div className="mb-10 flex items-end justify-between gap-4 md:mb-14">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="cut-headline-roman text-[24px] text-[var(--color-stamp-red)]">§</span>
                  <span className="eyebrow text-[var(--color-ink-mute)]">Keep Reading</span>
                </div>
                <h2 className="cut-headline text-[clamp(36px,5vw,72px)]">
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
                  className="group relative block transition-transform hover:-translate-y-1"
                >
                  <article className="bg-[var(--color-paper)] border border-[var(--color-ink)]/25 p-3 shadow-[0_15px_30px_-15px_rgba(13,12,10,0.25)]">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={p.cover.url}
                        alt={p.cover.alt}
                        fill
                        sizes="(min-width: 768px) 30vw, 100vw"
                        className="halftone object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                      <span className="absolute top-3 right-3 cut-headline-roman text-[20px] text-[var(--color-paper)] [text-shadow:_0_2px_8px_rgba(0,0,0,0.6)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="mt-3 px-1 pb-1">
                      <p className="eyebrow text-[var(--color-ink-mute)] mb-1">
                        {p.category} · {p.year}
                      </p>
                      <h3 className="cut-headline-roman text-[24px] tracking-[-0.03em]">
                        {p.title}
                      </h3>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
