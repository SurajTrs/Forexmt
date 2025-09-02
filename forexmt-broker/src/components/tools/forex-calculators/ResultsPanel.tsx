"use client";

export type CalculatorResults = {
  swapLong?: string;
  swapShort?: string;
  minPriceFluctuation?: string;
  requiredMargin?: string;
  pipValue?: string;
  notes?: string[];
};

export default function ResultsPanel({ results, embedded = false }: { results: CalculatorResults | null; embedded?: boolean }) {
  const Content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Results</h2>
          <p className="mt-1 text-sm text-slate-600">Calculated from your current inputs.</p>
        </div>
      </div>

      {!results ? (
        <div className="mt-4 rounded-xl border border-dashed border-slate-300 p-6 text-center">
          <p className="text-sm text-slate-600">Enter parameters and click <span className="font-semibold">Calculate</span> to see results.</p>
        </div>
      ) : (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Stat label="Swap Long" value={results.swapLong ?? "-"} color="from-emerald-500/15 to-emerald-500/5" />
          <Stat label="Swap Short" value={results.swapShort ?? "-"} color="from-rose-500/15 to-rose-500/5" />
          <Stat label="Min. Price Fluctuation" value={results.minPriceFluctuation ?? "-"} />
          <Stat label="Required Margin" value={results.requiredMargin ?? "-"} color="from-indigo-500/15 to-sky-500/10" />
          <Stat label="Pip Value" value={results.pipValue ?? "-"} color="from-amber-500/15 to-amber-500/5" />
          <Stat label="Swap Short" value={results.swapShort ?? "-"} />
        </div>
      )}

      {results?.notes && results.notes.length > 0 && (
        <ul className="mt-4 list-disc pl-5 text-xs text-slate-500 space-y-1">
          {results.notes.map((n, i) => (
            <li key={i}>{n}</li>
          ))}
        </ul>
      )}
    </>
  );

  if (embedded) {
    return <div>{Content}</div>;
  }

  return (
    <section className="py-6 sm:py-8 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl ring-1 ring-slate-200 bg-white p-5 sm:p-6 shadow-sm">
          {Content}
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, color }: { label: string; value: string; color?: string }) {
  return (
    <div className={`rounded-xl border border-slate-200 p-4 bg-gradient-to-br ${color ?? "from-slate-100 to-white"}`}>
      <div className="text-xs uppercase tracking-wide text-slate-500">{label}</div>
      <div className="mt-1 text-lg font-semibold text-slate-900">{value}</div>
    </div>
  );
}
