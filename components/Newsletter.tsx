"use client";

import { useState } from "react";

export default function Newsletter() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Wire this up to your provider of choice (Buttondown, ConvertKit, Resend, etc).
    setStatus("sent");
  }

  return (
    <section
      id="newsletter"
      className="relative overflow-hidden bg-orange py-20"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, #fbf6ee 0px, #fbf6ee 1px, transparent 1px, transparent 26px)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-10">
        <h2 className="font-display text-3xl italic text-paper sm:text-4xl">
          Get new poems and books in your inbox
        </h2>
        <p className="mt-4 font-body text-paper/85">
          One email when something new is posted. Nothing else, ever.
        </p>

        {status === "idle" ? (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
          >
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@email.com"
              className="w-full rounded-full border border-paper/30 bg-paper/10 px-5 py-3 font-body text-paper placeholder:text-paper/60 focus:bg-paper/15 sm:w-80"
            />
            <button
              type="submit"
              className="rounded-full bg-ink px-6 py-3 font-body text-sm font-semibold text-paper transition-colors hover:bg-ink/80"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <p className="mt-8 font-body font-semibold text-paper">
            You are on the list. Thank you for reading.
          </p>
        )}
      </div>
    </section>
  );
}
