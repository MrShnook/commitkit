# CommitKit — Design Brief

*Created: 2026-03-01 | Design exploration session*

## Problem & Purpose

Convert parents of competitive youth athletes (ages 14-18) into free signups, then paid subscribers. Build trust that CommitKit is the organized, affordable alternative to NCSA's chaos. The landing page must communicate "this is the tool we wished existed when we started recruiting."

## Audience Visual Profile

Parents aged 35-55, household income $80K-200K. Comfortable with technology (they use apps, manage spreadsheets, coordinate via WhatsApp groups). Expect a blend of **sports energy** and **professional reliability** — not a kids' game site, not an enterprise dashboard. Reference points: Strava (sports achievement), Linear (clean productivity), Notion (organized clarity). These parents live on sidelines and in email inboxes — they need something that feels as organized as their best spreadsheet but as engaging as gameday.

## Mood & Feeling

The site should feel like walking into a well-organized team facility — modern, purposeful, energizing but calm. Think of the confident feeling when your kid's recruitment folder is finally organized, every coach email tracked, every deadline visible. It's the exhale after chaos. Not flashy like a Nike ad, not sterile like a bank app — it's the sweet spot of "I trust this and it makes me feel in control."

## Font Pairing

- **Display/Headers:** Satoshi (Fontshare) — modernist geometric sans-serif with strong personality. Athletic without being aggressive. Bold weight for headlines creates authority. Variable font with multiple weights.
  - Source: https://fontshare.com/fonts/satoshi
  - Rationale: Geometric precision reads "professional tool." The slight warmth in its letterforms avoids cold tech vibes. Performs beautifully at large sizes for hero text.

- **Body:** General Sans (Fontshare) — compact, rational geometric design. Space-efficient for UI-dense areas (school lists, timelines, dashboards) while maintaining warmth.
  - Source: https://fontshare.com/fonts/general-sans
  - Rationale: Excellent readability at body sizes. Pairs with Satoshi without competing — they share geometric DNA but Satoshi's display weight commands headlines while General Sans disappears into comfortable reading.

- **Fallback stack:** `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

## Color Direction

- **Primary:** `#0A2342` (deep navy) — Trust, professionalism, sports authority. Navy is THE college sports color — think Penn State, Duke, UConn. It says "serious about athletics" without picking a team.
  - Rationale: Competitors (NCSA, SportsRecruits) use lighter blues and greens — deep navy differentiates. Also performs well as dark mode foundation.

- **Accent:** `#F59E0B` (amber/gold) — Energy, achievement, championship vibes. Gold = victory, trophies, commitment. Provides strong contrast against navy for CTAs and highlights.
  - Rationale: Amber on navy is a classic sports combination (think Pacers, Warriors, countless college programs). It's warm enough for families, bold enough for sports.

- **Secondary accent:** `#10B981` (emerald) — Soccer pitch green. Used sparingly for success states, "on track" indicators, positive progress signals.
  - Rationale: Contextual — green means "good" in the Kanban board, but the site doesn't lean on it. Amber is the personality color.

- **Background treatment:** Slightly off-white `#FAFBFC` for light sections. Deep navy `#0A2342` for dark hero/feature sections. Subtle grain texture overlay (inspired by Grainient free pack) at 3-5% opacity for depth. No flat-white sterility.
  - Inspired by: Grainient Supply subtle noise textures applied at low opacity over solid backgrounds.

- **Text:** `#1A1A2E` (near-black with slight warmth) for body. `#6B7280` (gray-500) for muted/secondary text.

## Component Inspiration

- **Hero section:** Inspired by Linear's homepage hero — bold headline, tight subtext, single clear CTA, product UI preview below the fold showing the Kanban board. NOT a stock photo hero. Show the actual product interface (or a polished mockup). Reference: Aceternity's "Hero Sections" block collection (17+ variations — the minimal centered text + product screenshot pattern).

- **Cards/panels:** Aceternity Card Spotlight component — clean cards with subtle radial gradient spotlight on hover. Used for feature showcases (School Tracker, Coach CRM, Eligibility Timeline). Each card shows an icon + heading + 2-line description.
  - Source: https://ui.aceternity.com/components/card-spotlight

- **CTAs/buttons:** Solid amber `#F59E0B` with navy text for primary. Navy outline for secondary. Subtle scale-up (1.02) on hover. Rounded corners (8px) — not fully rounded pills, not sharp rectangles.
  - Inspired by: Linear's button style — understated, confident, never screaming.

- **Navigation:** Aceternity Resizable Navbar component — clean horizontal nav that compacts on scroll. Logo left, links center, CTA right. Transparent on hero, solid on scroll.
  - Source: https://ui.aceternity.com/components/resizable-navbar

- **Testimonials:** Aceternity Animated Testimonials component — minimal layout with image + quote, smooth transitions. Used for parent testimonials and social proof (post-beta).
  - Source: https://ui.aceternity.com/components/animated-testimonials

- **Pricing:** Simple two-column comparison (Free vs. Pro). Not a pricing page — embedded in the landing page as a section. Amber highlight on Pro column.

## Layout Pattern

Feature sections use a bento grid pattern — 2x3 or 3x2 grids where each cell highlights a feature with icon + text + subtle illustration. Asymmetric sizing (one large cell + two small cells per row) for visual hierarchy. Reference: Bentogrids.com patterns — the asymmetric feature grid with one hero card spanning two rows.

