"use client";

export default function JoinUsSection() {
  return (
    <section id="join-us" className="relative overflow-hidden bg-slate-950">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.12)_0%,rgba(15,23,42,0)_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">Join Us</h2>
            <p className="mt-4 text-slate-200 max-w-xl text-base sm:text-lg">
              Be part of a global team focused on fairness, innovation and client success. We value ideas, ownership and impact.
            </p>
            <div className="mt-7">
              <a href="#" className="inline-flex items-center rounded-2xl bg-white px-7 py-3.5 text-base font-semibold text-slate-900 shadow-sm ring-1 ring-white/10 transition hover:bg-white/90">See Open Roles</a>
            </div>
          </div>
          <div className="rounded-3xl ring-1 ring-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-md">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-200">
              <li className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
                <div className="text-xl font-bold text-white">Remote-first</div>
                <div className="text-base text-slate-300">Work from anywhere with flexible hours</div>
              </li>
              <li className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
                <div className="text-xl font-bold text-white">Growth</div>
                <div className="text-base text-slate-300">Learning budget and mentorship</div>
              </li>
              <li className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
                <div className="text-xl font-bold text-white">Impact</div>
                <div className="text-base text-slate-300">Ship work used by millions of traders</div>
              </li>
              <li className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
                <div className="text-xl font-bold text-white">Balance</div>
                <div className="text-base text-slate-300">Wellness benefits and time off</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
