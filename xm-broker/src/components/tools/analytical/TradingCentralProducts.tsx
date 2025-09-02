"use client";

export default function TradingCentralProducts() {
  const items = [
    { code: "MB", title: "Market Buzz", desc: "AI news sentiment and insights" },
    { code: "FI", title: "Featured Ideas", desc: "Personalized trade ideas" },
    { code: "CI", title: "Currency Insights", desc: "FX trend and momentum" },
    { code: "NS", title: "Newsletters", desc: "Daily/weekly outlooks" },
    { code: "TI", title: "Technical Insight", desc: "Pattern recognition on charts" },
    { code: "EI", title: "Economic Insight", desc: "Macro events impact" },
    { code: "TV", title: "TC TV", desc: "Short video market briefs" },
    { code: "SB", title: "Strategy Builder", desc: "Build and test strategies" },
  ];

  return (
    <section className="py-14 sm:py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Get Analysis Customised to Your Goals</h2>
          <p className="mt-3 text-slate-600 max-w-3xl mx-auto">This premium service costs $10,000 a month. Get XM to get it for free.</p>

          <div className="mt-6 inline-flex gap-2 rounded-full bg-slate-100 p-1 text-sm">
            <button className="rounded-full px-3 py-1 bg-white shadow ring-1 ring-slate-200">All</button>
            <button className="rounded-full px-3 py-1 text-slate-600 hover:text-slate-900">Education</button>
            <button className="rounded-full px-3 py-1 text-slate-600 hover:text-slate-900">Research</button>
            <button className="rounded-full px-3 py-1 text-slate-600 hover:text-slate-900">Signals</button>
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((it) => (
            <div key={it.code} className="group rounded-2xl bg-slate-900 text-white p-5 ring-1 ring-white/10 hover:bg-slate-800 transition">
              <div className="flex items-start justify-between">
                <div className="text-2xl font-extrabold tracking-widest opacity-60">{it.code}</div>
                <span className="rounded-full bg-emerald-500/15 text-emerald-300 text-xs px-2 py-0.5 ring-1 ring-emerald-500/30">Included</span>
              </div>
              <div className="mt-6 text-lg font-semibold">{it.title}</div>
              <p className="mt-2 text-white/75 text-sm">{it.desc}</p>
              <div className="mt-5">
                <button className="inline-flex items-center rounded-lg bg-white text-slate-900 text-sm font-semibold px-3 py-1.5 ring-1 ring-white/10 group-hover:bg-white/90">Learn more</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
