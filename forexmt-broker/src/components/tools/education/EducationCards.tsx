"use client";

export default function EducationCards() {
  const cards = [
    {
      title: "Learn at Your Own Pace",
      desc:
        "Bite-sized lessons designed to fit your schedule. Revisit topics anytime and track your progress as you grow.",
      link: "#",
      linkText: "Beginner Path",
    },
    {
      title: "Learn from Our Experts",
      desc:
        "Get insights from seasoned traders and analysts. Practical, actionable guidance for real market conditions.",
      link: "#",
      linkText: "Watch Now",
    },
    {
      title: "Watch and Learn",
      desc:
        "Short videos and walkthroughs to master strategies, risk management, and platform know-how.",
      link: "#",
      linkText: "Play Tutorials",
    },
  ];

  return (
    <section id="education-cards" className="py-10 sm:py-14 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <a
              key={c.title}
              href={c.link}
              aria-label={c.title}
              className="group block rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm transition-all p-5 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="h-10 w-10 rounded-xl bg-slate-100 ring-1 ring-slate-200 flex items-center justify-center text-slate-700">
                  <span className="text-base">🎓</span>
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{c.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{c.desc}</p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-slate-900">
                {c.linkText}
                <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
