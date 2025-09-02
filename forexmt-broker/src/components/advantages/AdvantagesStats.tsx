"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function useIsInView<T extends HTMLElement>(ref: React.RefObject<T | null>, options?: IntersectionObserverInit) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { root: null, rootMargin: "-20% 0px", threshold: 0.1, ...(options || {}) }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, options]);
  return inView;
}

function CountUp({
  from = 0,
  to,
  duration = 1500,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
}: {
  from?: number;
  to: number;
  duration?: number; // ms
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}) {
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const inView = useIsInView(spanRef);
  const [value, setValue] = useState(from);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!inView || startedRef.current) return;
    startedRef.current = true;

    let raf = 0;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(1, elapsed / duration);
      const current = from + (to - from) * progress;
      setValue(current);
      if (progress < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [inView, from, to, duration]);

  const formatted = `${prefix}${value.toFixed(decimals)}${suffix}`;
  return (
    <span ref={spanRef} className={className} aria-label={`${prefix}${to}${suffix}`}>
      {formatted}
    </span>
  );
}

export default function AdvantagesStats() {
  return (
    <section className="relative -mt-10 sm:-mt-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 14, scale: 0.99 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-white shadow-2xl ring-1 ring-black/5"
        >
          <dl className="grid grid-cols-1 divide-y divide-slate-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.45 }}
              className="p-8 sm:p-10 text-center"
            >
              <dt className="text-5xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
                <CountUp to={15} suffix="+" className="text-slate-900" />
              </dt>
              <dd className="mt-2 text-base font-semibold text-slate-900">Million</dd>
              <p className="mt-1 text-sm text-slate-500">traders trust ForexMT</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.45, delay: 0.06 }}
              className="p-8 sm:p-10 text-center"
            >
              <dt className="text-5xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
                <CountUp to={4} prefix="$" suffix="+" className="text-slate-900" />
              </dt>
              <dd className="mt-2 text-base font-semibold text-slate-900">Billion</dd>
              <p className="mt-1 text-sm text-slate-500">paid to traders in bonuses</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="p-8 sm:p-10 text-center"
            >
              <dt className="text-5xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
                <CountUp to={10.3} decimals={1} suffix="+" className="text-slate-900" />
              </dt>
              <dd className="mt-2 text-base font-semibold text-slate-900">Billion</dd>
              <p className="mt-1 text-sm text-slate-500">trades executed</p>
            </motion.div>
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
