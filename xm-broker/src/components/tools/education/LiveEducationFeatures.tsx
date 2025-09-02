"use client";

export default function LiveEducationFeatures() {
  const features = [
    {
      title: "Forex Power Hour",
      desc:
        "Cover the latest technicals, levels and momentum on FX majors and gold with a practical trading lens.",
    },
    {
      title: "US Market Open Hour",
      desc:
        "Understand the first-hour liquidity, volatility and catalysts to navigate US session like a pro.",
    },
    {
      title: "Indices Marathon",
      desc:
        "Deep dive into indices strategies as we scan for setups and discuss risk tactics for key benchmarks.",
    },
    {
      title: "Let's Talk Fundamentals",
      desc:
        "Decode economic releases, central banks and macro themes and how they impact trades and risk.",
    },
  ];

  return (
    <section className="py-10 sm:py-14 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sky-600 font-semibold uppercase tracking-widest">XM Live</span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">Level Up Your Trading With Live Education</h2>
          <p className="mt-2 text-slate-600 max-w-3xl mx-auto">
            Master the markets and learn directly from our team of experts in live education rooms. Join, interact and build trading skills.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex items-start gap-4 rounded-2xl ring-1 ring-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="mt-1 h-9 w-9 shrink-0 rounded-xl bg-sky-50 ring-1 ring-sky-200 text-sky-700 flex items-center justify-center">
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.704 5.29a1 1 0 010 1.414l-7.01 7.01a1 1 0 01-1.414 0L3.296 9.72a1 1 0 111.414-1.414l3.156 3.155 6.303-6.303a1 1 0 011.535.131z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">{f.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <a href="#" className="inline-flex items-center rounded-xl bg-slate-900 text-white px-5 py-2.5 text-sm font-semibold shadow-sm hover:bg-slate-800">Watch a Demo</a>
        </div>
      </div>
    </section>
  );
}
