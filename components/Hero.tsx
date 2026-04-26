"use client";

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
    <section className="relative overflow-hidden bg-[var(--color-ink)]">
      {/* full-width hero video plate behind everything */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/posters/hero.jpg"
          className="h-full w-full object-cover"
          aria-hidden
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        {/* Light vignette for legibility, but keeping the footage bright */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-ink)]/15 via-transparent to-[var(--color-ink)]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-ink)]/30 via-transparent to-[var(--color-ink)]/15" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 pt-16 pb-32 md:px-12 md:pt-24 md:pb-48">
        {/* magazine masthead row */}
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4 md:mb-16">
          <div className="flex items-center gap-4">
            <span className="eyebrow-bright">Issue 001</span>
            <span className="h-px w-10 bg-[var(--color-paper)]/40" />
            <span className="eyebrow-bright">2026</span>
          </div>
          <span className="eyebrow-bright">Films · Stills · Culture</span>
        </div>

        {/* cutout headline */}
        <div className="relative">
          <motion.h1
            initial="hidden"
            animate="show"
            className="cut-headline text-[clamp(82px,15vw,260px)] text-[var(--color-paper)]"
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
            className="absolute right-[2%] top-[18%] hidden h-28 w-28 items-center justify-center rounded-full border-2 border-[var(--color-stamp-red)] bg-[var(--color-ink)]/70 backdrop-blur-sm text-center md:flex"
            aria-hidden
          >
            <div className="px-2">
              <div className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-[var(--color-stamp-red)]">
                Approved
              </div>
              <div className="cut-headline-roman text-[14px] mt-1 text-[var(--color-paper)]">
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
          <p className="md:col-span-6 md:col-start-1 max-w-[55ch] text-[19px] leading-[1.5] md:text-[22px] text-[var(--color-paper)]">
            Automotive films, stills, and brand content shot the way the culture deserves.
            Rollers under tunnel lights. Garage edits at 2am.{" "}
            <span className="editorial">No stock footage. No filler.</span>
          </p>
          <div className="md:col-span-4 md:col-start-9 flex flex-wrap items-end gap-3">
            <a href="#work" className="btn-stamp">See the work →</a>
            <a href="#contact" className="btn-ghost">Book a shoot</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
