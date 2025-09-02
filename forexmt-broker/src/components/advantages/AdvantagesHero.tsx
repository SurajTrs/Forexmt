"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AdvantagesHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white pt-28 pb-20 sm:pt-36 sm:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900"
        >
          Why is ForexMT the Broker for You?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 max-w-3xl mx-auto text-slate-600 text-base sm:text-lg"
        >
          Because your success is our mission. That’s why we created a trading environment that gives you every advantage possible.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10"
        >
          <Link
            href="#open-account"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg ring-1 ring-black/10 transition-transform hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
          >
            Open an Account
          </Link>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
