"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function OpenAccountHero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-24 bg-[radial-gradient(120%_120%_at_50%_0%,#0f2749_0%,#0b213f_50%,#081a33_100%)]">
      {/* decorative accents (subtle glows) */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-300/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-24 h-72 w-72 rounded-full bg-indigo-300/10 blur-3xl" />

      <div className="relative z-20 mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-sky-400/90 font-semibold uppercase tracking-wide"
        >
          Account Types
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-3 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white"
        >
          Open Your Account
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mx-auto mt-5 max-w-2xl text-slate-300 text-base sm:text-lg"
        >
          Open an account today to access fair conditions and get everything you need to achieve your trading goals.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="mt-7 flex items-center justify-center"
        >
          <Link
            href="#account-plans"
            className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-base font-semibold text-slate-900 shadow-md ring-1 ring-black/10 transition-transform hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b213f]"
          >
            Choose Your Account Plan
          </Link>
        </motion.div>
      </div>

      {/* dotted decoration at bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 mx-auto h-40 w-full max-w-6xl opacity-30">
        <svg viewBox="0 0 1200 200" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          <defs>
            <pattern id="dotPattern" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="1200" height="200" fill="url(#dotPattern)" />
        </svg>
      </div>

      {/* side inner curves (quarter circles) */}
      <div className="pointer-events-none absolute -bottom-24 -left-16 z-10 h-96 w-96 rounded-full bg-[#0b213f] sm:h-[26rem] sm:w-[26rem] lg:h-[28rem] lg:w-[28rem] sm:-left-20 lg:-left-24" />
      <div className="pointer-events-none absolute -bottom-24 -right-16 z-10 h-96 w-96 rounded-full bg-[#0b213f] sm:h-[26rem] sm:w-[26rem] lg:h-[28rem] lg:w-[28rem] sm:-right-20 lg:-right-24" />
    </section>
  );
}
