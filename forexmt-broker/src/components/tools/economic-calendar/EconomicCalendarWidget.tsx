"use client";

export default function EconomicCalendarWidget() {
  return (
    <section className="py-8 sm:py-10 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Container mimicking calendar layout (filters + table) */}
        <div className="rounded-2xl ring-1 ring-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-[260px_1fr]">
            {/* Sidebar filters */}
            <aside className="border-b md:border-b-0 md:border-r border-slate-200 p-4 sm:p-5">
              <div className="space-y-5">
                <div>
                  <div className="text-sm font-semibold text-slate-700">Filters</div>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                    <button className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 hover:bg-slate-50">Today</button>
                    <button className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 hover:bg-slate-50">Tomorrow</button>
                    <button className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 hover:bg-slate-50">This Week</button>
                    <button className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 hover:bg-slate-50">Next Week</button>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-semibold text-slate-700">Impact</div>
                  <div className="mt-2 flex flex-wrap gap-2 text-xs">
                    <span className="inline-flex items-center gap-2 rounded-full bg-rose-50 text-rose-700 px-3 py-1 ring-1 ring-rose-200">High</span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 text-amber-700 px-3 py-1 ring-1 ring-amber-200">Medium</span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 text-slate-700 px-3 py-1 ring-1 ring-slate-200">Low</span>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-semibold text-slate-700">Regions</div>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                    <label className="inline-flex items-center gap-2"><input type="checkbox" defaultChecked className="accent-slate-900"/> US</label>
                    <label className="inline-flex items-center gap-2"><input type="checkbox" className="accent-slate-900"/> EU</label>
                    <label className="inline-flex items-center gap-2"><input type="checkbox" className="accent-slate-900"/> UK</label>
                    <label className="inline-flex items-center gap-2"><input type="checkbox" className="accent-slate-900"/> JP</label>
                  </div>
                </div>
              </div>
            </aside>

            {/* Table */}
            <div className="p-4 sm:p-5">
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm text-slate-600">Timezone: <span className="font-medium text-slate-800">Local</span></div>
                <div className="flex items-center gap-2">
                  <input type="search" placeholder="Search events" className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-300" />
                </div>
              </div>

              <div className="mt-4 overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead className="bg-slate-50 text-slate-600">
                    <tr>
                      <th className="px-3 py-2 font-semibold">Time</th>
                      <th className="px-3 py-2 font-semibold">Country</th>
                      <th className="px-3 py-2 font-semibold">Event</th>
                      <th className="px-3 py-2 font-semibold">Actual</th>
                      <th className="px-3 py-2 font-semibold">Forecast</th>
                      <th className="px-3 py-2 font-semibold">Previous</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: 12 }).map((_, i) => (
                      <tr key={i} className="border-t border-slate-100 hover:bg-slate-50">
                        <td className="px-3 py-2 text-slate-700">08:{(i+1).toString().padStart(2,"0")}</td>
                        <td className="px-3 py-2 text-slate-700">US</td>
                        <td className="px-3 py-2 text-slate-900">Sample Economic Indicator #{i+1}</td>
                        <td className="px-3 py-2 text-slate-700">-</td>
                        <td className="px-3 py-2 text-slate-700">2.1%</td>
                        <td className="px-3 py-2 text-slate-700">1.9%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 text-right">
                <button className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm hover:bg-slate-50">Load more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
