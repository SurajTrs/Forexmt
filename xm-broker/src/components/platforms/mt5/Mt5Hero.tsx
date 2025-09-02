"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Mt5Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-24 sm:pt-28 pb-14">
        <div className="mx-auto max-w-4xl text-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md px-6 sm:px-10 py-12 sm:py-16 shadow-2xl">
          <motion.span
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-sky-400 font-semibold uppercase tracking-widest"
          >
            Platforms
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-2 text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white"
          >
            Get XM MT5
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mx-auto mt-5 max-w-2xl text-gray-300 text-lg sm:text-xl"
          >
            Experience our powerful multi-asset trading platform with fast execution and deep functionality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <Link
              href="#get-mt5"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-7 py-3.5 text-[15px] sm:text-base font-semibold text-slate-900 shadow-sm ring-1 ring-white/10 transition-transform hover:-translate-y-0.5 hover:bg-white/90"
            >
              Start Trading with MT5
            </Link>
            <Link
              href="#devices"
              className="inline-flex items-center justify-center rounded-2xl bg-white/10 px-7 py-3.5 text-[15px] sm:text-base font-semibold text-white shadow-sm ring-1 ring-white/10 transition hover:bg-white/15"
            >
              Pick Your Device
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white/10" />
    </section>
  );
}
