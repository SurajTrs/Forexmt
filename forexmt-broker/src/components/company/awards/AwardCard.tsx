"use client";

import Image from "next/image";

export type Award = {
  title: string;
  org: string;
  year?: string;
  category: "Platform" | "Service" | "Education" | "Innovation" | "Other";
  desc?: string;
  imageSrc?: string; // path under public/
  imageAlt?: string;
};

export default function AwardCard({ award }: { award: Award }) {
  return (
    <div className="group rounded-2xl ring-1 ring-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
      <div className="flex items-start gap-4">
        {award.imageSrc ? (
          <span className="relative inline-flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl ring-1 ring-slate-200 bg-white">
            <Image src={award.imageSrc} alt={award.imageAlt ?? award.org} fill className="object-contain p-2" />
          </span>
        ) : (
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 ring-1 ring-sky-200 text-sky-700">
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M10 2a1 1 0 01.894.553L12.382 5H16a1 1 0 011 1v1a5 5 0 01-5 5h-.277l-.89 3.115A2 2 0 019.9 16H8.1a2 2 0 01-1.933-1.385L5.277 12H5a5 5 0 01-5-5V6a1 1 0 011-1h3.618l1.488-2.447A1 1 0 0110 2z" />
            </svg>
          </span>
        )}
        <div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <h3 className="text-base sm:text-lg font-semibold text-slate-900">{award.title}</h3>
            {award.year && <span className="text-xs font-medium text-slate-500">· {award.year}</span>}
          </div>
          <div className="text-sm text-slate-600">{award.org}</div>
          {award.desc && <p className="mt-2 text-sm text-slate-600">{award.desc}</p>}
          <div className="mt-3 inline-flex items-center rounded-lg bg-slate-100 text-slate-700 px-2 py-1 text-xs font-medium ring-1 ring-slate-200">
            {award.category}
          </div>
        </div>
      </div>
    </div>
  );
}
