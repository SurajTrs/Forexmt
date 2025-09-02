"use client";

export default function MetricsBanner() {
  const metrics = [
    { value: "15+", label: "Million Clients" },
    { value: "10.3+", label: "Billion Trades" },
    { value: "30+", label: "Languages" },
  ];
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="-mt-12 sm:-mt-16 relative z-10 grid grid-cols-3 gap-4 rounded-2xl bg-white ring-1 ring-slate-200 shadow-lg px-5 sm:px-8 py-5 sm:py-7">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">{m.value}</div>
              <div className="text-xs sm:text-sm font-medium text-slate-600">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
