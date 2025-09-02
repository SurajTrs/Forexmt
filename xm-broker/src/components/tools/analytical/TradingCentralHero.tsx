"use client";

import Image from "next/image";

export default function TradingCentralHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-700 to-indigo-700 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm ring-1 ring-white/20">Powered by Trading Central</div>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">Elevate Your Analysis
              <br className="hidden sm:block" />
              With Trading Central
            </h1>
            <p className="mt-4 text-white/85 text-base sm:text-lg max-w-xl">
              Get award-winning analytics, signals, and education to help you find high-probability setups faster.
            </p>
            <a
              href="#"
              className="mt-7 inline-flex items-center justify-center rounded-lg bg-white text-slate-900 font-semibold px-5 py-2.5 ring-1 ring-white/20 hover:bg-white/90"
            >
              Start Free
            </a>
          </div>
          <div className="relative min-h-[260px] sm:min-h-[320px] md:min-h-[420px]">
            <Image src="/image.png" alt="Trading analysis" fill className="object-contain p-2 sm:p-4 md:p-6 drop-shadow-2xl" />
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-10 bg-white rounded-t-[36px]" />
    </section>
  );
}
