# CommitKit

Soccer recruitment management platform for families — track outreach, manage school lists, stay on top of eligibility timelines.

## Project Structure

- `docs/context.md` — Venture strategy and positioning
- `docs/design/design-brief.md` — Visual direction, mood, anti-patterns
- `docs/design/design-system.md` — **Design tokens (colors, fonts, spacing, components) — SOURCE OF TRUTH**
- `docs/marketing/product-marketing-context.md` — Positioning, personas, customer language
- `docs/sprints/landing-page-spec.md` — Landing page spec with copy and implementation details
- `docs/research/` — Market research, competitive analysis
- `.claude/product-marketing-context.md` — PMC copy for quick reference

## Conventions

- Next.js 14+ App Router + TypeScript + Tailwind CSS v3
- Follow design-system.md tokens EXACTLY — no default Tailwind colors (blue-500, gray-100, etc.)
- Fonts: Satoshi (display/headlines) + General Sans (body/UI) from Fontshare
- Mobile-first responsive design
- Commit messages: conventional commits (feat:, fix:, docs:, etc.)
- No stock photos — product mockups and abstract shapes only

## Before You Start

1. **Read `docs/design/design-system.md`** — every color, font, spacing value comes from here
2. Read `docs/sprints/landing-page-spec.md` for the current task spec
3. Read `docs/design/design-brief.md` for mood and anti-patterns
4. Run `npm run build` before committing

## Anti-Patterns (BANNED)

- Default Tailwind blue-500, gray backgrounds, generic shadows
- Stock photos of teens playing sports
- Generic Inter/Roboto/Arial fonts
- Aggressive urgency copy ("Sign up NOW!")
- Enterprise dashboard aesthetic on landing page
- Gradient overload (one gradient per page max)

## Brand Colors

- Navy: #0A2342 (primary)
- Amber: #F59E0B (accent/CTA)
- Emerald: #10B981 (success states only)
- Background light: #FAFBFC
- Text: #1A1A2E (primary), #6B7280 (secondary)
