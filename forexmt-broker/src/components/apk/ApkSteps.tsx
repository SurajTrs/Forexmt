"use client";

import Image from "next/image";

const steps = [
  { title: "Step 1", text: "Download the APK file on your mobile device." },
  { title: "Step 2", text: "Tap on the downloaded file to open it." },
  { title: "Step 3", text: "Wait for the system message to appear." },
  { title: "Step 4", text: "Go to ‘Settings’ and tap on ‘Allow from this Source’ to enable it." },
  { title: "Step 5", text: "Go back to complete the app installation." },
];

export default function ApkSteps() {
  return (
    <section className="relative py-14 sm:py-18 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-12 md:grid-cols-2">
          {/* Left: Stepper */}
          <div>
            <div className="max-w-xl">
              <span className="text-emerald-700 font-semibold uppercase tracking-widest">Installation</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                APK Installation Steps
              </h2>
              <p className="mt-3 text-slate-600">
                Follow these steps to install the ForexMT app via APK. You may need to allow installations from unknown sources on your device.
              </p>
            </div>

            <ol className="mt-8 relative">
              {/* vertical line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-200" />
              {steps.map((s, i) => (
                <li key={i} className="relative pl-14 pr-2 py-4">
                  {/* marker */}
                  <div className="absolute left-0 top-3 h-8 w-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-semibold shadow-sm">
                    {i + 1}
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="font-semibold text-slate-900">{s.title}</div>
                    <p className="mt-1 text-slate-700 leading-relaxed">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-6 text-sm text-slate-500">
              Note: Exact wording of system messages may vary by device and Android version.
            </div>
          </div>

          {/* Right: Image card */}
          <div className="relative">
            <div className="relative mx-auto w-[260px] sm:w-[340px] md:w-[380px] aspect-[9/19] overflow-hidden">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-slate-100 to-slate-50" />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-slate-200 shadow-xl" />
              <Image src="/mobile.png" alt="APK steps preview" fill className="object-cover rounded-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
