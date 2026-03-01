"use client";

import { useState, FormEvent } from "react";

interface WaitlistFormProps {
  source: string;
  buttonText?: string;
  variant?: "light" | "dark";
}

export default function WaitlistForm({
  source,
  buttonText = "Join the Waitlist",
  variant = "dark",
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    if (typeof window !== "undefined" && window.posthog) {
      window.posthog.capture("cta_click", { button_location: source });
    }

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source_section: source }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-2 font-body text-base">
        <svg className="h-5 w-5 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <span className={variant === "dark" ? "text-white" : "text-ink-primary"}>
          You&apos;re on the list! We&apos;ll be in touch.
        </span>
      </div>
    );
  }

  const inputClasses =
    variant === "dark"
      ? "bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-amber focus:ring-amber/30"
      : "bg-white border-border-light text-ink-primary placeholder-ink-muted focus:border-amber focus:ring-amber/30";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:gap-0">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className={`h-12 w-full rounded-[--radius-md] border px-4 font-body text-base transition-colors focus:outline-none focus:ring-2 sm:rounded-r-none ${inputClasses}`}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="h-12 whitespace-nowrap rounded-[--radius-md] bg-amber px-7 font-body text-base font-semibold text-navy transition-all hover:scale-[1.02] hover:shadow-md disabled:opacity-70 sm:rounded-l-none"
      >
        {status === "loading" ? "Joining..." : buttonText}
      </button>
      {status === "error" && (
        <p className="mt-2 font-body text-sm text-error sm:absolute sm:mt-14">
          {errorMsg}
        </p>
      )}
    </form>
  );
}
