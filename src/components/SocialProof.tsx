"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const badges = [
  { emoji: "\u{1F3DF}\uFE0F", text: "Built by MLS Next parents" },
  { emoji: "\u{1F512}", text: "Your data stays yours" },
  { emoji: "\u{1F4AC}", text: "No sales calls. Ever." },
];

export default function SocialProof() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section className="grain relative overflow-hidden bg-navy py-20 lg:py-24">
      <div ref={ref} className="reveal relative z-10 mx-auto max-w-[--max-width-content] px-6 lg:px-16">
        {/* Headline */}
        <h2 className="mx-auto max-w-[--max-width-text] text-center font-display text-3xl font-bold leading-snug text-white sm:text-4xl lg:text-[2.75rem]">
          Built by a recruiting family. For recruiting families.
        </h2>

        {/* Copy */}
        <p className="mx-auto mt-6 max-w-[--max-width-text] text-center font-body text-base leading-relaxed text-white/70 sm:text-lg">
          CommitKit was born on the sidelines. Our founder is a parent of an MLS Next
          player — living the recruiting grind right now. We didn&apos;t study this
          problem in a boardroom. We&apos;re solving it in real time.
        </p>

        {/* Trust badges */}
        <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-10">
          {badges.map((badge) => (
            <div
              key={badge.text}
              className="flex items-center gap-3 rounded-[--radius-lg] border border-white/10 bg-white/5 px-6 py-4"
            >
              <span className="text-2xl" role="img">{badge.emoji}</span>
              <span className="font-body text-base font-medium text-white">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
