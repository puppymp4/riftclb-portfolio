import Image from "next/image";

export function About() {
  return (
    <section id="about" className="relative bg-[var(--color-cream)] border-y border-[var(--color-ink)]/15">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-40">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          {/* portrait plate */}
          <div className="md:col-span-5">
            <div className="relative">
              <div className="tape -top-3 left-[20%]" style={{ transform: "rotate(-3deg)" }} aria-hidden />
              <div className="tape -top-3 right-[20%]" style={{ transform: "rotate(2deg)" }} aria-hidden />
              <div className="relative aspect-[4/5] overflow-hidden border border-[var(--color-ink)]/25 bg-[var(--color-paper-shadow)]">
                <Image
                  src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1400&q=85"
                  alt="Portrait of the photographer mid-shoot, garage lighting"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="halftone object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 hidden h-24 w-24 items-center justify-center rounded-full border-2 border-[var(--color-ink)] bg-[var(--color-paper)] text-center md:flex">
                <div>
                  <div className="cut-headline-roman text-[18px] leading-none">SOLO</div>
                  <div className="cut-headline-roman text-[18px] leading-none">CREW</div>
                </div>
              </div>
            </div>
          </div>

          {/* text */}
          <div className="md:col-span-6 md:col-start-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="cut-headline-roman text-[28px] text-[var(--color-stamp-red)]">§</span>
              <span className="eyebrow text-[var(--color-ink-mute)]">About / The Operator</span>
            </div>

            <h2 className="cut-headline text-[clamp(40px,6vw,88px)] mb-8">
              I shoot cars <br />
              like they <span className="cutout-outline not-italic">matter</span>.
            </h2>

            <div className="space-y-5 text-[17px] leading-[1.65] md:text-[18px] md:leading-[1.7]">
              <p>
                <span className="editorial text-[20px] md:text-[22px]">rift.clb</span> is a
                one-person automotive film studio. No agency markup. No mood-board recycling. The
                same person who frames the shot is the one who color-grades it at midnight.
              </p>
              <p>
                I came up in the culture · the meets, the late-night rollers, the shop-floor lighting
                that no production set can fake. That's the difference. I'm not a videographer who
                also does cars. I'm a car person who happens to ship cinema.
              </p>
              <p className="text-[var(--color-ink-mute)]">
                Available for: brand reels, shop content packages, event documentation, exotic
                rentals, dealer inventory films, and the occasional personal project that stops me
                in the parking lot.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-[var(--color-ink)]/15 pt-8">
              <div>
                <div className="cut-headline-roman text-[36px] md:text-[44px]">40+</div>
                <div className="eyebrow text-[var(--color-ink-mute)] mt-1">Cars Filmed</div>
              </div>
              <div>
                <div className="cut-headline-roman text-[36px] md:text-[44px]">12</div>
                <div className="eyebrow text-[var(--color-ink-mute)] mt-1">Brand Clients</div>
              </div>
              <div>
                <div className="cut-headline-roman text-[36px] md:text-[44px]">02</div>
                <div className="eyebrow text-[var(--color-ink-mute)] mt-1">Years On The Lens</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
