"use client";

import { useState } from 'react';

export default function RiskBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 text-slate-900 text-center py-3 px-4 z-50 border-t border-slate-200 shadow-[0_-8px_24px_rgba(15,23,42,0.06)]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2">
        <span className="font-semibold text-sm sm:text-base">
          ⚠️ Risk Warning:
        </span>
        <p className="text-xs sm:text-sm">
          Your capital is at risk. Leveraged products may not be suitable for everyone.
          Please consider our{' '}
          <a 
            href="/" 
            className="font-semibold text-blue-600 hover:text-blue-700 hover:underline underline-offset-2"
            onClick={(e) => {
              e.preventDefault();
              // Add your risk disclosure modal or navigation logic here
              alert('Risk Disclosure content would be shown here');
            }}
          >
            Risk Disclosure
          </a>.
        </p>
        <button 
          onClick={() => setIsVisible(false)}
          className="ml-2 text-slate-500 hover:text-slate-700 transition-colors"
          aria-label="Dismiss warning"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
