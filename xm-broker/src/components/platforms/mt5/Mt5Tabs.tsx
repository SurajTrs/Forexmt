"use client";

type ActiveId = "app" | "ios" | "android" | "webtrader";

const tabs: { id: ActiveId; label: string }[] = [
  { id: "app", label: "App" },
  { id: "ios", label: "iOS" },
  { id: "android", label: "Android" },
  { id: "webtrader", label: "WebTrader" },
];

type Mt5TabsProps = {
  active: ActiveId;
  onChange: (id: ActiveId) => void;
};

export default function Mt5Tabs({ active, onChange }: Mt5TabsProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-6 pb-6">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => onChange(t.id)}
              className={`rounded-full border px-6 sm:px-7 py-2.5 text-[15px] sm:text-base font-semibold uppercase tracking-wide transition ${
                active === t.id
                  ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
              }`}
            >
              <span className="inline-flex items-center gap-2.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/mt5/${t.id}.png`}
                  alt={`${t.label} icon`}
                  className={`h-5 w-5 sm:h-6 sm:w-6 object-contain ${
                    active === t.id ? "opacity-100" : "opacity-90"
                  }`}
                />
                <span>{t.label}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
