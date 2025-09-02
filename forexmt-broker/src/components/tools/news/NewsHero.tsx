"use client";

import Image from "next/image";

export default function NewsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-20 sm:pt-24 pb-10">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Left: Glassy content card */}
          <div>
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md px-6 sm:px-8 py-8 sm:py-10 shadow-2xl">
              <span className="text-sky-400 font-semibold uppercase tracking-widest">Trading Tools</span>
              <h1 className="mt-2 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
                News and Analysis
              </h1>
              <p className="mt-4 text-gray-300 text-base sm:text-lg max-w-xl">
                Enhance your knowledge and trading decisions with a variety of valuable resources at your fingertips.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-6 sm:px-7 py-3 text-[15px] sm:text-base font-semibold text-slate-900 shadow-sm ring-1 ring-white/10 transition hover:bg-white/90"
                >
                  Get Full Access
                </a>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="relative mx-auto w-[260px] sm:w-[320px] md:w-[360px] aspect-[9/16] rounded-3xl ring-1 ring-white/10 shadow-2xl overflow-hidden">
              <Image src="/image.png" alt="Market news" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white/10" />
    </section>
  );
}
