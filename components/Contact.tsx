import { BookingForm } from "./BookingForm";

export function Contact() {
  return (
    <section id="contact" className="relative bg-[var(--color-ink-elevated)] border-y border-[var(--color-ink-line)]">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-40">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="cut-headline-roman text-[28px] text-[var(--color-stamp-red)]">§</span>
              <span className="eyebrow">Contact / Bookings</span>
            </div>

            <h2 className="cut-headline text-[clamp(48px,8vw,128px)] mb-8 text-[var(--color-paper)]">
              Have a car? <br />
              <span className="cutout-stamp not-italic">Let&apos;s shoot.</span>
            </h2>

            <p className="max-w-[40ch] text-[17px] leading-[1.6] text-[var(--color-paper-mute)] mb-8">
              Tell me about the car, the timeline, and what you want the content to do.
              I&apos;ll come back inside 24 hours with a quote and a shot direction.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-10">
              <a
                href="mailto:rift.clb.media@gmail.com"
                className="btn-ghost text-[12px]"
                aria-label="Email rift.clb"
              >
                rift.clb.media@gmail.com
              </a>
              <a
                href="https://instagram.com/rift.clb"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-[12px]"
                aria-label="Open Instagram"
              >
                @rift.clb on IG
              </a>
            </div>

            <div className="border-t border-[var(--color-ink-line)] pt-6">
              <div className="eyebrow mb-4">Currently Booking</div>
              <ul className="space-y-2.5 text-[14px] leading-[1.5] text-[var(--color-paper)]">
                <li className="flex items-start gap-3">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[var(--color-stamp-red)] shrink-0" />
                  Brand films · single day shoots
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[var(--color-stamp-red)] shrink-0" />
                  Monthly shop content packages
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[var(--color-stamp-red)] shrink-0" />
                  Event coverage · meets, track days
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[var(--color-stamp-red)] shrink-0" />
                  Dealer inventory films
                </li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
}
