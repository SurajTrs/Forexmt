"use client";

const DATA = [
  { symbol: "US30", name: "Dow Jones 30", avg: 2.5, low: 2.0, leverage: 400 },
  { symbol: "NAS100", name: "Nasdaq 100", avg: 3.0, low: 2.5, leverage: 400 },
  { symbol: "SPX500", name: "S&P 500", avg: 0.8, low: 0.6, leverage: 400 },
  { symbol: "GER40", name: "Germany 40", avg: 1.4, low: 1.0, leverage: 400 },
  { symbol: "UK100", name: "UK 100", avg: 1.2, low: 0.9, leverage: 400 },
  { symbol: "JPN225", name: "Japan 225", avg: 2.0, low: 1.6, leverage: 400 },
];

export default function IndicesPairsTable({ onTradeSymbol }: { onTradeSymbol?: (symbol: string) => void }) {
  return (
    <section className="relative bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">Indices</h3>
            <p className="text-slate-600 mt-1">Trade top global indices with competitive conditions.</p>
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
