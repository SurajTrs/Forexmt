"use client";

const features = [
  {
    title: "Get your orders with MT4",
    desc: "Build positions with fast execution and low latency.",
    icon: "/mt4/feat-orders.svg",
  },
  {
    title: "Savonously low spreads",
    desc: "Spreads as low as 0.8 pips on majors.",
    icon: "/mt4/feat-spreads.svg",
  },
  {
    title: "Access a large range",
    desc: "Trade FX, metals, indices, energies and more.",
    icon: "/mt4/feat-range.svg",
  },
  {
    title: "Top-notch backups & security",
    desc: "Redundant infrastructure and robust protection.",
    icon: "/mt4/feat-security.svg",
  },
];

export default function Mt4FeatureCards() {
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
                <img src={f.icon} alt="" className="h-8 w-8" />
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
