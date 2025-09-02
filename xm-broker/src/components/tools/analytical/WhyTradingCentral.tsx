"use client";

export default function WhyTradingCentral() {
  const items = [
    { title: "Full Opportunities", desc: "Spot setups across FX, indices, stocks, and more." },
    { title: "Actionable Signals", desc: "Clear entries, exits, and risk guidance." },
    { title: "Lower Noise, Motive", desc: "Filter out noise to focus on quality ideas." },
    { title: "Multiple Styles", desc: "Blend technical, fundamental, and sentiment analysis." },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-[36px] bg-slate-900 text-white p-8 sm:p-10 ring-1 ring-white/10">
          <h2 className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight">Why Use Trading Central?</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((it) => (
              <div key={it.title} className="rounded-2xl overflow-hidden bg-white/5 ring-1 ring-white/10 p-6">
                <div className="text-lg font-semibold">{it.title}</div>
                <p className="mt-2 text-white/80 text-sm">{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
