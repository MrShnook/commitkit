"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    number: "01",
    title: "Build Your List",
    description:
      "Add target schools, categorize as Dream / Target / Safety, and note why each one matters.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Track Everything",
    description:
      "Log outreach, set follow-up reminders, and track which coaches have responded. CommitKit keeps the timeline.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Stay on Track",
    description:
      "Get reminders for follow-ups and deadlines. Know exactly what to do next, always.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="how-it-works" className="relative bg-surface-light py-20 lg:py-24">
      <div ref={ref} className="reveal mx-auto max-w-[--max-width-content] px-6 lg:px-16">
        {/* Overline */}
        <p className="mb-4 font-body text-xs font-semibold uppercase tracking-widest text-amber-dark">
          Get Started in Minutes
        </p>

        {/* Headline */}
        <h2 className="mb-16 max-w-[--max-width-text] font-display text-3xl font-bold leading-snug text-ink-primary sm:text-4xl lg:text-[2.75rem]">
          Three steps to recruiting clarity.
        </h2>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div className="absolute top-10 left-[calc(50%+40px)] hidden h-0.5 w-[calc(100%-40px)] bg-border-light md:block" />
              )}
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                {/* Step number + icon */}
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-[--radius-xl] bg-navy text-white">
                  {step.icon}
                </div>
                <span className="mb-2 font-body text-xs font-semibold uppercase tracking-widest text-amber-dark">
                  Step {step.number}
                </span>
                <h3 className="mb-3 font-display text-xl font-semibold text-ink-primary sm:text-2xl">
                  {step.title}
                </h3>
                <p className="max-w-xs font-body text-base leading-relaxed text-ink-secondary">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
