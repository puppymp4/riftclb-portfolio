export function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-40">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="cut-headline-roman text-[28px] text-[var(--color-stamp-red)]">§</span>
              <span className="eyebrow text-[var(--color-ink-mute)]">Contact / Bookings</span>
            </div>

            <h2 className="cut-headline text-[clamp(56px,10vw,160px)] mb-8">
              Have a car? <br />
              <span className="cutout-stamp not-italic">Let's shoot.</span>
            </h2>

            <p className="max-w-[55ch] text-[18px] leading-[1.6] text-[var(--color-ink-soft)] mb-10">
              Tell me about the car, the timeline, and what you want the content to do.
              I'll come back inside 24 hours with a quote and a shot direction.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="mailto:rift.clb.media@gmail.com"
                className="btn-stamp text-[13px]"
                aria-label="Email rift.clb"
              >
                rift.clb.media@gmail.com →
              </a>
              <a
                href="https://instagram.com/rift.clb"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-[13px]"
                aria-label="Open Instagram"
              >
                @rift.clb on IG
              </a>
            </div>
          </div>

          <aside className="md:col-span-4 md:col-start-9 self-start">
            <div className="border border-[var(--color-ink)]/30 bg-[var(--color-cream)] p-6 md:p-8 relative">
              <div className="tape -top-3 left-1/2 -translate-x-1/2" style={{ transform: "translateX(-50%) rotate(-2deg)" }} aria-hidden />
              <div className="eyebrow text-[var(--color-ink-mute)] mb-3">Currently Booking</div>
              <div className="cut-headline-roman text-[32px] mb-4">Q2 · Q3 / 2026</div>
              <ul className="space-y-3 text-[14px] leading-[1.5]">
                <li className="flex items-start gap-3">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[var(--color-stamp-red)]" />
                  Brand films · single day shoots
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[var(--color-stamp-red)]" />
                  Monthly shop content packages
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[var(--color-stamp-red)]" />
                  Event coverage · meets, track days
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[var(--color-stamp-red)]" />
                  Dealer inventory films
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
