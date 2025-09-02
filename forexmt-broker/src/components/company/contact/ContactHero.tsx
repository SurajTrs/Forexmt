"use client";

import MarketHeroVideo from "@/components/markets/MarketHeroVideo";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 min-h-[65vh] sm:min-h-[70vh]">
      <MarketHeroVideo src="/about-hero.mp4" poster="/Bonus.png" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20 flex items-center justify-center min-h-[65vh] sm:min-h-[70vh]">
        <div className="text-center">
          <a href="#methods" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
            Contact Us
          </a>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            How Can We Assist You?
          </h1>
          <p className="mt-3 max-w-3xl mx-auto text-gray-300 text-base sm:text-lg">
            Find quick answers in our Help Center. If you need additional assistance, our award‑winning
            Customer Experience team is available through the channels below.
          </p>
        </div>
      </div>
    </section>
  );
}
