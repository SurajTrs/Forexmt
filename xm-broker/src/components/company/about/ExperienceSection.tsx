"use client";

import Image from "next/image";

export default function ExperienceSection() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="text-sky-600 font-semibold uppercase tracking-widest">Why XM?</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">
              We Give Every Client the Best Possible Trading Experience
            </h2>
            <p className="mt-4 text-slate-700 text-base sm:text-lg">
              Crafted by a team of market experts, engineers and educators, our platform is optimized to support you at every stage of your trading journey.
              Transparent execution, robust risk tools and responsive support – all in one place.
            </p>
            <ul className="mt-6 space-y-3 text-slate-800 text-base sm:text-lg">
              <li className="flex items-start gap-3"><Check /> Tight spreads and reliable execution</li>
              <li className="flex items-start gap-3"><Check /> Powerful platforms across web, mobile and desktop</li>
              <li className="flex items-start gap-3"><Check /> Education, analysis and live rooms 7 days a week</li>
            </ul>
          </div>
          <div className="relative">
            <div className="relative mx-auto w-[280px] sm:w-[360px] md:w-[420px] aspect-[4/3] rounded-3xl ring-1 ring-slate-200 shadow-xl overflow-hidden bg-slate-50">
              <Image src="/Bonus.png" alt="Team at work" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Check() {
  return (
    <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-lg bg-sky-50 ring-1 ring-sky-200 text-sky-700">
      <svg className="h-4.5 w-4.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M16.704 5.29a1 1 0 010 1.414l-7.01 7.01a1 1 0 01-1.414 0L3.296 9.72a1 1 0 111.414-1.414l3.156 3.155 6.303-6.303a1 1 0 011.535.131z" clipRule="evenodd" />
      </svg>
    </span>
  );
}
