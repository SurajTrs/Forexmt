"use client";

export default function EconomicCalendarDisclaimer() {
  return (
    <section className="py-10 sm:py-12 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="space-y-6">
          <div className="rounded-2xl ring-1 ring-slate-200 bg-white p-5 sm:p-6 shadow-sm">
            <h3 className="text-base font-semibold text-slate-800">Notes</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              The economic calendar is provided for informational purposes only and does not constitute investment advice.
              Data is sourced from third-party providers and may be delayed or inaccurate. Always verify critical information
              with primary sources before placing trades.
            </p>
          </div>
          <div className="rounded-2xl ring-1 ring-slate-200 bg-white p-5 sm:p-6 shadow-sm">
            <h3 className="text-base font-semibold text-slate-800">Risk Warning</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Trading leveraged products involves a high level of risk and may not be suitable for all investors. You could
              lose more than your initial investment. Ensure you fully understand the risks involved and seek independent advice
              if necessary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
