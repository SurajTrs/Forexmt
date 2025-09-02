"use client";

const DATA = [
  { symbol: "XAUUSD", name: "Gold vs U.S. Dollar", avg: 25.0, low: 20.0, leverage: 400 },
  { symbol: "XAGUSD", name: "Silver vs U.S. Dollar", avg: 2.0, low: 1.6, leverage: 400 },
  { symbol: "USOIL", name: "U.S. Crude Oil", avg: 5.0, low: 4.0, leverage: 100 },
  { symbol: "UKOIL", name: "UK Brent Oil", avg: 5.0, low: 4.0, leverage: 100 },
  { symbol: "XPTUSD", name: "Platinum vs U.S. Dollar", avg: 30.0, low: 25.0, leverage: 200 },
  { symbol: "XPDUSD", name: "Palladium vs U.S. Dollar", avg: 50.0, low: 40.0, leverage: 200 },
];

export default function CommoditiesPairsTable({ onTradeSymbol }: { onTradeSymbol?: (symbol: string) => void }) {
  return (
    <section className="relative bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">Commodities</h3>
            <p className="text-slate-600 mt-1">Trade metals and energy with competitive conditions.</p>
          </div>
          <a href="#register" className="hidden sm:inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-white text-sm font-semibold hover:bg-slate-800">
            Register to see More
          </a>
        </div>

        <div className="mt-6 overflow-hidden rounded-xl ring-1 ring-slate-200">
          <table className="min-w-full bg-white text-left text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-700">Symbol</th>
                <th className="px-4 py-3 font-semibold text-slate-700">Average Spread (pts)</th>
                <th className="px-4 py-3 font-semibold text-slate-700">Spread As Low As (pts)</th>
                <th className="px-4 py-3 font-semibold text-slate-700">Max Leverage</th>
                <th className="px-4 py-3" />
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
