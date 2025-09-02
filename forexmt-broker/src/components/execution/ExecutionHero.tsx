"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ExecutionHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 bg-gradient-to-b from-sky-50 via-white to-sky-50">
      {/* decorative radials */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-24 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-800 ring-1 ring-sky-200"
        >
          Execution Policy
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-3 text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900"
        >
          Ultra‑Fast Trade Execution
          <br className="hidden sm:block" />
          At Best Available Market Price
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mx-auto mt-4 max-w-2xl text-slate-600 text-sm sm:text-base"
        >
          Execute orders with low latency and best available pricing across major instruments with institutional-grade infrastructure.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <Link
            href="/register"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg ring-1 ring-black/10 transition-transform hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
          >
            Open an Account
          </Link>
          <Link
            href="#learn-more"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-300 hover:bg-slate-50 transition"
          >
            Learn more
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
