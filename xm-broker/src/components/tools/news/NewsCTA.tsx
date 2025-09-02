"use client";

export default function NewsCTA() {
  return (
    <section className="py-16 sm:py-20 bg-slate-900 text-white rounded-t-[36px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl bg-slate-800/40 ring-1 ring-white/10 p-8 sm:p-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Combine News With Analytical Tools
          </h2>
          <p className="mt-3 text-white/80 max-w-3xl">
            Make better-informed decisions by pairing market-moving news with expert analysis and essential trading tools.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <div className="text-lg font-semibold">Trading Central</div>
              <p className="mt-2 text-white/80 text-sm">AI-assisted technical analysis and trade ideas on popular instruments.</p>
            </div>
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <div className="text-lg font-semibold">Economic Calendar</div>
              <p className="mt-2 text-white/80 text-sm">Track economic events and forecasts that impact the markets.</p>
            </div>
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <div className="text-lg font-semibold">Trading Calculators</div>
              <p className="mt-2 text-white/80 text-sm">Plan positions with margin, pip, and risk calculators.</p>
            </div>
          </div>

          <a
            href="#"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-white text-slate-900 font-semibold px-5 py-2.5 ring-1 ring-white/10 hover:bg-white/90"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
