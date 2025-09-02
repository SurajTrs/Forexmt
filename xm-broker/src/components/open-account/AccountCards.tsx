"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const accounts = [
  {
    name: "Standard",
    subtitle: "Account",
    image: "/standard.png", // place this image in /public
    description:
      "Open our popular account for spreads that hold fair transparency and fast execution.",
    minDeposit: "$5",
    ctaPrimary: { label: "Get Started", href: "#" },
    ctaSecondary: { label: "Show More", href: "#" },
  },
  {
    name: "Ultra Low",
    subtitle: "Account",
    image: "/ultra.png", // place this image in /public
    description:
      "The ideal choice for finding high-volume. Reduce your costs with low spreads and raw rates.",
    minDeposit: "$5",
    ctaPrimary: { label: "Get Started", href: "#" },
  },
  {
    name: "Shares",
    subtitle: "Account",
    image: "/shares.png", // place this image in /public
    description:
      "Looking to buy shares in companies? Open a Shares account to access and trade stocks with precise control.",
    minDeposit: "$10,000",
    ctaPrimary: { label: "Get Started", href: "#" },
  },
];

export default function AccountCards() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const details = [
    {
      markets:
        "Forex, Precious Metals, Equity Indices, Cryptocurrencies, Thematic Indices, Stocks, Turbo Stocks, Commodities, Energies",
      bonus: "Bonus Eligibility*",
      micro: "Micro Account Option",
      leverage: "1000:1",
      stopOut: "20%",
      swapFree: "Swap Free",
      commission: "Commission",
      min: "$5",
      spreads: [
        { k: "GOLD", v: "2.7" },
        { k: "USDJPY", v: "2" },
        { k: "EURUSD", v: "1.6" },
      ],
      foot: "*Some countries might be excluded",
    },
    {
      markets:
        "Forex, Precious Metals, Equity Indices, Cryptocurrencies, Thematic Indices, Stocks, Turbo Stocks, Commodities, Energies",
      bonus: "Bonus Eligibility",
      micro: "Micro Account Option",
      leverage: "1000:1",
      stopOut: "20%",
      swapFree: "Swap Free",
      commission: "Commission",
      min: "$5",
      spreads: [
        { k: "GOLD", v: "1.2" },
        { k: "USDJPY", v: "0.9" },
        { k: "EURUSD", v: "0.8" },
      ],
      foot: "",
    },
    {
      markets: "Shares",
      bonus: "Bonus Eligibility",
      micro: "Micro Account Option",
      leverage: "1:1",
      stopOut: "0%",
      swapFree: "Swap Free",
      commission: "Commission",
      min: "$10,000",
      spreads: [],
      foot: "",
    },
  ];
  return (
    <section id="account-plans" className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {accounts.map((a, idx) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className={`group relative overflow-hidden rounded-3xl bg-white ring-1 ${expanded === idx ? "ring-2 ring-sky-400/80" : "ring-slate-200"} shadow-none`}
            >
              {/* Header strip with icon */}
              <div className="bg-slate-50/80">
                <div className="px-6 sm:px-7 pt-6 pb-4 flex flex-col items-center text-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-white ring-1 ring-slate-200">
                    <img src={a.image} alt="" className="h-12 w-12 object-contain" />
                  </span>
                  <h3 className={`${idx === 0 ? "text-sky-600 underline underline-offset-[3px] decoration-2" : "text-slate-900"} mt-3 text-[20px] sm:text-[21px] font-semibold leading-tight`}>
                    {a.name}
                  </h3>
                  <p className="text-[12px] font-semibold text-slate-700 -mt-0.5">Account</p>
                </div>
                <div className="h-px w-full bg-slate-200" />
              </div>

              <div className="p-6 sm:p-7">
                {/* Description */}
                <p className="mt-1 text-[14px] sm:text-[15px] text-slate-600 min-h-[60px]">{a.description}</p>

                {/* Divider */}
                <div className="mt-5 h-px w-full bg-slate-200" />

                {/* Min deposit */}
                <div className="mt-4 text-[14px] sm:text-[15px] font-bold text-slate-900">
                  Minimum Deposit {a.minDeposit}
                </div>

                {/* CTA */}
                <div className="mt-5 space-y-3">
                  <Link
                    href={a.ctaPrimary.href}
                    className="inline-flex w-full items-center justify-center rounded-lg bg-slate-900 px-4 py-3 text-[14px] sm:text-[15px] font-semibold text-white ring-1 ring-black/5 hover:bg-slate-800"
                  >
                    {a.ctaPrimary.label}
                  </Link>
                  <div className="text-center">
                    <button
                      type="button"
                      onClick={() => setExpanded(expanded === idx ? null : idx)}
                      className="text-sky-600 font-semibold hover:underline underline-offset-2"
                    >
                      {expanded === idx ? "Show Less" : "Show More"}
                    </button>
                  </div>

                  {expanded === idx && (
                    <div className="mt-5 rounded-lg border border-slate-200 bg-white p-4 text-left">
                      <div className="space-y-3 text-[13px] sm:text-[14px] text-slate-800">
                        <div>
                          <div className="font-semibold text-slate-900">Markets</div>
                          <div className="text-slate-600">{details[idx].markets}</div>
                        </div>
                        <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                          <div className="text-slate-700">{details[idx].bonus}</div>
                          <div className="text-slate-700">{details[idx].micro}</div>
                          <div className="text-slate-700">Maximum Leverage <span className="font-semibold">{details[idx].leverage}</span></div>
                          <div className="text-slate-700">Stop Out Level <span className="font-semibold">{details[idx].stopOut}</span></div>
                          <div className="text-slate-700">Swap Free</div>
                          <div className="text-slate-700">Commission</div>
                          <div className="text-slate-700">Minimum Deposit <span className="font-semibold">{details[idx].min}</span></div>
                        </div>
                        {details[idx].spreads.length > 0 && (
                          <div>
                            <div className="font-semibold text-slate-900">Spreads As Low As</div>
                            <div className="mt-2 grid grid-cols-3 gap-3">
                              {details[idx].spreads.map((s) => (
                                <div key={s.k} className="rounded-md bg-slate-50 px-3 py-2 text-center">
                                  <div className="text-slate-500 text-xs">{s.k}</div>
                                  <div className="font-semibold text-slate-900">{s.v}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        {details[idx].foot && (
                          <div className="text-[12px] text-slate-500">{details[idx].foot}</div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
