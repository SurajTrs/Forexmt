"use client";

import Link from "next/link";

export default function ForexCTA() {
  return (
    <section id="start-trading" className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white shadow-2xl">
          <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10 rounded-3xl" />
          <div className="relative grid gap-6 sm:gap-8 md:grid-cols-[1fr_auto] items-center px-6 sm:px-10 py-10 sm:py-12">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Ready to Trade Forex With ForexMT?</h3>
              <p className="mt-3 text-white/85 text-[15px] sm:text-[17px] max-w-2xl">
                Join a truly global and regulated broker to explore your forex trading potential. Open an account within seconds.
              </p>
            </div>
            <div className="flex gap-3 sm:gap-4 justify-center md:justify-end">
              <Link
                href="#register"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 sm:px-7 py-3 text-[15px] sm:text-base font-semibold text-slate-900 shadow-sm ring-1 ring-white/10 transition hover:bg-white/90"
              >
                Start Trading Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
