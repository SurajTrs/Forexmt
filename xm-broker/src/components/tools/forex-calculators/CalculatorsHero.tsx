"use client";

import Image from "next/image";

export default function CalculatorsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-20 sm:pt-24 pb-10">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Left: Glassy content card */}
          <div>
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md px-6 sm:px-8 py-8 sm:py-10 shadow-2xl">
              <span className="text-sky-400 font-semibold uppercase tracking-widest">Trading Tools</span>
              <h1 className="mt-2 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
                Forex Calculators
              </h1>
              <p className="mt-4 text-gray-300 text-base sm:text-lg max-w-xl">
                Determine margin, pip value and estimated swaps in seconds. Professional‑grade UX designed for speed and clarity.
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="relative mx-auto w-[260px] sm:w-[320px] md:w-[360px] aspect-[9/16] rounded-3xl ring-1 ring-white/10 shadow-2xl overflow-hidden">
              <Image src="/image.png" alt="Forex calculators" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white/10" />
    </section>
  );
}
