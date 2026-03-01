"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const painPoints = [
  {
    title: "The Spreadsheet Spiral",
    body: "You started with a simple list of schools. Now it\u2019s a 47-row spreadsheet with color codes only you understand, and you still can\u2019t remember if Coach Davis at State replied to your last email.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 0v1.5c0 .621-.504 1.125-1.125 1.125m0 0h-7.5" />
      </svg>
    ),
  },
  {
    title: "The Money Pit",
    body: "Showcases, ID camps, NCSA memberships \u2014 you\u2019ve spent thousands and still aren\u2019t sure which coaches actually watched the highlight reel. Was that $4,000 NCSA package worth it? (Spoiler: probably not.)",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "The Silent Rejection",
    body: "No coach ever says no. They just stop replying. And you\u2019re left wondering: did they see the email? Should you follow up? When? How many times? Nobody tells you the rules.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
      </svg>
    ),
  },
];

export default function ProblemSection() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative bg-surface-light py-20 lg:py-24">
      <div ref={ref} className="reveal mx-auto max-w-[--max-width-content] px-6 lg:px-16">
        {/* Overline */}
        <p className="mb-4 font-body text-xs font-semibold uppercase tracking-widest text-amber-dark">
          Sound Familiar?
        </p>

        {/* Headline */}
        <h2 className="mb-12 max-w-[--max-width-text] font-display text-3xl font-bold leading-snug text-ink-primary sm:text-4xl lg:text-[2.75rem]">
          Recruiting is a full-time job nobody trained you for.
        </h2>

        {/* Pain point cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {painPoints.map((point, i) => (
            <div
              key={point.title}
              className={`rounded-[--radius-xl] border border-border-light bg-surface-white p-6 transition-shadow duration-200 hover:shadow-lg stagger-${i + 1}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[--radius-md] bg-amber/10 text-amber-dark">
                {point.icon}
              </div>
              <h3 className="mb-3 font-display text-xl font-semibold text-ink-primary">
                {point.title}
              </h3>
              <p className="font-body text-base leading-relaxed text-ink-secondary">
                {point.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
