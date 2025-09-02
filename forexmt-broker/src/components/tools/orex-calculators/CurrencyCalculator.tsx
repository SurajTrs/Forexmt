"use client";

import { useMemo, useState } from "react";

const CURRENCIES = [
  "USD", "EUR", "GBP", "JPY", "AUD", "CAD", "CHF", "NZD", "INR",
];

export default function CurrencyCalculator() {
  const [base, setBase] = useState("USD");
  const [quote, setQuote] = useState("EUR");
  const [amount, setAmount] = useState<number>(1000);
  const [rate, setRate] = useState<number>(0.92); // base->quote
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const result = useMemo(
    () => (Number.isFinite(amount) && Number.isFinite(rate) ? amount * rate : 0),
    [amount, rate]
  );

  const swap = () => {
    setBase(quote);
    setQuote(base);
    if (rate && rate !== 0) setRate(1 / rate);
  };

  const fetchRate = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(
        `https://api.exchangerate.host/latest?base=${base}&symbols=${quote}`
      );
      if (!res.ok) throw new Error("Failed to fetch rate");
      const data = await res.json();
      const r = data?.rates?.[quote];
      if (typeof r !== "number") throw new Error("Invalid response");
      setRate(r);
    } catch (e: any) {
      setError(e?.message || "Unable to fetch rate. You can enter it manually.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Currency Calculator</h2>
        <p className="mt-1 text-sm text-slate-700">
          Convert one currency to another using a custom or fetched market rate.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-900">From</label>
          <select
            className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-slate-300"
            value={base}
            onChange={(e) => setBase(e.target.value)}
          >
            {CURRENCIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-900">To</label>
          <select
            className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-slate-300"
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
          >
            {CURRENCIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2 lg:col-span-1">
          <label className="block text-sm font-medium text-slate-900">Amount ({base})</label>
          <input
            type="number"
            step="0.01"
            min={0}
            className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-slate-300"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>

        <div className="sm:col-span-2 lg:col-span-1">
          <label className="block text-sm font-medium text-slate-900">
            Rate ({base} ➜ {quote})
          </label>
          <input
            type="number"
            step="0.0001"
            min={0}
            className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-slate-300"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={swap}
          className="inline-flex items-center gap-2 rounded-lg bg-slate-100 text-slate-900 px-4 py-2 text-sm font-semibold ring-1 ring-slate-200 hover:bg-slate-200"
        >
          Swap
        </button>
        <button
          onClick={fetchRate}
          disabled={loading}
          className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-sky-600 to-indigo-600 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-slate-300 disabled:opacity-60"
        >
          {loading ? "Fetching…" : "Fetch latest rate"}
        </button>
      </div>

      {error && <p className="text-sm text-rose-600">{error}</p>}

      <div className="rounded-xl border border-slate-200 p-4 bg-gradient-to-br from-slate-50 to-white">
        <div className="text-xs uppercase tracking-wide text-slate-500">Converted Amount</div>
        <div className="mt-1 text-lg font-semibold text-slate-900">
          {Number.isFinite(result) ? result.toFixed(2) : "-"} {quote}
        </div>
        <p className="mt-1 text-xs text-slate-600">
          Based on 1 {base} = {Number.isFinite(rate) ? rate.toFixed(4) : "-"} {quote}
        </p>
      </div>
    </div>
  );
}
