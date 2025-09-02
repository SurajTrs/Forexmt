"use client";

import AwardCard, { type Award } from "./AwardCard";
import { useMemo, useState } from "react";

const CATEGORIES = ["All", "Platform", "Service", "Education", "Innovation", "Other"] as const;

export default function AwardsGrid({ awards }: { awards: Award[] }) {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");
  const filtered = useMemo(() => (active === "All" ? awards : awards.filter(a => a.category === active)), [active, awards]);

  return (
    <section id="awards-list" className="py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-xl px-3.5 py-2 text-sm font-semibold ring-1 transition ${active === cat ? "bg-slate-900 text-white ring-slate-900" : "bg-white text-slate-700 ring-slate-200 hover:bg-slate-50"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a) => (
            <AwardCard key={`${a.title}-${a.org}-${a.year ?? ""}`} award={a} />
          ))}
        </div>
      </div>
    </section>
  );
}
