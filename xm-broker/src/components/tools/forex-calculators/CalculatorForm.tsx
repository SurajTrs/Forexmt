"use client";

import { useState } from "react";

export type CalculatorInputs = {
  baseCurrency: string;
  symbol: string;
  leverage: number; // e.g., 100 means 1:100
  accountType: string;
  volumeLots: number;
  price?: number; // optional current price for pip calc
};

export default function CalculatorForm({ onCalculate, embedded = false }: { onCalculate: (inputs: CalculatorInputs) => void; embedded?: boolean }) {
  const [form, setForm] = useState<CalculatorInputs>({
    baseCurrency: "USD",
    symbol: "EURUSD",
    leverage: 100,
    accountType: "standard",
    volumeLots: 1,
    price: 1.1000,
  });

  const update = (k: keyof CalculatorInputs, v: any) => setForm((s) => ({ ...s, [k]: v }));

  const Fields = (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-900">Account Base Currency</label>
              <select className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-slate-300"
                value={form.baseCurrency} onChange={(e) => update("baseCurrency", e.target.value)}>
                {[
                  "USD","EUR","GBP","JPY","AUD","CAD","CHF","NZD","INR"
                ].map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-900">Currency Pair</label>
              <select className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-slate-300"
                value={form.symbol} onChange={(e) => update("symbol", e.target.value)}>
                {["EURUSD","GBPUSD","USDJPY","AUDUSD","USDCAD","USDCHF","NZDUSD"].map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-900">Leverage for Margin</label>
              <select className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-slate-300"
                value={form.leverage} onChange={(e) => update("leverage", Number(e.target.value))}>
                {[50, 100, 200, 400, 500, 1000].map((l) => (
                  <option key={l} value={l}>{`1:${l}`}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-900">Account Type</label>
              <select className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-slate-300"
                value={form.accountType} onChange={(e) => update("accountType", e.target.value)}>
                {["standard","micro","raw"].map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-900">Volume in Lots</label>
              <input type="number" step="0.01" min={0.01} className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-slate-300"
                value={form.volumeLots} onChange={(e) => update("volumeLots", Number(e.target.value))} />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-900">Price (optional)</label>
              <input type="number" step="0.0001" className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-slate-300"
                value={form.price} onChange={(e) => update("price", Number(e.target.value))} />
            </div>
      </div>
      <div className="mt-5">
        <button
          onClick={() => onCalculate(form)}
          className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-sky-600 to-indigo-600 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-slate-300"
        >
          Calculate
        </button>
      </div>
    </>
  );

  if (embedded) {
    return <div className="space-y-0">{Fields}</div>;
  }

  return (
    <section className="py-6 sm:py-8 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl ring-1 ring-slate-200 bg-white p-5 sm:p-6 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Calculators</h2>
              <p className="mt-1 text-sm text-slate-600">Configure parameters below to estimate margin and pip value.</p>
            </div>
          </div>
          <div className="mt-4">{Fields}</div>
        </div>
      </div>
    </section>
  );
}
