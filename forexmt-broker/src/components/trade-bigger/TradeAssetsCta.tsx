"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TradeAssetsCta() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.99 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-slate-100/70 p-8 sm:p-10 ring-1 ring-slate-200 shadow-sm text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Trade Over 1,400 Assets
          </h2>
          <p className="mt-3 max-w-3xl mx-auto text-slate-600 text-sm sm:text-base">
            Build your portfolio with Forex, CFDs and derivatives on Stocks, Precious Metals, Energies, Equity Indices, Thematic indices and many more.
          </p>
          <div className="mt-6">
            <Link
              href="/register"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg ring-1 ring-black/10 transition-transform hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
            >
              Open an Account
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
