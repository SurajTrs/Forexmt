"use client";
import Image from "next/image";

type Mt5ShowcaseProps = {
  active: "app" | "ios" | "android" | "webtrader";
};

export default function Mt5Showcase({ active }: Mt5ShowcaseProps) {
  const imageMap: Record<Mt5ShowcaseProps["active"], string> = {
    app: "/mt5/desktop.png",
    ios: "/mt5/ios-desktop.png",
    android: "/mt5/android-desktop.png",
    webtrader: "/mt5/webtrader-desktop.png",
  };
  const mainSrc = imageMap[active] || imageMap.app;
  return (
    <section id="get-mt5" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="relative rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="relative aspect-[16/9] bg-slate-50">
              <Image src={mainSrc} alt="MT5 desktop" fill className="object-cover" />
            </div>
            <div className="absolute -left-6 bottom-6 hidden sm:block">
              <div className="relative h-40 w-24 rounded-2xl border border-slate-200 shadow bg-white overflow-hidden">
                <Image src="/mt5/phone.png" alt="MT5 phone" fill className="object-cover" />
              </div>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex items-center justify-center gap-4 rounded-2xl border border-slate-200 bg-white p-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/mt5/flexibly.png" alt="Trade flexibly" className="h-12 w-12 object-contain" />
              <span className="text-[15px] sm:text-base font-semibold text-slate-700">Trade flexibly</span>
            </div>
            <div className="flex items-center justify-center gap-4 rounded-2xl border border-slate-200 bg-white p-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/mt5/tools.png" alt="Get advanced tools" className="h-12 w-12 object-contain" />
              <span className="text-[15px] sm:text-base font-semibold text-slate-700">Get advanced tools</span>
            </div>
            <div className="flex items-center justify-center gap-4 rounded-2xl border border-slate-200 bg-white p-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/mt5/charting.png" alt="Powerful charting" className="h-12 w-12 object-contain" />
              <span className="text-[15px] sm:text-base font-semibold text-slate-700">Powerful charting</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
