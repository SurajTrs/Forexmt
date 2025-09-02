"use client";
import Link from "next/link";

const devices = [
  {
    title: "MT5 for Tablet and Mobile",
    tag: "iOS/Android",
    image: "/mt5/device-mobile.png",
    href: "#",
  },
  { title: "MT5 for PC", tag: "Windows", image: "/mt5/device-pc.png", href: "#" },
  {
    title: "MT5 WebTrader",
    tag: "Browser",
    image: "/mt5/device-web.png",
    href: "#",
  },
  { title: "MT5 for Mac", tag: "macOS", image: "/mt5/device-mac.png", href: "#" },
  {
    title: "XM MT5 Multiterminal",
    tag: "Pro",
    image: "/mt5/device-multi.png",
    href: "#",
  },
];

export default function Mt5Devices() {
  return (
    <section id="devices" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <h2 className="text-center text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
          Pick Your Device
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-slate-600">
          Get started with the MT5 platform in any way you prefer, or enjoy a consistent cross-device experience designed to fit your trading style.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {devices.map((d) => (
            <Link
              key={d.title}
              href={d.href}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-slate-50 ring-1 ring-inset ring-slate-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={d.image} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="mt-3">
                <div className="text-slate-900 font-semibold">{d.title}</div>
                <div className="text-slate-500 text-sm">{d.tag}</div>
                <div className="mt-2 text-sky-600 text-sm font-semibold group-hover:underline underline-offset-2">
                  Learn more
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
