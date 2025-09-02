"use client";

export default function OfficeCard() {
  return (
    <section className="py-6 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rounded-2xl bg-white ring-1 ring-slate-200 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 ring-1 ring-sky-200 text-sky-700">
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 2a6 6 0 00-6 6c0 4.418 6 10 6 10s6-5.582 6-10a6 6 0 00-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" clipRule="evenodd" />
              </svg>
            </span>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Belize Office</h3>
              <p className="mt-1 text-sm text-slate-600">Suite 901, 9th Bree Street, Belize City, Belize</p>
              <div className="mt-3">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Suite+901,+9th+Bree+Street,+Belize+City,+Belize"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  View on Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
