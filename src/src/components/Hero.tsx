"use client";

import WaitlistForm from "./WaitlistForm";

function KanbanMockup() {
  const columns = [
    {
      title: "Dream",
      color: "bg-amber/20 text-amber-dark",
      cards: [
        { school: "Stanford", coach: "Coach Wilson", status: "Email sent" },
        { school: "UCLA", coach: "Coach Park", status: "Awaiting reply" },
      ],
    },
    {
      title: "Target",
      color: "bg-emerald/20 text-emerald-dark",
      cards: [
        { school: "Oregon State", coach: "Coach Davis", status: "Call scheduled" },
        { school: "Clemson", coach: "Coach Martinez", status: "Campus visit" },
        { school: "Virginia Tech", coach: "Coach Nguyen", status: "Email sent" },
      ],
    },
    {
      title: "Safety",
      color: "bg-white/20 text-white/80",
      cards: [
        { school: "James Madison", coach: "Coach Brown", status: "Committed interest" },
      ],
    },
  ];

  return (
    <div className="mx-auto mt-12 max-w-3xl lg:mt-16">
      <div className="rounded-[--radius-xl] border border-white/10 bg-white/5 p-4 shadow-xl backdrop-blur-sm sm:p-6">
        {/* Title bar */}
        <div className="mb-4 flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-white/20" />
          <div className="h-3 w-3 rounded-full bg-white/20" />
          <div className="h-3 w-3 rounded-full bg-white/20" />
          <span className="ml-3 font-body text-xs text-white/40">School Pipeline — Class of 2027</span>
        </div>
        {/* Columns */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-2">
              <div className="flex items-center gap-2 pb-2">
                <span className={`rounded-[--radius-sm] px-2 py-0.5 font-display text-xs font-semibold ${col.color}`}>
                  {col.title}
                </span>
                <span className="font-body text-xs text-white/40">{col.cards.length}</span>
              </div>
              {col.cards.map((card) => (
                <div
                  key={card.school}
                  className="rounded-[--radius-md] border border-white/10 bg-white/5 p-3 transition-all hover:bg-white/10"
                >
                  <p className="font-display text-sm font-semibold text-white">{card.school}</p>
                  <p className="mt-1 font-body text-xs text-white/50">{card.coach}</p>
                  <p className="mt-1 font-body text-xs text-white/40">{card.status}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SoccerFieldSVG() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1200 800"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {/* Center line */}
      <line x1="600" y1="0" x2="600" y2="800" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
      {/* Center circle */}
      <circle cx="600" cy="400" r="120" stroke="rgba(255,255,255,0.06)" strokeWidth="2" fill="none" />
      {/* Center dot */}
      <circle cx="600" cy="400" r="4" fill="rgba(255,255,255,0.06)" />
      {/* Left penalty area */}
      <rect x="0" y="200" width="200" height="400" stroke="rgba(255,255,255,0.06)" strokeWidth="2" fill="none" />
      {/* Left goal area */}
      <rect x="0" y="300" width="80" height="200" stroke="rgba(255,255,255,0.06)" strokeWidth="2" fill="none" />
      {/* Left penalty arc */}
      <path d="M 200 340 A 60 60 0 0 1 200 460" stroke="rgba(255,255,255,0.06)" strokeWidth="2" fill="none" />
      {/* Right penalty area */}
      <rect x="1000" y="200" width="200" height="400" stroke="rgba(255,255,255,0.06)" strokeWidth="2" fill="none" />
      {/* Right goal area */}
      <rect x="1120" y="300" width="80" height="200" stroke="rgba(255,255,255,0.06)" strokeWidth="2" fill="none" />
      {/* Right penalty arc */}
      <path d="M 1000 340 A 60 60 0 0 0 1000 460" stroke="rgba(255,255,255,0.06)" strokeWidth="2" fill="none" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="grain relative min-h-screen overflow-hidden bg-navy">
      <SoccerFieldSVG />
      <div className="relative z-10 mx-auto max-w-[--max-width-content] px-6 pt-28 pb-16 lg:px-16 lg:pt-36 lg:pb-24">
        {/* Overline */}
        <p className="mb-4 font-body text-xs font-semibold uppercase tracking-widest text-amber">
          For Sports Families
        </p>

        {/* Headline */}
        <h1 className="max-w-[--max-width-hero] font-display text-4xl font-black leading-[1.1] text-white sm:text-5xl lg:text-[3.5rem]">
          Stop losing coaches in your inbox.
        </h1>

        {/* Subhead */}
        <p className="mt-6 max-w-[--max-width-text] font-body text-base leading-relaxed text-white/70 sm:text-lg">
          CommitKit organizes your entire college recruiting journey — every school,
          every coach, every deadline — so nothing falls through the cracks.
        </p>

        {/* Email capture */}
        <div className="mt-8 max-w-md">
          <WaitlistForm source="hero" variant="dark" />
          <p className="mt-3 font-body text-sm text-white/40">
            Free to start. No credit card required.
          </p>
        </div>

        {/* Kanban mockup */}
        <KanbanMockup />
      </div>
    </section>
  );
}
