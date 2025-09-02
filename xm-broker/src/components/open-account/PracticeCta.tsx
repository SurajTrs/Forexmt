"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PracticeCta() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-semibold text-slate-900"
        >
          Want to Practice Trading for Free?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="mt-4 text-slate-600 text-base sm:text-lg"
        >
          Use your Demo Account and test your trading strategies with real-time markets in a simulated environment. Then switch to a Real Account when you are ready.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mt-6"
        >
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-7 py-3.5 text-base font-semibold text-white shadow-lg ring-1 ring-black/10 transition-transform hover:-translate-y-0.5 hover:bg-slate-800"
          >
            Get Started
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
