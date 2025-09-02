"use client";

import Image from "next/image";

export default function ApkHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-20 sm:pt-24 pb-10">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Left: Glassy content card */}
          <div>
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md px-6 sm:px-8 py-8 sm:py-10 shadow-2xl">
              <span className="text-emerald-300 font-semibold uppercase tracking-widest">Android APK</span>
              <h1 className="mt-2 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
                Manually Download the ForexMT App
              </h1>
              <p className="mt-4 text-gray-300 text-base sm:text-lg max-w-xl">
                Download the ForexMT App on your mobile phone through an APK file.
              </p>

              <div className="mt-6 grid grid-cols-[auto,1fr] items-center gap-4">
                {/* QR placeholder */}
                <div className="h-24 w-24 rounded-xl bg-white/10 ring-1 ring-white/15 flex items-center justify-center text-white/70 text-xs select-none">
                  QR
                </div>
                <div className="text-gray-300">
                  <div className="font-semibold text-white">Scan to download our Android App</div>
                  <div className="text-sm">Point your camera to scan and download.</div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="#download-apk"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-6 sm:px-7 py-3 text-[15px] sm:text-base font-semibold text-slate-900 shadow-sm ring-1 ring-white/10 transition hover:bg-white/90"
                >
                  Download APK
                </a>
              </div>

              <p className="mt-3 text-gray-400 text-sm sm:text-[15px]">
                Open a ForexMT account from the app within minutes.
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="relative mx-auto w-[260px] sm:w-[320px] md:w-[360px] aspect-[9/19] rounded-3xl ring-1 ring-white/10 shadow-2xl overflow-hidden">
              <Image src="/mobile.png" alt="ForexMT App APK preview" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white/10" />
    </section>
  );
}
