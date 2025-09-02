"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AdvantagesCta() {
  return (
    <section id="open-account" className="py-16 bg-sky-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-semibold text-slate-900"
        >
          Ready to Experience the ForexMT Difference?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="mt-3 text-slate-600"
        >
          Join the broker of choice for over 15 million traders.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mt-6"
        >
          <Link
            href="#"
            className="inline-flex items-center rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
          >
            Open an Account
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
