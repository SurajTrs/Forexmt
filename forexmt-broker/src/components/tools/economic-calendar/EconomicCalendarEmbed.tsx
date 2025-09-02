"use client";

import { useEffect, useRef } from "react";

export default function EconomicCalendarEmbed() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: "100%",
      height: 640,
      importanceFilter: "-1,0,1", // Low, Medium, High
      currencyFilter: "USD,EUR,GBP,JPY,AUD,CAD,CHF,NZD,INR",
      isTransparent: false,
      theme: "light",
      locale: "en",
    });

    const mount = containerRef.current;
    mount.innerHTML = ""; // clear if remount
    mount.appendChild(script);

    return () => {
      mount.innerHTML = "";
    };
  }, []);

  return (
    <section className="py-8 sm:py-10 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl ring-1 ring-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="p-4 sm:p-6 border-b border-slate-200">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Live Economic Calendar</h2>
            <p className="mt-1 text-sm text-slate-600">Real-time macro events with impact and country filters.</p>
          </div>
          <div className="p-0">
            <div className="tradingview-widget-container" ref={containerRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
