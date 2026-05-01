"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import type { Project } from "@/lib/projects";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const issueNum = String(index + 1).padStart(2, "0");
  const wrapRef = useRef<HTMLAnchorElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isHorizontal = project.orientation === "horizontal";

  // Two passes: first observer warms the cache when the tile is ~600px from
  // the viewport, second observer plays/pauses based on actual visibility.
  useEffect(() => {
    const wrap = wrapRef.current;
    const v = videoRef.current;
    if (!wrap || !v) return;

    const warm = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            v.preload = "auto";
            v.load();
            warm.disconnect();
          }
        });
      },
      { rootMargin: "600px 0px" },
    );

    const playObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.35) {
            v.play().catch(() => {});
          } else {
            v.pause();
          }
        });
      },
      { threshold: [0, 0.35, 0.6, 1] },
    );

    warm.observe(wrap);
    playObs.observe(wrap);
    return () => {
      warm.disconnect();
      playObs.disconnect();
    };
  }, []);

  return (
    <Link
      ref={wrapRef}
      href={`/work/${project.slug}`}
      className={`tile-card group relative block ${
        isHorizontal ? "col-span-2 md:col-span-2" : "col-span-1"
      }`}
      aria-label={`Open project: ${project.title}`}
    >
      {/* Media surface */}
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: isHorizontal ? "16 / 9" : "9 / 16" }}
      >
        <Image
          src={project.cover.url}
          alt={project.cover.alt}
          fill
          sizes={isHorizontal ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 50vw"}
          className="absolute inset-0 object-cover"
        />
        {project.videoUrl && (
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="metadata"
            poster={project.cover.url}
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={project.videoUrl} type="video/mp4" />
          </video>
        )}

        {/* Gradient overlay only where text overlays (vertical tiles always, horizontal on md+) */}
        <div
          className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/85 via-transparent to-[var(--color-ink)]/45 ${
            isHorizontal ? "hidden md:block" : ""
          }`}
        />

        {/* Top row: featured stamp + project number, arrow — overlay on every layout */}
        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4 md:p-5">
          <div className="flex items-center gap-2">
            {project.featured && (
              <span className="bg-[var(--color-stamp-red)] px-2 py-1 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-[var(--color-paper)]">
                Featured
              </span>
            )}
            <span className="cut-headline-roman text-[24px] md:text-[28px] text-[var(--color-paper)] [text-shadow:_0_2px_8px_rgba(0,0,0,0.7)]">
              {issueNum}
            </span>
          </div>
          <span
            aria-hidden
            className="cut-headline-roman text-[22px] md:text-[24px] text-[var(--color-paper)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 [text-shadow:_0_2px_8px_rgba(0,0,0,0.7)]"
          >
            ↗
          </span>
        </div>

        {/* Title block — overlays on vertical tiles, and on horizontal tiles only at md+ */}
        <div
          className={`absolute inset-x-0 bottom-0 p-4 md:p-6 ${
            isHorizontal ? "hidden md:block" : ""
          }`}
        >
          <p className="eyebrow-bright mb-1.5">
            {project.category} · {project.year}
            {project.client ? ` · ${project.client}` : ""}
          </p>
          <h3 className="cut-headline-roman text-[22px] md:text-[28px] tracking-[-0.03em] leading-[1.05] text-[var(--color-paper)] [text-shadow:_0_2px_12px_rgba(0,0,0,0.7)]">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Mobile-only caption block under horizontal tiles (no overlay, easier to read) */}
      {isHorizontal && (
        <div className="px-1 pt-3 pb-1 md:hidden">
          <p className="eyebrow-bright mb-1.5">
            {project.category} · {project.year}
            {project.client ? ` · ${project.client}` : ""}
          </p>
          <h3 className="cut-headline-roman text-[20px] tracking-[-0.03em] leading-[1.05] text-[var(--color-paper)]">
            {project.title}
          </h3>
        </div>
      )}
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
            Each one shot, framed, and graded by hand. Each tile plays as you scroll past — tap any to open the full reel with sound.
          </p>
        </div>

        <div
          className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6"
          style={{ gridAutoFlow: "row dense" }}
        >
          {projects.map((p, i) => (
            <ProjectCard key={p._id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
