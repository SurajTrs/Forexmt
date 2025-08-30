"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TradersIntro() {
  return (
    <section className="relative py-12 sm:py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-[clamp(2rem,5vw,3.25rem)] font-semibold tracking-tight text-gray-900">
            Empowering Every Trader to Succeed
          </h2>
          <p className="mt-3 text-gray-600 text-[clamp(1rem,2.5vw,1.25rem)] max-w-2xl mx-auto">
            We provide the tools and support to help you thrive in the markets, no matter your experience level.
          </p>
        </motion.div>

        {/* Two cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Left: New to Trading? */}
          <motion.div
            className="relative overflow-hidden rounded-2xl bg-white p-6 sm:p-8 shadow-lg ring-1 ring-gray-200/50"
            whileHover={{ y: -4, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -left-28 w-[420px] h-[420px] rounded-full bg-blue-200/10 blur-3xl opacity-50"
            />
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_280px] items-center gap-6 relative z-10">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 tracking-tight">
                  New to Trading?
                </h3>
                <p className="mt-3 text-gray-600 text-sm sm:text-base max-w-md">
                  Start with confidence using our demo account and exclusive promotions. Learn from over 70 expert educators and access free, comprehensive resources.
                </p>
                <Link
                  href="#"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-600 px-5 py-2.5 font-medium hover:bg-blue-100 hover:text-blue-700 transition"
                >
                  Start Trading <span className="ml-1">↗</span>
                </Link>
              </div>
              <motion.div
                className="relative h-44 sm:h-56"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Image
                  src="/mobile.png"
                  alt="Forexmt Mobile App"
                  fill
                  className="object-cover rounded-xl shadow-md"
                  sizes="(max-width: 640px) 100vw, 280px"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Experienced Trader? */}
          <motion.div
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900 to-indigo-900 p-6 sm:p-8 text-white shadow-lg"
            whileHover={{ y: -4, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -right-28 w-[420px] h-[420px] rounded-full bg-blue-400/15 blur-3xl opacity-60"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_280px] items-center gap-6 relative z-10">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
                  Experienced Trader?
                </h3>
                <p className="mt-3 text-white/90 text-sm sm:text-base max-w-md">
                  Unlock a premium trading experience with advanced tools, exclusive benefits, and a wide range of sophisticated trading options.
                </p>
                <Link
                  href="#"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-white text-blue-900 px-5 py-2.5 font-medium hover:bg-gray-100 hover:shadow-md transition"
                >
                  Explore Benefits <span className="ml-1">↗</span>
                </Link>
              </div>
              <motion.div
                className="relative h-44 sm:h-56"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Image
                  src="/Bonus.png"
                  alt="Promotions and Rewards"
                  fill
                  className="object-cover rounded-xl shadow-md"
                  sizes="(max-width: 640px) 100vw, 280px"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}