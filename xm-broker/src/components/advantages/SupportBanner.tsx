"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SupportBanner() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 text-white shadow-xl ring-1 ring-white/10"
        >
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <Image src="/hero-bg.jpg" alt="decor" fill className="object-cover" priority />
          </div>
          <div className="relative flex flex-col items-center justify-center gap-4 px-6 py-12 sm:px-16 text-center">
            <h3 className="text-xl sm:text-2xl font-semibold">24/7 Customer Support</h3>
            <p className="max-w-2xl text-slate-200/90 text-sm sm:text-base">
              Reach out to our award‑winning customer experience team, in your language, at any time.
            </p>
          </div>
          <div className="pointer-events-none absolute -right-6 -bottom-6 hidden sm:block">
            <Image src="/globe.svg" alt="globe" width={160} height={160} className="opacity-80" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
