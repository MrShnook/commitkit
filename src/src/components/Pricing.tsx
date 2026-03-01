"use client";

import { useEffect, useRef } from "react";

const freeTier = {
  name: "Free",
  price: "$0",
  period: "forever",
  cta: "Start Free",
  features: [
    "Track up to 3 schools",
    "Basic coach contact log",
    "Eligibility checklist",
  ],
};

const proTier = {
  name: "Pro",
  price: "$19",
  period: "/mo",
  annual: "$149/year (save 35%)",
  badge: "MOST POPULAR",
  cta: "Join the Waitlist",
  features: [
    "Unlimited schools",
    "Full coach CRM with follow-up reminders",
    "Email templates for outreach",
    "Showcase planner",
    "Family sharing (2 accounts)",
    "Eligibility timeline with deadline alerts",
  ],
};

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            if (typeof window !== "undefined" && window.posthog) {
              window.posthog.capture("pricing_view");
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="pricing" className="relative bg-surface-white py-20 lg:py-24">
      <div ref={ref} className="reveal mx-auto max-w-[--max-width-content] px-6 lg:px-16">
        {/* Overline */}
        <p className="mb-4 text-center font-body text-xs font-semibold uppercase tracking-widest text-amber-dark">
          Simple Pricing
        </p>

        {/* Headline */}
        <h2 className="mx-auto mb-16 max-w-[--max-width-text] text-center font-display text-3xl font-bold leading-snug text-ink-primary sm:text-4xl lg:text-[2.75rem]">
          Start free. Upgrade when you&apos;re ready.
        </h2>

        {/* Cards */}
        <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2 md:gap-8">
          {/* Free tier */}
          <div className="flex flex-col rounded-[--radius-xl] border border-border-light bg-surface-white p-6 sm:p-8">
            <h3 className="font-display text-2xl font-bold text-ink-primary">{freeTier.name}</h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="font-display text-4xl font-black text-ink-primary">{freeTier.price}</span>
              <span className="font-body text-base text-ink-secondary">/{freeTier.period}</span>
            </div>
            <ul className="mt-8 flex flex-1 flex-col gap-4">
              {freeTier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-body text-base text-ink-secondary">{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="#hero"
              className="mt-8 block rounded-[--radius-md] border-[1.5px] border-navy py-3 text-center font-body text-base font-semibold text-navy transition-all hover:bg-navy hover:text-white"
            >
              {freeTier.cta}
            </a>
          </div>

          {/* Pro tier */}
          <div className="relative flex flex-col rounded-[--radius-xl] border-2 border-amber bg-surface-white p-6 shadow-[0_0_0_4px_rgba(245,158,11,0.1)] sm:p-8">
            {/* Badge */}
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-[--radius-sm] bg-amber px-3 py-1 font-display text-xs font-semibold text-navy">
              {proTier.badge}
            </span>
            <h3 className="font-display text-2xl font-bold text-ink-primary">{proTier.name}</h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="font-display text-4xl font-black text-ink-primary">{proTier.price}</span>
              <span className="font-body text-base text-ink-secondary">{proTier.period}</span>
            </div>
            <p className="mt-1 font-body text-sm text-amber-dark">{proTier.annual}</p>
            <ul className="mt-8 flex flex-1 flex-col gap-4">
              {proTier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-body text-base text-ink-secondary">{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="#hero"
              className="mt-8 block rounded-[--radius-md] bg-amber py-3 text-center font-body text-base font-semibold text-navy transition-all hover:scale-[1.02] hover:shadow-md"
            >
              {proTier.cta}
            </a>
          </div>
        </div>

        {/* Below pricing note */}
        <p className="mt-10 text-center font-body text-base text-ink-secondary">
          That&apos;s less than a single showcase registration fee.
        </p>
      </div>
    </section>
  );
}