**Overall page flow:**
1. Hero (navy bg, bold headline, product preview)
2. Problem statement (light bg, "Sound familiar?" empathy section)
3. Feature bento grid (alternating light/dark sections)
4. Pricing comparison (light bg)
5. Social proof / testimonials (dark bg)
6. CTA section (amber accent, final push)
7. Footer (navy bg)

## Responsive Direction

- **Mobile:** Single column stack. Hero headline scales down to 2-line max. Feature grid becomes vertical cards. Pricing comparison stacks vertically (Free, then Pro). Sticky bottom CTA bar on mobile.
- **Tablet:** 2-column feature grid. Hero maintains single-line headline.
- **Key breakpoints:** sm: 640px, md: 768px, lg: 1024px, xl: 1280px
- **Mobile-first** — the primary user discovers CommitKit on their phone (sideline browsing, WhatsApp link from a friend).

## Motion & Interaction

- **Page entrance:** Staggered fade-up (100ms delay between elements). Subtle, not dramatic — parents don't need fireworks, they need clarity. Reference: Aceternity's hero section entrance animations — elements fade in from below with slight spring easing.
- **Hover states:** Card spotlight radial gradient reveal (from Aceternity Card Spotlight). Buttons scale 1.02 with 150ms ease. Nav links: underline slide-in from left.
- **Scroll behavior:** Feature sections use reveal-on-scroll (IntersectionObserver). No parallax — keep it grounded and fast. Product UI preview in hero section may have subtle scroll-driven animation (Linear-style zoom-in reveal).
- **Transitions:** Fast + snappy (150-200ms). Not bouncy, not sluggish.
- **Intensity:** Subtle micro-interactions only. No full-page animations. This is a productivity tool, not a creative portfolio. Motion-reduced media query respected.

## Dark Mode & Theming

- **Dark mode:** Yes — optional toggle (default follows system preference)
- **Direction:** Soft dark (`#0F172A` — slate-900 base, not pure black). Navy-tinted dark that feels continuous with the brand.
- **Theme switching:** System preference + manual toggle in nav
- **Rationale:** Many parents browse at night (after kids' practice). Dark mode should feel like a natural extension, not an afterthought.

## Textures & Accents

- **Background:** Subtle grain noise texture at 3-5% opacity over solid color sections. From Grainient Supply free pack — light noise PNG overlaid via CSS pseudo-element.
- **Decorative elements:** Coolshapes abstract gradients used sparingly as section dividers or floating accent shapes. Specifically, the rounded blob shapes with navy-to-amber gradients at 15-20% opacity, positioned behind feature sections. From: https://coolshap.es (Star and Flower category shapes).
- **Field line pattern:** Subtle soccer field line pattern (dashed center line, arc) used as a background element in the hero section at very low opacity (5-8%). This is the one sports-specific visual element — recognizable to soccer families, invisible to everyone else.

## Anti-Patterns (Banned)

- ❌ **Stock photos of diverse teens playing sports** — NCSA does this. It screams "we bought these from Shutterstock." Use product UI screenshots and abstract shapes instead.
- ❌ **Aggressive urgency tactics** ("Sign up NOW before it's too late!") — We're the anti-NCSA. No fear-based marketing. Confident, not desperate.
- ❌ **Enterprise dashboard aesthetic** — Gray backgrounds, tiny text, dense data tables on the landing page. We're selling to parents, not CTOs.
- ❌ **Kiddie/playful cartoon style** — This isn't for kids. It's for parents managing a high-stakes process. No mascots, no rounded bubble fonts.
- ❌ **Generic Tailwind defaults** — Default blue-500, default gray backgrounds, default card shadows. Every element must use CommitKit tokens.
- ❌ **Gradient overload** — One gradient per page maximum. The rest is solid colors + textures.
- ❌ **Floating chat widgets** — No Intercom/Drift bubble. Clean and focused.

## Reference Screenshots

*Browser node was offline during this session. Visual references are described by specific source URLs rather than captured screenshots. When the node comes back online, screenshot the following:*

### Aceternity
- Card Spotlight: https://ui.aceternity.com/components/card-spotlight — radial gradient hover effect for feature cards
- Animated Testimonials: https://ui.aceternity.com/components/animated-testimonials — minimal parent quote layout
- Resizable Navbar: https://ui.aceternity.com/components/resizable-navbar — scroll-responsive navigation
- Hero Sections block: https://ui.aceternity.com/blocks/hero-sections — centered headline + product preview pattern

### Fontshare
- Satoshi specimen: https://fontshare.com/fonts/satoshi — display/headline font
- General Sans specimen: https://fontshare.com/fonts/general-sans — body/UI font

### Coolshapes
- Star and Flower categories: https://coolshap.es — abstract gradient blobs for decorative accents

### Grainient
- Subtle noise textures: https://grainient.supply/freebies — low-opacity grain overlays

### Bentogrids
- Asymmetric feature grids: https://bentogrids.com — layout pattern for feature showcase

### Craftwork / Reference Sites
- linear.app — Overall layout precision, dark hero sections, product-led landing page
- strava.com — Sports energy with professional polish, community positioning
- ncsasports.org — ANTI-REFERENCE. What NOT to do: stock photos, fear-based urgency, complex pricing tiers

---
*This design brief feeds into the frontend-design skill to generate design-system.md with concrete tokens.*
