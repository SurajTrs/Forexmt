"use client";

import MarketHeroVideo from "@/components/markets/MarketHeroVideo";

export default function AwardsHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 min-h-[65vh] sm:min-h-[70vh]">
      <MarketHeroVideo src="/about-hero.mp4" poster="/Bonus.png" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 flex items-center justify-center min-h-[65vh] sm:min-h-[70vh]">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-sky-500" />
            Awards & Recognition
          </div>
          <h1 className="mt-4 text-5xl sm:text-6xl font-extrabold tracking-tight text-white">
            Join an Award–Winning Broker
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-gray-300 text-base sm:text-lg">
            Recognition for fairness, innovation and client success — validated by leading industry bodies.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#awards-list" className="inline-flex items-center rounded-2xl bg-slate-900 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-slate-800">
              See Awards
            </a>
            <a href="#" className="inline-flex items-center rounded-2xl bg-white px-6 py-3 text-base font-semibold text-slate-900 ring-1 ring-slate-200 shadow-sm hover:bg-slate-50">
              Press Kit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
