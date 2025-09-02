"use client";

export default function AppFeatures() {
  const items = [
    "Withdraw and deposit at any time.",
    "Reach support within seconds.",
    "Trade on the go and access your accounts.",
    "Get market news and analysis.",
  ];

  return (
    <section className="relative py-14 sm:py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-700">
            FEATURES
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Why the ForexMT App?
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Essential tools to manage your accounts and trade anywhere, anytime.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {items.map((text, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white">
                {/* check icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              <p className="text-[15px] sm:text-base leading-relaxed text-slate-700">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
