"use client";

import Link from "next/link";

export default function AppCTA() {
  return (
    <section className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white shadow-2xl">
          <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10 rounded-3xl" />
          <div className="relative grid gap-6 sm:gap-8 md:grid-cols-[1fr_auto] items-center px-6 sm:px-10 py-10 sm:py-12">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Start using the ForexMT app</h3>
              <p className="mt-3 text-white/85 text-[15px] sm:text-[17px] max-w-2xl">
                Download the app and you're a few taps away from unlimited trading opportunities. You can even open an account from the app.
              </p>
            </div>
            <div className="flex gap-3 sm:gap-4 justify-center md:justify-end">
              <Link
                href="#download"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 sm:px-7 py-3 text-[15px] sm:text-base font-semibold text-slate-900 shadow-sm ring-1 ring-white/10 transition hover:bg-white/90"
              >
                Download App
              </Link>
              <Link
                href="/register"
                className="inline-flex items-center justify-center rounded-2xl bg-white/10 px-6 sm:px-7 py-3 text-[15px] sm:text-base font-semibold text-white shadow-sm ring-1 ring-white/10 transition hover:bg-white/15"
              >
                Open Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
