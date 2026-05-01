"use client";

import { useState, type FormEvent } from "react";

const ACCESS_KEY = "df40abfb-1d36-4046-b33d-f7764d68f01f";

type Status = "idle" | "submitting" | "success" | "error";

export function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload: Record<string, string> = {
      access_key: ACCESS_KEY,
      subject: `New Booking Inquiry — ${formData.get("name") || "rift.clb"}`,
      from_name: "rift.clb portfolio",
    };
    formData.forEach((value, key) => {
      payload[key] = String(value);
    });

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong. Try emailing me directly.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Try emailing me directly.");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-[var(--color-stamp-red)] bg-[var(--color-ink)] p-8 md:p-10 text-center">
        <div className="cut-headline-roman text-[36px] md:text-[44px] text-[var(--color-paper)] mb-3">
          Inbox open.
        </div>
        <p className="text-[15px] leading-[1.6] text-[var(--color-paper-mute)] mb-6 max-w-[40ch] mx-auto">
          Got it. I&apos;ll come back inside 24 hours with a quote and a shot direction.
          If it&apos;s urgent, my IG DMs are faster.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-ghost text-[12px]"
        >
          Send another →
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-[var(--color-paper-fade)] bg-[var(--color-ink)] p-6 md:p-8 space-y-5"
    >
      <div className="flex items-center justify-between gap-4 border-b border-[var(--color-ink-line)] pb-4">
        <div className="eyebrow-bright">Book a Shoot</div>
        <div className="eyebrow">Q2 · Q3 / 2026</div>
      </div>

      {/* honeypot — hidden from real users, catches bots */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        style={{ display: "none" }}
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="field-label">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className="input-paper"
          />
        </div>
        <div>
          <label htmlFor="email" className="field-label">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@domain.com"
            className="input-paper"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="field-label">Phone <span className="lowercase tracking-normal text-[var(--color-paper-fade)]">(optional)</span></label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(555) 555-5555"
            className="input-paper"
          />
        </div>
        <div>
          <label htmlFor="instagram" className="field-label">Instagram <span className="lowercase tracking-normal text-[var(--color-paper-fade)]">(optional)</span></label>
          <input
            id="instagram"
            name="instagram"
            type="text"
            placeholder="@yourhandle"
            className="input-paper"
          />
        </div>
      </div>

      <div>
        <label htmlFor="project" className="field-label">The Car / Project</label>
        <input
          id="project"
          name="project"
          type="text"
          required
          placeholder="e.g. AMG GT wrap reveal · 2018 Supra brand reel · shop content"
          className="input-paper"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="shoot_type" className="field-label">Type of Shoot</label>
          <select id="shoot_type" name="shoot_type" required defaultValue="" className="select-paper">
            <option value="" disabled>Select one</option>
            <option value="Brand Film / Reveal">Brand Film / Reveal</option>
            <option value="Shop Content Package">Shop Content Package</option>
            <option value="Event / Meet Coverage">Event / Meet Coverage</option>
            <option value="Dealer Inventory">Dealer Inventory</option>
            <option value="Personal / Owner Cut">Personal / Owner Cut</option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>
        <div>
          <label htmlFor="timeline" className="field-label">Timeline</label>
          <select id="timeline" name="timeline" required defaultValue="" className="select-paper">
            <option value="" disabled>Select one</option>
            <option value="Within 2 weeks">Within 2 weeks</option>
            <option value="This month">This month</option>
            <option value="Next month">Next month</option>
            <option value="Flexible / Open">Flexible / Open</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="budget" className="field-label">Budget Range</label>
        <select id="budget" name="budget" defaultValue="" className="select-paper">
          <option value="">Prefer to discuss</option>
          <option value="Under $500">Under $500</option>
          <option value="$500 – $1,500">$500 – $1,500</option>
          <option value="$1,500 – $5,000">$1,500 – $5,000</option>
          <option value="$5,000+">$5,000+</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="field-label">The Vision</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="What do you want the content to do? Where will it live (IG, ads, dealer site)? Any reference cuts of mine you liked?"
          className="textarea-paper"
        />
      </div>

      {status === "error" && (
        <div className="border border-[var(--color-stamp-red)] bg-[rgba(217,74,48,0.08)] px-4 py-3 text-[13px] text-[var(--color-paper)]">
          {errorMsg}
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <p className="text-[12px] text-[var(--color-paper-fade)] max-w-[32ch]">
          Replies inside 24 hours, usually faster.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-stamp text-[12px] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Sending…" : "Send Inquiry →"}
        </button>
      </div>

      <p className="text-[11px] text-[var(--color-paper-fade)] text-center pt-1">
        Your info goes straight to my inbox. Never shared, never sold.
      </p>
    </form>
  );
}
