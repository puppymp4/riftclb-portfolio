"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import type { Project } from "@/lib/projects";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const issueNum = String(index + 1).padStart(2, "0");
  const videoRef = useRef<HTMLVideoElement>(null);

  function handleEnter() {
    const v = videoRef.current;
    if (v && v.paused) v.play().catch(() => {});
  }
  function handleLeave() {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  }

  return (
    <Link
      href={`/work/${project.slug}`}
      className="tile-card group relative block aspect-[4/5]"
      aria-label={`Open project: ${project.title}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={handleLeave}
    >
      <Image
        src={project.cover.url}
        alt={project.cover.alt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="tile-poster object-cover"
      />
      {project.videoUrl && (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden
          className="tile-video absolute inset-0 h-full w-full object-cover opacity-0"
        >
          <source src={project.videoUrl} type="video/mp4" />
        </video>
      )}

      {/* gradient overlay for text legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/85 via-[var(--color-ink)]/15 to-[var(--color-ink)]/40" />

      {/* top row: stamp + project number, arrow */}
      <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5">
        <div className="flex items-center gap-2">
          {project.featured && (
            <span className="bg-[var(--color-stamp-red)] px-2 py-1 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-[var(--color-paper)]">
              Featured
            </span>
          )}
          <span className="cut-headline-roman text-[28px] text-[var(--color-paper)] [text-shadow:_0_2px_8px_rgba(0,0,0,0.6)]">
            {issueNum}
          </span>
        </div>
        <span
          aria-hidden
          className="cut-headline-roman text-[24px] text-[var(--color-paper)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        >
          ↗
        </span>
      </div>

      {/* bottom block: eyebrow + title */}
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
        <p className="eyebrow-bright mb-2">
          {project.category} · {project.year}
          {project.client ? ` · ${project.client}` : ""}
        </p>
        <h3 className="cut-headline-roman text-[26px] md:text-[30px] tracking-[-0.03em] leading-[1] text-[var(--color-paper)] [text-shadow:_0_2px_12px_rgba(0,0,0,0.6)]">
          {project.title}
        </h3>
      </div>
    </Link>
  );
}

export function WorkGrid({ projects }: { projects: Project[] }) {
  return (
    <section id="work" className="relative bg-[var(--color-ink)]">
      <div className="mx-auto max-w-[1440px] px-6 pt-24 pb-20 md:px-12 md:pt-40 md:pb-32">
        {/* section header · magazine spread style */}
        <div className="mb-12 grid items-end gap-6 md:mb-20 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="cut-headline-roman text-[28px] text-[var(--color-stamp-red)]">§</span>
              <span className="eyebrow">Selected Work · 2025·2026</span>
            </div>
            <h2 className="cut-headline text-[clamp(48px,8vw,128px)] text-[var(--color-paper)]">
              The <span className="cutout-outline not-italic">Index</span>
            </h2>
          </div>
          <p className="md:col-span-4 md:col-start-9 max-w-[40ch] text-[16px] leading-[1.6] text-[var(--color-paper-mute)]">
            <span className="editorial">Twelve cuts.</span>{" "}
            Each one shot, framed, and graded by hand. Hover any tile to play the reel.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p._id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
