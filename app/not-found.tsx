import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main id="main">
        <section className="relative">
          <div className="mx-auto max-w-[1440px] px-6 py-32 md:px-12 md:py-48">
            <div className="grid gap-10 md:grid-cols-12">
              <div className="md:col-span-7">
                <div className="flex items-center gap-3 mb-6">
                  <span className="cut-headline-roman text-[28px] text-[var(--color-stamp-red)]">§</span>
                  <span className="eyebrow text-[var(--color-ink-mute)]">Error / 404</span>
                </div>
                <h1 className="cut-headline text-[clamp(72px,14vw,220px)] mb-8">
                  Wrong <br />
                  <span className="cutout-outline not-italic">turn</span>.
                </h1>
                <p className="max-w-[55ch] text-[18px] leading-[1.6] text-[var(--color-ink-soft)] mb-10">
                  This page doesn't exist . or it got cut from the final edit. Head back to the
                  index and pick another reel.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/" className="btn-stamp">← Back to home</Link>
                  <Link href="/#work" className="btn-ghost">See the work</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
