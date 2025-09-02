"use client";
import { motion } from "framer-motion";

const highlights = [
  { title: "99.4% of Trades Executed in <1s", icon: "/globe.svg" },
  { title: "Strictly No Re-quotes", icon: "/file.svg" },
  { title: "100% Execution Risks With No Dealing Desk", icon: "/globe.svg" },
  { title: "Low Spreads and Best Execution", icon: "/file.svg" },
];

export default function ExecutionHighlights() {
  return (
    <section className="py-16 bg-gradient-to-b from-sky-50 to-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-[2rem] bg-slate-900 text-white p-6 sm:p-10 ring-1 ring-white/10 shadow-xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
            {highlights.map((h, idx) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 14, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={h.icon} alt="" className="h-8 w-8 opacity-90 invert brightness-200" />
                <p className="text-sm font-semibold text-white/90">{h.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
