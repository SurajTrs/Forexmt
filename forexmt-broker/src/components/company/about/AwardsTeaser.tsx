"use client";

export default function AwardsTeaser() {
  return (
    <section id="awards" className="py-12 sm:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">See Our Latest Awards</h2>
          <p className="mt-3 text-slate-700 max-w-2xl mx-auto text-base sm:text-lg">
            You deserve best-in-class trading experiences, and we’re proud to be recognised for excellence.
          </p>
          <div className="mt-7">
            <a href="#" className="inline-flex items-center rounded-xl bg-slate-900 text-white px-6 py-3 text-base font-semibold shadow-sm hover:bg-slate-800">See Awards</a>
          </div>
        </div>
      </div>
    </section>
  );
}
