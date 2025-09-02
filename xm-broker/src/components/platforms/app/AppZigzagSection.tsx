"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type AppZigzagSectionProps = {
  title: string;
  subtitle?: string;
  points?: string[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
};

export default function AppZigzagSection({
  title,
  subtitle,
  points,
  imageSrc,
  imageAlt,
  reverse = false,
}: AppZigzagSectionProps) {
  return (
    <section className="relative py-12 sm:py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`grid items-center gap-8 sm:gap-12 md:grid-cols-2 ${
            reverse ? "md:[&>div:first-child]:order-2" : ""
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative rounded-3xl border border-slate-200 shadow-sm overflow-hidden bg-slate-50">
              <div className="relative aspect-[16/10] sm:aspect-[16/9]">
                <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.07 }}
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-3 text-slate-600 text-[15px] sm:text-[17px]">{subtitle}</p>
            )}
            {!!points?.length && (
              <ul className="mt-5 space-y-2.5 text-slate-700">
                {points.map((p, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
