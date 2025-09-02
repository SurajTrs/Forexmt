"use client";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Flexible Leverage up to 1000:1",
    tone: "from-slate-900 to-slate-800",
    accent: "text-cyan-300",
    theme: "dark",
    icon: "/globe.svg",
    illustration: "/Bonus.png",
    body: "Scale position sizes with flexible leverage options tailored to your strategy.",
  },
  {
    title: "Real-Time Margin Monitoring",
    tone: "from-sky-600 to-blue-600",
    accent: "text-white",
    theme: "dark",
    icon: "/file.svg",
    illustration: "/Bonus.png",
    body: "Track margin levels and risk in real time to stay in control of your exposure.",
  },
  {
    title: "Negative Balance Protection",
    tone: "from-white to-slate-50",
    accent: "text-slate-900",
    theme: "light",
    icon: "/file.svg",
    illustration: "/Bonus.png",
    body: "Protect your account with built-in safeguards that cap downside risk.",
  },
  {
    title: "Stable Leverage with No Changes on Weekends",
    tone: "from-slate-800 to-slate-900",
    accent: "text-slate-100",
    theme: "dark",
    icon: "/globe.svg",
    illustration: "/Bonus.png",
    body: "Consistency you can rely on: no weekend leverage adjustments.",
  },
];

export default function TradeGrid() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
          {cards.map((c, idx) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${c.tone} p-7 sm:p-9 shadow-xl ring-1 ${
                c.theme === "light" ? "ring-slate-200/70" : "ring-white/10"
              } min-h-[380px] sm:min-h-[460px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_30px_-18px_rgba(0,0,0,0.35)]`}
            >
              <div className="absolute inset-0 pointer-events-none opacity-35 bg-[radial-gradient(560px_200px_at_85%_0%,rgba(255,255,255,0.14),transparent)]" />
              <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/5 blur-2xl" />
              <div className={`absolute inset-px rounded-[calc(1.5rem-1px)] ${
                c.theme === "light" ? "ring-1 ring-white/70" : "ring-1 ring-white/10"
              } pointer-events-none`} />

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <div className="relative z-10 mb-6 inline-flex items-center gap-3">
                <span className={`inline-flex h-11 w-11 items-center justify-center rounded-lg ring-1 ${
                  c.theme === "light" ? "bg-white ring-slate-200" : "bg-white/10 ring-white/10"
                } shadow-sm`}>
                  <img src={c.icon} alt="" className={`h-5 w-5 ${c.theme === "light" ? "opacity-80" : "invert brightness-200 opacity-90"}`} />
                </span>
                <h3 className={`text-xl sm:text-2xl font-semibold tracking-tight ${c.accent}`}>
                  {c.title}
                </h3>
              </div>
              <h3 className="sr-only">{c.title}</h3>
              <p
                className={`relative z-10 mt-2 text-sm sm:text-base ${
                  c.theme === "light" ? "text-slate-600" : "text-slate-200/85"
                }`}
              >
                {c.body}
              </p>
              <div className={`absolute bottom-6 right-6 h-24 w-24 rounded-full ${
                c.theme === "light" ? "bg-slate-900/5" : "bg-white/10"
              } blur-2xl group-hover:scale-110 transition-transform`} />

              {/* Decorative illustration */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.illustration}
                alt=""
                aria-hidden="true"
                className={`pointer-events-none select-none absolute -bottom-8 -right-6 h-[260px] w-[260px] sm:h-[320px] sm:w-[320px] object-contain opacity-65 drop-shadow-lg transition-transform duration-300 group-hover:scale-[1.01] ${
                  c.theme === "light" ? "" : "brightness-105"
                }`}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/0 via-black/0 to-black/0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
