"use client";

import Link from "next/link";
import Image from "next/image";

export default function SupportBanner() {
  return (
    <section className="relative py-10 sm:py-14 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white shadow-2xl ring-1 ring-white/10">
          {/* background glows */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
            <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-8 px-6 sm:px-10 py-8 sm:py-12">
            <div className="text-center md:text-left">
              <h3 className="text-[clamp(1.6rem,3.5vw,2.25rem)] font-extrabold tracking-tight">
                Rely on Award Winning Support
              </h3>
              <p className="mt-3 text-white/85 text-[clamp(0.95rem,2vw,1.05rem)] max-w-2xl mx-auto md:mx-0">
                Whenever you need us we are just a few seconds away, 24/7, in extensive language options.
              </p>

              {/* badges */}
              <div className="mt-5 flex flex-wrap items-center justify-center md:justify-start gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm ring-1 ring-white/15">
                  <span className="text-emerald-400">●</span> 24/7 Live Chat
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm ring-1 ring-white/15">
                  <Image src="/globe.svg" alt="Languages" width={16} height={16} className="invert opacity-90" />
                  30+ Languages
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm ring-1 ring-white/15">
                  <Image src="/vercel.svg" alt="Fast" width={16} height={16} className="invert opacity-90" />
                  Avg. reply <span className="font-semibold">&lt; 60s</span>
                </span>
              </div>

              <div className="mt-6">
                <Link
                  href="#"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500 hover:shadow-blue-600/40"
                  aria-label="Contact Us"
                >
                  Contact Us
                  <span className="transition-transform group-hover:translate-x-0.5">↗</span>
                </Link>
              </div>
            </div>

            {/* right illustration card with real image */}
            <div className="relative hidden md:flex items-center justify-center pr-4">
              <div className="relative h-36 w-56 sm:h-40 sm:w-64 rounded-2xl overflow-hidden ring-1 ring-white/15 shadow-xl">
                <Image src="/hero-bg.jpg" alt="Forexmt Support" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/30 via-transparent to-slate-900/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
