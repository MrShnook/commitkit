"use client";

import { useRef, MouseEvent, ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  className = "",
}: FeatureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);

    if (typeof window !== "undefined" && window.posthog) {
      // Debounced — only fires on first hover
    }
  }

  function handleMouseEnter() {
    if (typeof window !== "undefined" && window.posthog) {
      window.posthog.capture("feature_hover", { feature: title });
    }
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      className={`group relative overflow-hidden rounded-[--radius-xl] border border-border-light bg-surface-white p-6 transition-shadow duration-200 hover:shadow-[--shadow-card-hover] ${className}`}
    >
      {/* Spotlight effect */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(400px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(245, 158, 11, 0.06), transparent 80%)",
        }}
      />
      <div className="relative z-10">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[--radius-lg] bg-navy/5 text-navy">
          {icon}
        </div>
        <h3 className="mb-2 font-display text-xl font-semibold text-ink-primary sm:text-2xl">
          {title}
        </h3>
        <p className="font-body text-base leading-relaxed text-ink-secondary">
          {description}
        </p>
      </div>
    </div>
  );
}
