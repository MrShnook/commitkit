"use client";

import WaitlistForm from "./WaitlistForm";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function FinalCTA() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden bg-amber py-16 lg:py-20">
      <div ref={ref} className="reveal relative z-10 mx-auto max-w-[--max-width-content] px-6 text-center lg:px-16">
        {/* Headline */}
        <h2 className="mx-auto max-w-[--max-width-hero] font-display text-3xl font-bold leading-snug text-navy sm:text-4xl lg:text-[2.75rem]">
          Your kid&apos;s working hard. You should be organized.
        </h2>

        {/* Subhead */}
        <p className="mx-auto mt-4 max-w-[--max-width-text] font-body text-base leading-relaxed text-navy/70 sm:text-lg">
          Join the waitlist and be first to know when CommitKit launches.
        </p>

        {/* Email capture */}
        <div className="mx-auto mt-8 max-w-md">
          <WaitlistForm source="final_cta" buttonText="Get Early Access" variant="light" />
        </div>
      </div>
    </section>
  );
}
