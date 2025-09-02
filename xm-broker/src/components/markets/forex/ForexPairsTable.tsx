"use client";

const DATA = [
  { symbol: "USDJPY", name: "U.S. Dollar vs Japanese Yen", avg: 2.5, low: 2.0, leverage: 1000 },
  { symbol: "EURUSD", name: "Euro vs U.S. Dollar", avg: 2.0, low: 1.6, leverage: 1000 },
  { symbol: "AUDUSD", name: "Australian Dollar vs U.S. Dollar", avg: 2.4, low: 2.3, leverage: 1000 },
  { symbol: "GBPJPY", name: "Pound sterling vs Japanese Yen", avg: 3.8, low: 3.0, leverage: 1000 },
  { symbol: "GBPUSD", name: "Pound sterling vs U.S. Dollar", avg: 2.4, low: 1.8, leverage: 1000 },
  { symbol: "EURJPY", name: "Euro vs Japanese Yen", avg: 3.2, low: 2.1, leverage: 1000 },
  { symbol: "EURGBP", name: "Euro vs Pound sterling", avg: 2.4, low: 1.8, leverage: 1000 },
  { symbol: "USDCHF", name: "U.S. Dollar vs Swiss Franc", avg: 2.6, low: 1.9, leverage: 400 },
  { symbol: "NZDUSD", name: "New Zealand Dollar vs U.S. Dollar", avg: 2.9, low: 2.8, leverage: 1000 },
  { symbol: "EURCHF", name: "Euro vs Swiss Franc", avg: 3.3, low: 2.4, leverage: 400 },
];

export default function ForexPairsTable({ onTradeSymbol }: { onTradeSymbol?: (symbol: string) => void }) {
  return (
    <section className="relative bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">Pick Your Pairs</h3>
            <p className="text-slate-600 mt-1">You can see all trading hours when you login to your account.</p>
          </div>
          <a href="#register" className="hidden sm:inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-white text-sm font-semibold hover:bg-slate-800">
            Register to see More
          </a>
        </div>

        <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-700">
              <tr>
                <th className="px-4 py-3 font-semibold">Symbol</th>
                <th className="px-4 py-3 font-semibold">Average Spread (pips)</th>
                <th className="px-4 py-3 font-semibold">Spread As Low As (pips)</th>
                <th className="px-4 py-3 font-semibold">Max Leverage</th>
                <th className="px-4 py-3 font-semibold"></th>
              </tr>
            </thead>
            <tbody>
              {DATA.map((row) => (
                <tr key={row.symbol} className="border-t border-slate-200">
                  <td className="px-4 py-3">
                    <div className="font-semibold text-slate-900">{row.symbol}</div>
                    <div className="text-slate-600 text-xs sm:text-sm">{row.name}</div>
                  </td>
                  <td className="px-4 py-3 text-slate-900">{row.avg.toFixed(1)}</td>
                  <td className="px-4 py-3 text-slate-900">{row.low.toFixed(1)}</td>
                  <td className="px-4 py-3 text-slate-900">{row.leverage.toLocaleString()}</td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => {
                        onTradeSymbol?.(row.symbol);
                        const el = document.getElementById("tv-chart");
                        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                      className="inline-flex rounded-lg bg-slate-900 px-3 py-1.5 text-white text-xs sm:text-sm font-semibold hover:bg-slate-800"
                    >
                      Trade
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="sm:hidden mt-4">
          <a href="#register" className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-white text-sm font-semibold hover:bg-slate-800 w-full">
            Register to see More
          </a>
        </div>
      </div>
    </section>
  );
}
