"use client";
import Image from "next/image";
import { motion } from "framer-motion";

type Card = {
  title: string;
  desc: string;
  span: string; 
  variant: "light" | "blue" | "green";
  img?: string;
  imgClassName?: string;
  height?: string;
};

const cards: Card[] = [
  {
    title: "Year-Round Bonuses",
    desc:
      "Use XM bonuses to increase your capital, open larger trades, and seize more opportunities.",
    span: "lg:col-span-4",
    variant: "light",
    img: "/Bonus.png",
    imgClassName: "absolute bottom-2 right-2 w-28 h-auto opacity-90",
    height: "min-h-[220px] sm:min-h-[240px] md:min-h-[260px]",
  },
  {
    title: "Ultra-Fast Execution",
    desc:
      "Get better prices and better results with guaranteed fast execution on every trade.",
    span: "lg:col-span-8",
    variant: "blue",
    img: "/mobile.png",
    imgClassName: "absolute right-0 bottom-0 w-56 h-auto drop-shadow-xl",
    height: "min-h-[280px] sm:min-h-[320px] md:min-h-[360px]",
  },
  {
    title: "No Rejections or Requotes",
    desc:
      "Take advantage of every opportunity at the price you want with our strict no rejections or requotes policy.",
    span: "lg:col-span-6",
    variant: "green",
    height: "min-h-[240px] sm:min-h-[260px] md:min-h-[300px]",
  },
  {
    title: "Stable Max Leverage",
    desc:
      "Trade with leverage of up to 1000:1, even during high-volatility events and major market news",
    span: "lg:col-span-6",
    variant: "blue",
    height: "min-h-[240px] sm:min-h-[260px] md:min-h-[300px]",
  },
  {
    title: "No Hidden Fees",
    desc:
      "You’re guaranteed full transparency and no hidden fees at every step of your trading journey.",
    span: "lg:col-span-6",
    variant: "light",
  },
  {
    title: "Instant Withdrawals",
    desc: "Rely on our secure and instant withdrawals, 24/7, without any fees.",
    span: "lg:col-span-6",
    variant: "light",
  },
];

function cardClasses(variant: Card["variant"]) {
  switch (variant) {
    case "blue":
      return "relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-600 to-slate-900 text-white shadow-xl";
    case "green":
      return "relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-600 to-slate-900 text-white shadow-xl";
    default:
      return "relative overflow-hidden rounded-2xl bg-sky-50 ring-1 ring-slate-200 shadow-sm";
  }
}

export default function AdvantagesGrid() {
  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            Discover The XM Advantage
          </h2>
          <p className="mt-3 text-slate-600">
            You’re only as good as your broker, and XM is as good as it gets.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-12">
          {cards.map(({ title, desc, span, variant, img, imgClassName, height }, idx) => (
            <motion.div
              key={title}
              className={`${span}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10% 0px" }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
            >
              <motion.div
                className={`${cardClasses(variant)} ${height ?? ""}`}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <div className="p-6 sm:p-8">
                  <h3
                    className={
                      variant === "light"
                        ? "text-lg font-semibold text-slate-900"
                        : "text-lg font-semibold text-white"
                    }
                  >
                    {title}
                  </h3>
                  <p
                    className={
                      variant === "light"
                        ? "mt-2 text-sm text-slate-600 max-w-prose"
                        : "mt-2 text-sm text-slate-200/90 max-w-prose"
                    }
                  >
                    {desc}
                  </p>
                </div>
                {img ? (
                  <div className="pointer-events-none">
                    <Image src={img} alt="" width={400} height={240} className={imgClassName} />
                  </div>
                ) : null}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
