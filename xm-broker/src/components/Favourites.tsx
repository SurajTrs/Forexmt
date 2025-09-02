"use client";

import Image from "next/image";
import { motion, useMotionValue } from "framer-motion";
import React, { useState } from "react";

export default function Favourites() {
  // 3D tilt values for phone (left card)
  const phoneTiltX = useMotionValue(0);
  const phoneTiltY = useMotionValue(0);
  // 3D tilt values for gift (right card)
  const giftTiltX = useMotionValue(0);
  const giftTiltY = useMotionValue(0);
  // Hover states
  const [phoneHover, setPhoneHover] = useState(false);
  const [giftHover, setGiftHover] = useState(false);

  const handleTilt = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    setX: (v: number) => void,
    setY: (v: number) => void,
    maxTilt = 10
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2); // -1..1
    const dy = (e.clientY - cy) / (rect.height / 2); // -1..1
    setX(Math.max(-1, Math.min(1, dx)) * maxTilt); // rotateY
    setY(Math.max(-1, Math.min(1, -dy)) * maxTilt); // rotateX (invert)
  };
  const resetTilt = (setX: (v: number) => void, setY: (v: number) => void) => {
    setX(0);
    setY(0);
  };

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      {/* Heading */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-[clamp(2.25rem,5vw,3rem)] font-bold tracking-tight text-gray-900">
          Discover Our Traders <span className="text-blue-600">Top Picks</span>
        </h2>
        <p className="mt-4 text-gray-600 text-[clamp(1rem,2.5vw,1.25rem)] max-w-2xl mx-auto">
          Explore the standout products that make trading with us exceptional, trusted by our community.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Left: Forexmt App big card */}
        <motion.div
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 sm:p-8 min-h-[440px] shadow-2xl"
          style={{ perspective: 1200 }}
          onMouseEnter={() => setPhoneHover(true)}
          onMouseMove={(e) => handleTilt(e, (v) => phoneTiltX.set(v), (v) => phoneTiltY.set(v), 12)}
          onMouseLeave={() => {
            setPhoneHover(false);
            resetTilt((v) => phoneTiltX.set(v), (v) => phoneTiltY.set(v));
          }}
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* Subtle background gradient */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-gradient-to-br from-blue-600/20 to-transparent blur-3xl opacity-60"
          />
          {/* Soft glow behind phone */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -bottom-48 w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-blue-500/15 to-transparent blur-3xl opacity-50"
          />

          <motion.div
            className="pointer-events-none absolute -right-10 -bottom-40 sm:-right-8 sm:-bottom-44 w-[460px] h-[560px] sm:w-[620px] sm:h-[720px] transform-gpu will-change-transform"
            style={{ rotateY: phoneTiltX, rotateX: phoneTiltY }}
            animate={{ scale: phoneHover ? 1.1 : 1 }}
            transition={{ type: "spring", stiffness: 280, damping: 18 }}
          >
            <Image
              src="/mobile1.png"
              alt="Forexmt App preview"
              fill
              priority
              sizes="(max-width: 640px) 460px, 620px"
              className="object-contain drop-shadow-[0_12px_32px_rgba(0,0,0,0.5)]"
            />
          </motion.div>

          <div className="relative z-10 flex flex-col h-full">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Forexmt Trading App</h3>
              <p className="mt-3 text-gray-200 max-w-md text-sm sm:text-base">
                Access Forexmt full suite of trading tools with our award-winning mobile app, designed for seamless performance.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
                <Image src="/globe.svg" alt="App Store" width={18} height={18} className="invert" />
                <span className="text-sm font-medium">App Store</span>
                <span className="text-amber-400" aria-label="5 stars" title="5 stars">★★★★★</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
                <Image src="/globe.svg" alt="Google Play" width={18} height={18} className="invert" />
                <span className="text-sm font-medium">Google Play</span>
                <span className="text-amber-400" aria-label="5 stars" title="5 stars">★★★★★</span>
              </div>
            </div>

            <div className="mt-auto pt-8">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 text-white px-5 py-2.5 font-medium shadow hover:bg-blue-700 hover:shadow-lg transition"
              >
                Download Now <span className="ml-1">→</span>
              </a>
            </div>
          </div>

          <div aria-hidden className="hidden sm:block pt-32" />
        </motion.div>

        {/* Right: 100% Bonus card */}
        <motion.div
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900 to-indigo-900 text-white p-6 sm:p-8 min-h-[440px] shadow-2xl"
          style={{ perspective: 1200 }}
          onMouseEnter={() => setGiftHover(true)}
          onMouseMove={(e) => handleTilt(e, (v) => giftTiltX.set(v), (v) => giftTiltY.set(v), 12)}
          onMouseLeave={() => {
            setGiftHover(false);
            resetTilt((v) => giftTiltX.set(v), (v) => giftTiltY.set(v));
          }}
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <motion.div
            className="pointer-events-none absolute right-0 bottom-0 w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] transform-gpu will-change-transform"
            style={{ rotateY: giftTiltX, rotateX: giftTiltY }}
            animate={{ scale: giftHover ? 1.12 : 1 }}
            transition={{ type: "spring", stiffness: 280, damping: 18 }}
          >
            <Image
              src="/Bonus.png"
              alt="Bonus gift"
              fill
              sizes="(max-width: 640px) 340px, 440px"
              className="object-contain drop-shadow-[0_10px_28px_rgba(0,0,0,0.4)]"
            />
          </motion.div>

          <div className="relative z-10 flex flex-col h-full">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">100% Deposit Bonus</h3>
              <p className="mt-3 text-blue-100 text-sm sm:text-base max-w-md">
                Amplify your trading power with a 100% bonus up to $100, designed to enhance your strategy and returns.
              </p>
            </div>

            <div className="mt-auto pt-8">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-white text-blue-900 px-5 py-2.5 font-medium shadow hover:bg-gray-100 hover:shadow-lg transition"
              >
                Claim Bonus <span className="ml-1">↗</span>
              </a>
            </div>
          </div>

          <div aria-hidden className="hidden sm:block pt-12" />
        </motion.div>

        {/* Bottom left: Forexmt Competitions */}
        <motion.div
          className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-600 to-cyan-700 text-white p-7 sm:p-9 min-h-[320px] shadow-lg"
          whileHover={{ y: -4, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -left-28 w-[420px] h-[420px] rounded-full bg-teal-300/20 blur-3xl opacity-70"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-28 -right-32 w-[460px] h-[460px] rounded-full bg-cyan-200/15 blur-3xl opacity-60"
          />

          <div className="relative z-10 max-w-lg">
            <h4 className="text-xl sm:text-2xl font-semibold tracking-tight">Forexmt Trading Competitions</h4>
            <p className="mt-3 text-white/90 text-sm sm:text-base">
              Compete for a share of over $100,000 in cash prizes. Trade strategically and rise to the top.
            </p>
          </div>

          <div className="relative z-10 mt-6">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-white text-teal-900 px-5 py-2.5 font-medium shadow hover:bg-gray-100 hover:shadow-lg transition"
            >
              Join Competition <span className="ml-1">↗</span>
            </a>
          </div>

          <motion.div
            className="pointer-events-none absolute right-0 bottom-0 w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] transform-gpu"
            animate={{ scale: phoneHover ? 1.05 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Image
              src="/Bonus.png"
              alt="Competition Trophy"
              fill
              sizes="(max-width: 640px) 300px, 340px"
              className="object-contain drop-shadow-[0_12px_32px_rgba(0,0,0,0.45)]"
            />
          </motion.div>
        </motion.div>

        {/* Bottom right: Forexmt Copy Trading */}
        <motion.div
          className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 p-7 sm:p-9 min-h-[320px] shadow-lg"
          whileHover={{ y: -4, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15)" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="pointer-events-none absolute right-20 top-4 opacity-70">
            <Image src="/file.svg" alt="icon" width={26} height={26} className="text-gray-400" />
          </div>
          <div className="pointer-events-none absolute right-10 top-14 opacity-70 rotate-12">
            <Image src="/window.svg" alt="icon" width={28} height={28} className="text-gray-400" />
          </div>
          <div className="pointer-events-none absolute right-20 top-20 opacity-50 -rotate-6">
            <Image src="/globe.svg" alt="icon" width={22} height={22} className="text-gray-400" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <h4 className="text-xl sm:text-2xl font-semibold text-gray-900 tracking-tight">Forexmt Copy Trading</h4>
            <p className="mt-3 text-gray-600 text-sm sm:text-base">
              Follow top traders or share your strategies to earn commissions, trusted by over 100,000 traders.
            </p>
          </div>

          <div className="relative z-10 mt-6">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-600 px-5 py-2.5 font-medium hover:bg-blue-100 hover:text-blue-700 transition"
            >
              Start Copy Trading <span className="ml-1">↗</span>
            </a>
          </div>

          <motion.div
            className="pointer-events-none absolute -bottom-6 right-4 sm:right-6 w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] transform-gpu"
            animate={{ scale: phoneHover ? 1.05 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-400 opacity-90" />
            <div className="absolute inset-2 rounded-full overflow-hidden ring-2 ring-white/80">
              <Image src="/hero-bg.jpg" alt="Trader" fill className="object-cover grayscale contrast-125" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}