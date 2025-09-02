"use client";

const features = [
  {
    title: "Get your orders with MT5",
    desc: "Build positions with fast execution and multi-asset access.",
    icon: "/mt5/feat-orders.png",
  },
  {
    title: "Savonously low spreads",
    desc: "Spreads as low as 0.8 pips on majors.",
    icon: "/mt5/feat-spreads.png",
  },
  {
    title: "Access a larger range",
    desc: "Trade FX, stocks, indices, metals, energies and more.",
    icon: "/mt5/feat-range.png",
  },
  {
    title: "Top-notch backups & security",
    desc: "Redundant infrastructure and robust protection.",
    icon: "/mt5/feat-security.png",
  },
];

export default function Mt5FeatureCards() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={f.icon} alt="" className="h-8 w-8 object-contain" />
                <div>
                  <div className="font-semibold text-slate-900">{f.title}</div>
                  <div className="mt-1 text-sm text-slate-600">{f.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
