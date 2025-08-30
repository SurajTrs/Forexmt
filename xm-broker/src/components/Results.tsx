"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

type Stat = {
  label: string;
  sub: string;
  value: number;
  decimals?: number;
  suffix?: string;
  isZeroLabel?: string; // when value === 0 show this label instead of number
};

function useCountUp(target: number, start: boolean, duration = 1.8) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const startTime = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - startTime) / (duration * 1000));
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setVal(target * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return val;
}

function StatCard({ stat, delay = 0 }: { stat: Stat; delay?: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const animatedVal = useCountUp(stat.value, inView);
  const display = stat.decimals
    ? animatedVal.toFixed(stat.decimals)
    : Math.round(animatedVal).toString();

  return (
    <motion.div
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : undefined}
      transition={{ type: "spring", stiffness: 100, damping: 16, delay }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 p-6 sm:p-8 shadow-2xl shadow-slate-900/40 backdrop-blur-md"
    >
      {/* subtle top gradient accent */}
      <div aria-hidden className="pointer-events-none absolute -top-20 -right-24 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="relative z-10">
        <div className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          {stat.value === 0 && stat.isZeroLabel ? (
            <span className="text-white">{stat.isZeroLabel}</span>
          ) : (
            <>
              <span className="text-white tabular-nums">{display}</span>
              {stat.suffix && <span className="ml-1 text-white/80 text-2xl sm:text-3xl align-top">{stat.suffix}</span>}
            </>
          )}
        </div>
        <p className="mt-2 text-slate-300 text-lg font-semibold">{stat.label}</p>
        <p className="mt-1 text-slate-400 text-sm max-w-md">{stat.sub}</p>
      </div>
    </motion.div>
  );
}

export default function Results() {
  const stats: Stat[] = [
    {
      label: "trades have been executed on Forexmt Platforms.",
      sub: "Scale you can rely on.",
      value: 5.0,
      decimals: 1,
      suffix: " Billion",
    },
    {
      label: "rejections or requotes on trades.",
      sub: "Fair, reliable execution every time.",
      value: 0,
      isZeroLabel: "Zero",
    },
    {
      label: "of our withdrawals are automatically approved.",
      sub: "Fast access to your funds.",
      value: 99.0,
      decimals: 1,
      suffix: "%",
    },
  ];

  return (
    <section className="relative overflow-hidden rounded-[40px] sm:rounded-[56px] lg:rounded-[72px] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-16 sm:py-24 mx-4 sm:mx-6 lg:mx-8 shadow-2xl ring-1 ring-white/10">
      {/* background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-[clamp(2rem,4.5vw,3rem)] font-extrabold tracking-tight">
            Our Results Are <span className="text-blue-400">Proven in Numbers</span>
          </h2>
          <p className="mt-3 text-white/80 text-[clamp(1rem,2.2vw,1.125rem)]">
            Nobody does more to provide you with what you need to maximise your trading potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {stats.map((s, i) => (
            <StatCard key={i} stat={s} delay={0.05 * i} />
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md">
            <div className="text-slate-300">Tight Spreads</div>
            <div className="text-white/90 text-sm">Trade with spreads as low as 0.8 pips.</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md">
            <div className="text-slate-300">No hidden costs.</div>
            <div className="text-white/90 text-sm">Pay no swap fees and zero commission.</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md">
            <div className="text-slate-300">Superior Execution.</div>
            <div className="text-white/90 text-sm">Enjoy fair prices with no requotes or rejections.</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md">
            <div className="text-slate-300">Instant Withdrawals</div>
            <div className="text-white/90 text-sm">Get your funds easily and pay no fees.</div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center">
          <a
            href="#"
            className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3 text-base font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500 hover:shadow-blue-600/40"
            aria-label="Start Trading Today"
          >
            Start Trading Today
            <span className="transition-transform group-hover:translate-x-0.5">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
