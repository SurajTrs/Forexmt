"use client";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/about-hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster="/about-hero-poster.jpg"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-950/60" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 min-h-[80vh] sm:min-h-[85vh] flex items-center justify-center text-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white">
            Big. Fair. Human.
          </h1>
          <p className="mt-5 max-w-3xl mx-auto text-slate-100 text-lg sm:text-xl">
            We give every client the best possible trading experience. Trusted by millions of traders across the world.
          </p>
          <div className="mt-7 flex items-center justify-center gap-3">
            <a href="#join-us" className="inline-flex items-center justify-center rounded-2xl bg-white px-7 py-3.5 text-base font-semibold text-slate-900 shadow-sm ring-1 ring-white/10 transition hover:bg-white/90">Join Us</a>
            <a href="#awards" className="inline-flex items-center justify-center rounded-2xl bg-slate-800 px-7 py-3.5 text-base font-semibold text-white shadow-sm ring-1 ring-white/10 transition hover:bg-slate-700">See Awards</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-xl font-extrabold text-slate-900">{value}</div>
      <div className="text-xs font-medium text-slate-600">{label}</div>
    </div>
  );
}
