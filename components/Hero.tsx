"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.08, duration: 0.7, ease: EASE },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* tape strip */}
      <div className="tape left-[8%] top-3 hidden md:block" style={{ transform: "rotate(-3deg)" }} />
      <div className="tape right-[12%] top-6 hidden md:block" style={{ transform: "rotate(2deg)" }} />

      <div className="mx-auto max-w-[1440px] px-6 pt-12 pb-24 md:px-12 md:pt-20 md:pb-40">
        {/* magazine masthead row */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 md:mb-14">
          <div className="flex items-center gap-4">
            <span className="eyebrow text-[var(--color-ink-mute)]">Issue 001</span>
            <span className="h-px w-10 bg-[var(--color-ink)]/40" />
            <span className="eyebrow text-[var(--color-ink-mute)]">2026</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="eyebrow text-[var(--color-ink-mute)]">Films · Stills · Culture</span>
          </div>
        </div>

        {/* cutout headline */}
        <div className="relative">
          <motion.h1
            initial="hidden"
            animate="show"
            className="cut-headline text-[clamp(82px,15vw,260px)]"
            aria-label="rift.clb"
          >
            <motion.span variants={fadeUp} custom={0} className="block">
              rift
              <span className="cutout-outline not-italic">.</span>
            </motion.span>
            <motion.span variants={fadeUp} custom={1} className="block pl-[6vw]">
              <span className="cutout-stamp not-italic">clb</span>
            </motion.span>
          </motion.h1>

          {/* off-set stamp/seal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: -8 }}
            transition={{ delay: 0.5, duration: 0.6, ease: EASE }}
            className="absolute right-[2%] top-[22%] hidden h-28 w-28 items-center justify-center rounded-full border-2 border-[var(--color-stamp-red)] text-center md:flex"
            aria-hidden
          >
            <div className="px-2">
              <div className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-[var(--color-stamp-red)]">
                Approved
              </div>
              <div className="cut-headline-roman text-[14px] mt-1 text-[var(--color-stamp-red)]">
                CINEMA
              </div>
              <div className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-[var(--color-stamp-red)] mt-1">
                MMXXVI
              </div>
            </div>
          </motion.div>
        </div>

        {/* deck / standfirst */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={3}
          className="mt-10 grid gap-8 md:mt-16 md:grid-cols-12"
        >
          <p className="md:col-span-6 md:col-start-1 max-w-[55ch] text-[19px] leading-[1.5] md:text-[22px]">
            Automotive films, stills, and brand content shot the way the culture deserves.
            Rollers under tunnel lights. Garage edits at 2am. <span className="editorial">No stock footage. No filler.</span>
          </p>
          <div className="md:col-span-4 md:col-start-9 flex flex-wrap items-end gap-3">
            <a href="#work" className="btn-stamp">See the work →</a>
            <a href="#contact" className="btn-ghost">Book a shoot</a>
          </div>
        </motion.div>

        {/* hero photo plate */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9, ease: EASE }}
          className="relative mt-16 md:mt-24"
        >
          <div className="tape -top-3 left-[14%] hidden md:block" style={{ transform: "rotate(-4deg)" }} />
          <div className="tape -top-3 right-[16%] hidden md:block" style={{ transform: "rotate(3deg)" }} />
          <div className="relative aspect-[16/9] w-full overflow-hidden border border-[var(--color-ink)]/30 shadow-[0_30px_60px_-20px_rgba(13,12,10,0.35)]">
            <Image
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2400&q=85"
              alt="911 GT3 in low garage lighting, lead frame from rift.clb reel"
              fill
              priority
              sizes="(min-width: 768px) 90vw, 100vw"
              className="halftone object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/40 via-transparent to-[var(--color-ink)]/10" />
            <div className="absolute bottom-4 left-4 flex items-center gap-2 text-[var(--color-paper)] md:bottom-6 md:left-6">
              <span className="eyebrow">Reel 26 / Frame 008</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
