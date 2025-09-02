"use client";

import Image from "next/image";

export default function NewsOverviewPanel() {
  return (
    <section className="pt-10 pb-16 sm:pt-12 sm:pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">Stay Ahead of the Market</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">As soon as you open an account with ForexMT, you can access all these helpful tools.</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* Reuters News card */}
          <div className="rounded-[28px] overflow-hidden ring-1 ring-slate-200 bg-white text-slate-900 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 min-h-[320px]">
              <div className="p-8 sm:p-10">
                <h3 className="text-2xl font-bold">Reuters News</h3>
                <p className="mt-3 text-slate-600">Get 24/7 market updates directly from leading news provider Reuters.</p>
                <a href="#" className="mt-6 inline-flex items-center justify-center rounded-xl bg-slate-900 text-white font-semibold px-4 py-2.5 ring-1 ring-slate-900/10 hover:bg-slate-800">Get Reuters</a>
              </div>
              <div className="relative min-h-[240px]">
                <Image src="/shares.png" alt="Reuters graphic" fill className="object-contain p-6" />
              </div>
            </div>
          </div>

          {/* Daily Market Analysis card */}
          <div className="rounded-[28px] overflow-hidden ring-1 ring-slate-200 bg-gradient-to-br from-sky-50 to-indigo-50 text-slate-900 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 min-h-[320px]">
              <div className="p-8 sm:p-10">
                <h3 className="text-2xl font-bold">Daily Market Analysis</h3>
                <p className="mt-3 text-slate-700">Get the latest market analysis of the top-trending assets from our Market Intelligence team.</p>
                <a href="#" className="mt-6 inline-flex items-center justify-center rounded-xl bg-slate-900 text-white font-semibold px-4 py-2.5 ring-1 ring-slate-900/10 hover:bg-slate-800">See Analysis</a>
              </div>
              <div className="relative min-h-[240px]">
                <Image src="/mobile.png" alt="Analysis graphic" fill className="object-contain p-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
