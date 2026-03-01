# CommitKit — Venture Context

*Read this before doing ANY work on CommitKit.*

## What It Is
Soccer recruitment management platform for families and teams — track outreach, manage school lists, stay on top of eligibility timelines. Think "HubSpot for soccer families."

## Verdict: 🟢 BUILD
**Scout Date:** 2026-02-28. Transitioned from idea → researching.

## Why This Exists

College soccer recruitment is a fragmented, high-stress, multi-year process. ~850K high school soccer players navigate it with spreadsheets and email. Existing platforms (NCSA at $1K-4K/yr, SportsRecruits, FieldLevel) are expensive, coach-focused, and don't solve the family's workflow problem.

**The gap:** No one has built a family-side CRM for the recruiting process. Every competitor is a marketplace or profile platform. None help families manage the PROCESS — outreach, follow-ups, timelines, decisions.

## Personal Domain Expertise
Matt's son William (15, Class of 2029) plays MLS Next for SC Del Sol in Phoenix. Matt is living this problem RIGHT NOW. Key date: June 15, 2027 — D1/D2 coaches can first contact William directly.

## Target Customer
- **Primary:** Parents of competitive youth athletes (MLS Next, ECNL, GA, high school varsity) aged 14-18
- **Pain:** Overwhelmed by the multi-year recruiting process — dozens of schools, coach emails, showcase events, eligibility timelines
- **How they solve it today:** Spreadsheets, NCSA ($1K+/yr), FieldLevel (coach-focused), or DIY chaos
- **Size:** ~800K youth athletes in active recruitment pipeline annually in the US

## Competitive Landscape

| Competitor | Price | Family CRM? | Our Edge |
|-----------|-------|-------------|----------|
| NCSA | $1K-4K/yr | No (marketplace) | 10-50x cheaper, better workflow |
| SportsRecruits | Free-Premium | Limited | Family-first, not coach-first |
| FieldLevel | Free | No (coach-driven) | Family empowerment vs. passive profile |
| CaptainU | Free-Premium | No | Full process management |
| Spreadsheets | Free | DIY | Structured, guided, automated |

## Core Product Idea

**Recruitment Command Center for Families:**
- **School tracking board:** Kanban pipeline (Dream / Target / Safety → Contacted / Responded / Visited / Offered / Committed)
- **Coach contact manager:** Track outreach, responses, follow-up timing
- **Eligibility timeline:** NCAA/NAIA/JUCO deadlines, core course tracking
- **Highlight reel manager:** Link videos, track which coaches viewed them
- **Showcase calendar:** Events, camps, ID clinics with school attendance lists

## Pricing Direction
- $15-25/mo SaaS (vs. NCSA at $100-350/mo)
- Free tier with limited schools (3-5)
- Premium: unlimited schools, email templates, analytics, multi-sport

## Market Signal
- **Reddit:** r/bootroom, r/CollegeBasketball, r/soccercoaching — consistent complaints
- **TAM estimate:** 800K families × 5% conversion × $15/mo × 12 = $72M addressable
- **NCAA:** 500K+ student-athletes across 1,100 institutions; ~25K+ in soccer
- **Youth sports:** $28B industry (US)
- **House v. NCAA settlement** (July 2025) — 28-player roster caps, new scholarship structures

## Tech Stack (Proposed)
- Next.js + Tailwind + TypeScript (frontend)
- Convex (real-time backend — proven in NudgeDocs)
- Clerk (auth)
- Vercel (hosting)
- PostHog (analytics)

## Stage: Researching
Current tasks: competitive landscape deep-dive, market sizing, Reddit/community validation, ICP identification, financial model, technical feasibility, verdict brief.

## Existing Research Artifacts (in Mission Control)
- Product spec & research
- UX interview guide (JTBD methodology)
- William's recruitment action plan
- Scout brief with competitive landscape

---
*This file evolves through stages. Update after every decision.*
