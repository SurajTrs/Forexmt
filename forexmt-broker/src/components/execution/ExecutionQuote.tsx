"use client";
import { motion } from "framer-motion";

export default function ExecutionQuote() {
  return (
    <section className="py-16 bg-gradient-to-b from-sky-50 to-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14, scale: 0.99 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-white ring-1 ring-slate-200 p-8 sm:p-12 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:ring-slate-300"
        >
          <div className="mx-auto w-16 h-16 rounded-full bg-slate-50 ring-1 ring-slate-200 flex items-center justify-center text-slate-500 text-2xl sm:text-6xl">“</div>
          <blockquote className="mt-5 text-slate-700 text-lg sm:text-xl font-medium">
            Execution speed affects the outcome of a trade which is why we treat it with the same importance as our spreads and prices.
          </blockquote>
          <div className="mt-6 text-sm font-semibold text-slate-900">Constantinos Cleanthous</div>
          <div className="text-sm text-slate-500">Co-Founder of ForexMT Group</div>
        </motion.div>
      </div>
    </section>
  );
}
