"use client";

import Image from "next/image";

const instructors = [
  { name: "Alex Carter", src: "/Bonus.png" },
  { name: "Mia Patel", src: "/Bonus.png" },
  { name: "John Kim", src: "/Bonus.png" },
  { name: "Sofia Rossi", src: "/Bonus.png" },
];

export default function WebinarsSection() {
  return (
    <section className="py-10 sm:py-14 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <span className="text-sky-600 font-semibold uppercase tracking-widest">XM Webinars</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">
              Learn 7 Days a Week From Instructors
            </h2>
            <p className="mt-2 text-slate-600">
              Join structured live sessions where instructors break down strategies, risk management, and the latest market context.
            </p>
            <div className="mt-5">
              <a href="#" className="inline-flex items-center rounded-xl bg-slate-900 text-white px-5 py-2.5 text-sm font-semibold shadow-sm hover:bg-slate-800">Start Learning</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {instructors.map((p) => (
              <div
                key={p.name}
                className="group rounded-2xl ring-1 ring-slate-200 bg-gradient-to-br from-white to-slate-50 shadow-sm p-3 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="relative w-full aspect-square overflow-hidden rounded-xl bg-slate-100">
                  <Image src={p.src} alt={p.name} fill className="object-cover" />
                </div>
                <div className="mt-2 text-sm font-semibold text-slate-900">{p.name}</div>
                <div className="text-xs text-slate-500">Instructor</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
