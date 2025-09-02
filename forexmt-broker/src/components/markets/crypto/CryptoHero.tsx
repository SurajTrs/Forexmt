"use client";

import Image from "next/image";
import MarketHeroVideo from "@/components/markets/MarketHeroVideo";

export default function CryptoHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <MarketHeroVideo />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-20 sm:pt-24 pb-10 relative z-10">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Left: Glassy content card */}
          <div>
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md px-6 sm:px-8 py-8 sm:py-10 shadow-2xl">
              <span className="text-sky-400 font-semibold uppercase tracking-widest">Discover</span>
              <h1 className="mt-2 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
                Trade Crypto CFDs with Tight Spreads
              </h1>
              <p className="mt-4 text-gray-300 text-base sm:text-lg max-w-xl">
                Access major cryptocurrencies with competitive conditions and institutional-grade charts.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="/start-trading"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-6 sm:px-7 py-3 text-[15px] sm:text-base font-semibold text-slate-900 shadow-sm ring-1 ring-white/10 transition hover:bg-white/90"
                >
                  Start Trading Crypto
                </a>
              </div>

              <p className="mt-3 text-gray-400 text-sm sm:text-[15px]">
                Feel connected anytime, anywhere.
              </p>
            </div>
          </div>

          {/* Right: Real image */}
          <div className="relative">
            <div className="relative mx-auto w-[260px] sm:w-[320px] md:w-[360px] aspect-[9/19] rounded-3xl ring-1 ring-white/10 shadow-2xl overflow-hidden">
              <Image src="/mobile.png" alt="Crypto trading app preview" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
