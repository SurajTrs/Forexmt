"use client";

import React from "react";

export default function SecurityBanner() {
  return (
    <section className="relative py-10 sm:py-14 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Dark blue rounded panel */}
        <div className="relative rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-[#103a6b] via-[#0d3561] to-[#0a2b4f] text-white shadow-2xl">
          {/* Inner gradient ring/border */}
          <div className="pointer-events-none absolute inset-0 rounded-[26px] sm:rounded-[30px] ring-1 ring-white/10" />
          <div className="pointer-events-none absolute inset-0 rounded-[28px] sm:rounded-[32px] [mask-image:radial-gradient(120%_100%_at_60%_0%,black,transparent)]">
            <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-6 sm:gap-8 px-6 sm:px-10 py-8 sm:py-12">
            <div className="text-center md:text-left">
              <h3 className="text-[clamp(1.6rem,3.5vw,2.25rem)] font-extrabold tracking-tight">
                Your Funds Are Always Safe and Secure
              </h3>
              <p className="mt-3 text-white/85 text-[clamp(0.95rem,2vw,1.05rem)] max-w-2xl mx-auto md:mx-0">
                Trade with a multi‑regulated broker that has built long‑standing partnerships with top global banks to ensure your funds are always secure.
              </p>
            </div>

            {/* Decorative shield badge on the right */}
            <div className="relative hidden md:block pr-4">
              <div className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-2xl bg-white/5 ring-1 ring-white/15 flex items-center justify-center">
                <svg width="72" height="72" viewBox="0 0 24 24" fill="none" className="text-white/90">
                  <path d="M12 3l7 3v6c0 4.418-3.582 8-8 8s-8-3.582-8-8V6l9-3z" stroke="currentColor" strokeWidth="1.4" fill="url(#g)" />
                  <path d="M7.5 12.2l2.3 2.3 4.7-5" stroke="#8bd3ff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <defs>
                    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.35"/>
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.15"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
