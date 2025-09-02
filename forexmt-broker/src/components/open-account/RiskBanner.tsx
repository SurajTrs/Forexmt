"use client";
import { useState } from "react";

export default function RiskBanner() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40">
      <div className="mx-auto w-full max-w-7xl px-3 sm:px-4 pb-3">
        <div className="mx-auto flex items-start gap-3 rounded-md border border-slate-200 bg-white px-3.5 py-2.5 shadow-lg">
          <p className="flex-1 text-[13px] sm:text-[14px] leading-relaxed text-slate-700">
            <span className="font-semibold">Risk Warning:</span> Your capital is at risk. Leveraged products may not be suitable for everyone. Please consider our
            <a href="#" className="ml-1 underline underline-offset-2 decoration-slate-400 hover:decoration-slate-600">Risk Disclosure</a>.
          </p>
          <button
            aria-label="Dismiss risk warning"
            onClick={() => setOpen(false)}
            className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100 hover:text-slate-700"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4"><path fillRule="evenodd" d="M10 8.586l4.95-4.95 1.414 1.415L11.414 10l4.95 4.95-1.414 1.414L10 11.414l-4.95 4.95-1.414-1.414L8.586 10l-4.95-4.95L5.05 3.636 10 8.586z" clipRule="evenodd"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
