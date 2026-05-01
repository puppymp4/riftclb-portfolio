export function About() {
  return (
    <section id="about" className="relative bg-[var(--color-ink)]">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-40">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          {/* portrait plate (poster as a stand-in) */}
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden border border-[var(--color-ink-line)] bg-[var(--color-ink-elevated)]">
              <video
                autoPlay
                muted
                loop
                playsInline
                poster="/posters/amg-gt-cinematic.jpg"
                className="h-full w-full object-cover opacity-90"
                aria-hidden
              >
                <source src="/videos/amg-gt-cinematic.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-[var(--color-paper)]">
                <span className="eyebrow-bright">Reel 26 · Frame 008</span>
                <span className="cut-headline-roman text-[18px]">SOLO CREW</span>
              </div>
            </div>
          </div>

          {/* text */}
          <div className="md:col-span-6 md:col-start-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="cut-headline-roman text-[28px] text-[var(--color-stamp-red)]">§</span>
              <span className="eyebrow">About / The Operator</span>
            </div>

            <h2 className="cut-headline text-[clamp(40px,6vw,88px)] mb-8 text-[var(--color-paper)]">
              I shoot cars <br />
              like they <span className="cutout-outline not-italic">matter</span>.
            </h2>

            <div className="space-y-5 text-[17px] leading-[1.65] md:text-[18px] md:leading-[1.7] text-[var(--color-paper)]">
              <p>
                <span className="editorial text-[20px] md:text-[22px]">rift.clb</span> is a
                one-person automotive film studio. No agency markup. No mood-board recycling. The
                same person who frames the shot is the one who color-grades it at midnight.
              </p>
              <p>
                I came up in the culture · the meets, the late-night rollers, the shop-floor lighting
                that no production set can fake. That&apos;s the difference. I&apos;m not a videographer who
                also does cars. I&apos;m a car person who happens to ship cinema.
              </p>
              <p className="text-[var(--color-paper-mute)]">
                Available for: brand reels, shop content packages, event documentation, exotic
                rentals, dealer inventory films, and the occasional personal project that stops me
                in the parking lot.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-[var(--color-ink-line)] pt-8">
              <div>
                <div className="cut-headline-roman text-[36px] md:text-[44px] text-[var(--color-paper)]">39</div>
                <div className="eyebrow mt-1">Cuts on File</div>
              </div>
              <div>
                <div className="cut-headline-roman text-[36px] md:text-[44px] text-[var(--color-paper)]">12</div>
                <div className="eyebrow mt-1">Brand Clients</div>
              </div>
              <div>
                <div className="cut-headline-roman text-[36px] md:text-[44px] text-[var(--color-paper)]">02</div>
                <div className="eyebrow mt-1">Years On The Lens</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
