"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-full max-w-[--max-width-content] items-center justify-between px-6 lg:px-16">
        {/* Logo */}
        <a href="#" className={`font-display text-xl font-bold transition-colors ${
          scrolled ? "text-navy" : "text-white"
        }`}>
          CommitKit
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {["Features", "Pricing", "How It Works"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className={`relative font-body text-sm font-medium transition-colors after:absolute after:bottom-[-2px] after:left-0 after:h-[1.5px] after:w-0 after:transition-all after:duration-200 hover:after:w-full ${
                scrolled
                  ? "text-navy after:bg-navy"
                  : "text-white/90 after:bg-white hover:text-white"
              }`}
            >
              {link}
            </a>
          ))}
          <a
            href="#hero"
            className="rounded-[--radius-md] bg-amber px-4 py-2 font-body text-sm font-semibold text-navy transition-all hover:scale-[1.02] hover:shadow-md"
          >
            Join Waitlist
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center md:hidden"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-6 transition-all duration-200 ${
                scrolled ? "bg-navy" : "bg-white"
              } ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 transition-all duration-200 ${
                scrolled ? "bg-navy" : "bg-white"
              } ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 transition-all duration-200 ${
                scrolled ? "bg-navy" : "bg-white"
              } ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-16 left-0 right-0 border-b border-border-light bg-white p-6 shadow-lg md:hidden">
          <div className="flex flex-col gap-4">
            {["Features", "Pricing", "How It Works"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setMobileOpen(false)}
                className="font-body text-base font-medium text-navy"
              >
                {link}
              </a>
            ))}
            <a
              href="#hero"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-[--radius-md] bg-amber px-4 py-3 text-center font-body text-base font-semibold text-navy"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
