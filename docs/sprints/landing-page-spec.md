# CommitKit Landing Page — Sprint Spec

## Objective
Build a production-ready Next.js landing page for CommitKit with waitlist email capture and PostHog analytics. The page converts parents of competitive youth athletes into free signups.

## Tech Stack
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS v3
- PostHog analytics (client-side snippet)

## Design References (MUST READ)
- `docs/design/design-brief.md` — Mood, feeling, visual direction, anti-patterns
- `docs/design/design-system.md` — Exact tokens: colors, fonts, spacing, components
- `.claude/product-marketing-context.md` — Positioning, personas, customer language

## CRITICAL Design Rules
1. Use ONLY colors from design-system.md — no default Tailwind blues/grays
2. Fonts: Satoshi (display) + General Sans (body) from Fontshare
3. Mobile-first responsive design
4. No stock photos. Product mockup illustrations or abstract shapes only.
5. Every element references the design system tokens

## PostHog Setup
Project Token: `phc_9TMFjbNVTpD33mYuvU0NecgXuy2POIXmCenP8TRYj8Z`
Host: `https://us.i.posthog.com`

Track these events:
- `waitlist_signup` — when email is submitted (properties: email, source_section)
- `cta_click` — when any CTA button is clicked (properties: button_location)
- `pricing_view` — when pricing section enters viewport
- `feature_hover` — when a feature card is hovered

## Page Sections & Copy

### 1. HERO (Navy background)

**Overline:** `FOR SPORTS FAMILIES`

**Headline:** `Stop losing coaches in your inbox.`

**Subhead:** `CommitKit organizes your entire college recruiting journey — every school, every coach, every deadline — so nothing falls through the cracks.`

**CTA:** Email input + "Join the Waitlist" button (amber)

**Below CTA:** `Free to start. No credit card required.`

**Visual:** Stylized Kanban board mockup showing school cards (Dream / Target / Safety pipeline). Built with HTML/CSS, not an image.

**Background detail:** Subtle soccer field line pattern at 5-8% opacity

### 2. PROBLEM SECTION (Light background)

**Overline:** `SOUND FAMILIAR?`

**Headline:** `Recruiting is a full-time job nobody trained you for.`

Three pain point cards:

**Card 1 — "The Spreadsheet Spiral"**
`You started with a simple list of schools. Now it's a 47-row spreadsheet with color codes only you understand, and you still can't remember if Coach Davis at State replied to your last email.`

**Card 2 — "The Money Pit"**
`Showcases, ID camps, NCSA memberships — you've spent thousands and still aren't sure which coaches actually watched the highlight reel. Was that $4,000 NCSA package worth it? (Spoiler: probably not.)`

**Card 3 — "The Silent Rejection"**
`No coach ever says no. They just stop replying. And you're left wondering: did they see the email? Should you follow up? When? How many times? Nobody tells you the rules.`

### 3. FEATURES SECTION (Alternating light/white)

**Overline:** `YOUR RECRUITING COMMAND CENTER`

**Headline:** `Everything you need. Nothing you don't.`

Six feature cards in bento grid layout:

**Feature 1 — School Pipeline** (large card, spans 2 cols)
Icon: Kanban board
Title: `Track Every School`
Description: `Drag and drop schools through your pipeline — from Dream List to Committed. See your entire recruiting landscape at a glance.`

**Feature 2 — Coach CRM**
Icon: Mail/contacts
Title: `Never Lose a Thread`
Description: `Log every coach email, call, and campus visit. Know exactly who you contacted, when, and what they said.`

**Feature 3 — Follow-Up Reminders**
Icon: Bell/clock
Title: `Follow Up on Time`
Description: `Automated reminders so you never let a warm lead go cold. Coaches notice when recruits are organized.`

**Feature 4 — Eligibility Timeline**
Icon: Calendar/checklist
Title: `Hit Every Deadline`
Description: `NCAA, NAIA, and JUCO eligibility deadlines mapped out. Core courses, test scores, registration windows — all tracked.`

**Feature 5 — Showcase Planner**
Icon: Map pin
Title: `Attend the Right Events`
Description: `Know which coaches will be at which showcases. Stop guessing. Start showing up where it matters.`

**Feature 6 — Family Sync** (large card, spans 2 cols)
Icon: Users/family
Title: `Both Parents, One Dashboard`
Description: `Share your recruiting board with your co-pilot. No more "did you email them?" conversations. Everyone sees the same picture.`

