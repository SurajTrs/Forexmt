"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, useMotionValue, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const constraintsRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glow1X = useTransform(mouseX, (v) => v * 14);
  const glow1Y = useTransform(mouseY, (v) => v * 10);
  const glow2X = useTransform(mouseX, (v) => v * -16);
  const glow2Y = useTransform(mouseY, (v) => v * -12);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { when: "beforeChildren" as const, staggerChildren: 0.12 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 120, damping: 18 } },
  };

  // Quick stats cards animate in from the right
  const statsItem: Variants = {
    hidden: { opacity: 0, x: 30 },
    show: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 120, damping: 18 } },
  };

  const assets = [
    { label: "EURUSD", sub: "Euro vs US Dollar", flag: "🇪🇺" },
    { label: "US500", sub: "S&P 500 (US500)", flag: "🇺🇸" },
    { label: "GOLD", sub: "Gold", flag: "🥇" },
    { label: "COFFEE", sub: "US Coffee", flag: "☕" },
    { label: "Apple", sub: "Apple (AAPL.OQ)", flag: "🍎" },
  ];

  const logos = [
    { src: "/vercel.svg", alt: "Vercel" },
    { src: "/next.svg", alt: "Next.js" },
    { src: "/globe.svg", alt: "Global" },
    { src: "/window.svg", alt: "Platform" },
    { src: "/file.svg", alt: "Docs" },
  ];

  return (
    <motion.header
      className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Glow Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-32 -left-28 h-80 w-80 md:h-[28rem] md:w-[28rem] rounded-full 
          bg-gradient-to-br from-cyan-400/20 via-sky-500/10 to-transparent blur-[120px]"
          animate={prefersReducedMotion ? undefined : { opacity: [0.6, 0.9, 0.7] }}
          style={prefersReducedMotion ? undefined : { x: glow1X, y: glow1Y }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-32 -right-24 h-80 w-80 md:h-[28rem] md:w-[28rem] rounded-full 
          bg-gradient-to-tr from-violet-500/25 via-fuchsia-500/10 to-transparent blur-[140px]"
          animate={prefersReducedMotion ? undefined : { opacity: [0.7, 0.85, 0.65] }}
          style={prefersReducedMotion ? undefined : { x: glow2X, y: glow2Y }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Main Content */}
      <div
        className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-24 sm:pt-32 pb-20 text-center"
        onMouseMove={(e) => {
          if (prefersReducedMotion) return;
          const rect = e.currentTarget.getBoundingClientRect();
          const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
          const dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
          mouseX.set(Math.max(-1, Math.min(1, dx)));
          mouseY.set(Math.max(-1, Math.min(1, dy)));
        }}
        onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      >
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-10">
          <motion.p
            variants={item}
            className="inline-block bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-cyan-300 
            font-semibold text-xs uppercase tracking-wider mb-3 px-5 py-1.5 rounded-full border border-cyan-400/30"
          >
            Trusted by 15M+ Traders Worldwide
          </motion.p>

          <motion.h1
            variants={item}
            className="text-[clamp(2.8rem,6.5vw,5.3rem)] font-extrabold tracking-tight leading-[1.15] 
            bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent"
          >
            The Most Awarded Broker
            <br />
            <span className="text-white drop-shadow-sm">for a Reason</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-white/80 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed"
          >
            Trade smarter with cutting-edge platforms, tighter spreads, and global market access.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center mt-8"
          >
            <Link
              href="#"
              className="relative inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold
              rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg shadow-blue-600/40
              hover:scale-105 hover:shadow-xl transition-all duration-200"
            >
              Get 100% Bonus up to $100
            </Link>
            <Link
              href="#"
              className="inline-flex items-center px-7 py-3.5 rounded-full border border-white/20
              bg-white/5 backdrop-blur-md text-white/90 hover:bg-white/10 transition-all"
            >
              Open Demo Account
            </Link>
          </motion.div>

          {/* Quick Stats */}
          <motion.div variants={container} initial="hidden" animate="show" className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-3xl mx-auto">
            {[
              { title: "1,400+", sub: "Instruments" },
              { title: "0.6 pips", sub: "Avg. EURUSD Spread" },
              { title: "1:500", sub: "Leverage" },
              { title: "Tier-1", sub: "Regulation" },
            ].map((stat, i) => (
              <motion.div key={i} variants={statsItem} className="rounded-xl border border-slate-700/40 bg-slate-900/40 px-5 py-5 backdrop-blur-sm">
                <div className="text-cyan-400 font-bold text-2xl">{stat.title}</div>
                <div className="text-slate-400 text-sm mt-1">{stat.sub}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Assets Chips */}
          <motion.div variants={item} className="mt-12">
            <div className="flex justify-center gap-4 px-2 flex-wrap">
              {assets.map((a, index) => (
                <motion.div
                  key={a.label}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="flex-shrink-0 min-w-[180px] bg-slate-800/40 backdrop-blur-sm border border-slate-700/40 
                  rounded-xl px-4 py-3 cursor-pointer hover:border-cyan-400/50 transition-colors"
                >
                  <div className="font-semibold text-lg flex items-center gap-2">
                    <span className="text-xl">{a.flag}</span> {a.label}
                  </div>
                  <div className="text-sm text-slate-400">{a.sub}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Awards Marquee */}
          <motion.div variants={item} className="mt-16 relative">
            <div className="overflow-hidden px-3 [mask-image:linear-gradient(to_right,transparent,black_2%,black_98%,transparent)]">
              <div className="flex w-max gap-12 animate-[marqueeRtl_22s_linear_infinite]">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex gap-12">
                    {logos.map((logo, idx) => (
                      <div key={idx} className="flex flex-col items-center opacity-70 hover:opacity-100 transition">
                        <Image src={logo.src} alt={logo.alt} width={56} height={56} className="invert opacity-80" />
                        <span className="mt-2 text-[11px] sm:text-xs text-white text-center">By {logo.alt}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <style jsx>{`
              @keyframes marqueeRtl {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
            `}</style>
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  );
}
