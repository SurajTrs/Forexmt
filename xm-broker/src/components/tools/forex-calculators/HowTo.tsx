"use client";

export default function HowTo() {
  return (
    <section className="py-6 sm:py-8 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl ring-1 ring-slate-200 bg-white p-5 sm:p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/15 to-indigo-500/15 ring-1 ring-sky-200/40">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-sky-600">
                <path d="M4 12h16M12 4v16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">How to use</h2>
              <p className="mt-2 text-slate-600 text-sm leading-6">
                Select your account base currency, configure each trading parameter, and enter the volume in lots. Click
                <span className="font-semibold"> Calculate</span> to get the margin and pip value estimates.
              </p>
            </div>
          </div>
          <div className="mt-4 border-t border-slate-100 pt-4 text-xs text-slate-500">
            Tip: For the most accurate results, provide a recent market price for the chosen symbol.
          </div>
        </div>
      </div>
    </section>
  );
}
