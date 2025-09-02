"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ExecutionCta() {
  return (
    <section className="py-16 bg-gradient-to-b from-sky-50 to-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.99 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.5 }}
          className="inline-flex flex-col items-center gap-4"
        >
          <Link
            href="#open-account"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg ring-1 ring-black/10 transition-transform hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
          >
            Open an Account
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