### 4. HOW IT WORKS (Light background)

**Overline:** `GET STARTED IN MINUTES`

**Headline:** `Three steps to recruiting clarity.`

**Step 1:** `Build Your List` — Add target schools, categorize as Dream / Target / Safety, and note why each one matters.

**Step 2:** `Track Everything` — Log outreach, set follow-up reminders, and track which coaches have responded. CommitKit keeps the timeline.

**Step 3:** `Stay on Track` — Get reminders for follow-ups and deadlines. Know exactly what to do next, always.

### 5. PRICING (White background)

**Overline:** `SIMPLE PRICING`

**Headline:** `Start free. Upgrade when you're ready.`

**Free Tier:**
- Track up to 3 schools
- Basic coach contact log
- Eligibility checklist
- Price: $0/forever
- CTA: "Start Free"

**Pro Tier (highlighted with amber border):**
- Unlimited schools
- Full coach CRM with follow-up reminders
- Email templates for outreach
- Showcase planner
- Family sharing (2 accounts)
- Eligibility timeline with deadline alerts
- Price: $19/mo or $149/year (save 35%)
- CTA: "Join the Waitlist"
- Badge: "MOST POPULAR"

**Below pricing:** `That's less than a single showcase registration fee.`

### 6. SOCIAL PROOF (Navy background)

Since we're pre-launch, use trust signals instead of testimonials:

**Headline:** `Built by a recruiting family. For recruiting families.`

**Copy:** `CommitKit was born on the sidelines. Our founder is a parent of an MLS Next player — living the recruiting grind right now. We didn't study this problem in a boardroom. We're solving it in real time.`

Three trust badges:
- 🏟️ `Built by MLS Next parents`
- 🔒 `Your data stays yours`
- 💬 `No sales calls. Ever.`

### 7. FINAL CTA (Amber accent strip)

**Headline:** `Your kid's working hard. You should be organized.`

**Subhead:** `Join the waitlist and be first to know when CommitKit launches.`

**CTA:** Email input + "Get Early Access" button

### 8. FOOTER (Navy dark background)

- CommitKit logo
- Links: Features | Pricing | Blog (placeholder)
- Legal: Privacy Policy | Terms of Service (placeholder pages)
- Copyright: © 2026 CommitKit. All rights reserved.
- "Every step to your commit." tagline

## Waitlist Implementation

Email capture should POST to `/api/waitlist` which:
1. Validates email format
2. Sends to PostHog as `waitlist_signup` event with the email as `distinct_id`
3. Sets person properties: `email`, `signup_source`, `signup_date`
4. Returns success/error JSON

Two capture points: Hero section and Final CTA section. Both hit the same endpoint.

## SEO

- Title: `CommitKit — The Recruiting Command Center for Sports Families`
- Meta description: `Track schools, manage coach outreach, and hit every NCAA deadline. The organized way to navigate college recruiting. Free to start.`
- OG image: Generate a simple OG image with the headline and brand colors
- Canonical URL: https://commitkit.io (even though domain isn't live yet)

## File Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts + PostHog
│   ├── page.tsx            # Landing page
│   ├── globals.css         # Tailwind + custom tokens
│   └── api/
│       └── waitlist/
│           └── route.ts    # Waitlist API endpoint
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── ProblemSection.tsx
│   ├── Features.tsx
│   ├── HowItWorks.tsx
│   ├── Pricing.tsx
│   ├── SocialProof.tsx
│   ├── FinalCTA.tsx
│   ├── Footer.tsx
│   ├── WaitlistForm.tsx    # Reusable email capture
│   └── FeatureCard.tsx     # Card with spotlight effect
├── lib/
│   └── posthog.ts          # PostHog client setup
public/
├── textures/
│   └── grain.png           # Noise texture (generate or placeholder)
└── favicon.ico
```

## Deployment Notes
- Deploy to Vercel
- Add PostHog script in layout.tsx (not a React provider — just the snippet)
- Use `next/font` for font optimization if Fontshare supports it, otherwise link in head

## Quality Bar
- Lighthouse Performance > 90
- All sections responsive (mobile → desktop)
- Animations respect `prefers-reduced-motion`
- No layout shift on load
- All text uses design system fonts/colors
- Zero default Tailwind blues/grays
