"use client";
import { motion } from "framer-motion";

const features = [
  {
    title: "Highly Competitive Overnight Positions",
    desc:
      "Enjoy popular and amplifying rates when holding positions overnight. We keep rollover fees transparent and competitive across major instruments.",
    icon: "/globe.svg",
  },
  {
    title: "24-Hour Online Trading",
    desc:
      "Round-the-clock access enables 24/5 trading on Forex and CFDs. Execute, manage, and monitor your trades whenever markets are open, irrespective of your timezone.",
    icon: "/file.svg",
  },
];

export default function ExecutionFeatures() {
  return (
    <section className="py-16 bg-gradient-to-b from-sky-50 to-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group rounded-3xl bg-white ring-1 ring-slate-200 p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-slate-300"
            >
              <div className="flex items-start gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={f.icon} alt="" className="h-8 w-8 opacity-90" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
