"use client";
import { motion } from "framer-motion";

export default function SafetySecurity() {
  const items = [
    {
      title: "Licensed and Regulated",
      desc:
        "Regulated by CySEC, FSC, FSA, and DFSA - your account, our global standards.",
      icon: "/file.svg",
    },
    {
      title: "Segregated Accounts",
      desc:
        "Your funds are held in segregated accounts and protected by robust financial controls.",
      icon: "/window.svg",
    },
    {
      title: "Data Security",
      desc:
        "Your information is protected by the latest generation encryption and advanced cybersecurity measures.",
      icon: "/globe.svg",
    },
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.5 }}
          className="text-center text-2xl sm:text-3xl font-semibold text-white"
        >
          Safety and Security
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="mt-3 text-center text-slate-300 max-w-3xl mx-auto"
        >
          Trade with peace of mind knowing your funds are safe and your data is protected.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="rounded-3xl bg-slate-800/60 ring-1 ring-white/10 p-8 text-center shadow-lg"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-700/60 ring-1 ring-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.icon} alt="" className="h-6 w-6 opacity-90" />
              </div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
