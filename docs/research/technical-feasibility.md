# CommitKit — Technical Feasibility Assessment

*Completed: 2026-03-01*

## Verdict: ✅ FULLY FEASIBLE — No Technical Blockers

The entire MVP can be built with our proven stack. No new technology required. No third-party API dependencies for core features.

---

## Proposed Architecture

### Stack (Proven in NudgeDocs)
| Layer | Technology | Confidence |
|-------|-----------|------------|
| Frontend | Next.js 15 (App Router) + TypeScript | ✅ High |
| Styling | Tailwind CSS + custom design system | ✅ High |
| Backend | Convex (real-time, serverless) | ✅ High |
| Auth | Clerk (magic link + OAuth) | ✅ High |
| Hosting | Vercel | ✅ High |
| Analytics | PostHog | ✅ High |
| Email | Resend (transactional notifications) | ✅ High |

### Why Convex
- **Real-time sync:** Kanban board updates live across devices (parent + student can both use)
- **Reactive queries:** Coach outreach status updates without polling
- **File storage:** Highlight reel links, documents, camp brochures
- **Full-text search:** Search schools, coaches, events
- **Proven:** Already running NudgeDocs on this stack

---

## Core Feature Feasibility

### 1. School Tracking Board (Kanban)
- **Complexity:** Low-Medium
- **Implementation:** Convex table for schools, status field with enum (Dream/Target/Safety/Contacted/Responded/Visited/Offered/Committed), drag-and-drop UI with dnd-kit or similar
- **Risk:** None. Standard Kanban pattern.

### 2. Coach Contact Manager
- **Complexity:** Medium
- **Implementation:** Convex table for contacts (name, email, school, role, notes). Activity log table for interactions (emailed, called, met at camp). Follow-up reminders via scheduled Convex functions.
- **Risk:** Low. CRM is well-trodden territory.

### 3. Eligibility Timeline
- **Complexity:** Medium
- **Implementation:** Static data model for NCAA/NAIA/JUCO rules and deadlines. Per-player tracking of core courses, test scores, registration status. Visual timeline component.
- **Data source:** NCAA Eligibility Center publishes requirements. Manual data entry for rules (updated annually — small maintenance burden).
- **Risk:** Low. Data changes slowly (NCAA rule updates are annual). No API dependency.

### 4. Showcase/Camp Calendar
- **Complexity:** Low
- **Implementation:** Convex table for events. Manual entry initially. Future: scrape camp listings or partner with event organizers.
- **Risk:** Low for MVP (manual). Medium for automated ingestion (would need scraping or partnerships).

### 5. Email Templates
- **Complexity:** Low
- **Implementation:** Template library (markdown/rich text) with merge fields (player name, school, coach name). Copy-to-clipboard or send via user's email client (not through our servers — avoids deliverability issues).
- **Risk:** None.

### 6. Highlight Reel Manager
- **Complexity:** Low
- **Implementation:** Store YouTube/Hudl/Veo URLs. Display embed previews. Track sharing (which coaches received which link).
- **Future:** View tracking (requires link proxy — medium complexity).
- **Risk:** Low for MVP. Medium for view analytics.

---

## MVP Scope (4-6 Weeks)

### Sprint 0: Foundation (Week 1)
- Repo setup, design system, auth (Clerk)
- Basic layout: sidebar + main content area
- Convex schema: users, schools, contacts, activities

### Sprint 1: School Board (Week 2)
- Kanban board with drag-and-drop
- School detail view (name, division, location, notes, coaches)
- Add/edit/archive schools

### Sprint 2: Coach Contacts (Week 3)
- Contact list per school
- Activity log (email sent, called, met at camp, etc.)
- Follow-up reminders (Convex scheduled functions)

### Sprint 3: Eligibility + Templates (Week 4)
- NCAA core course checklist
- Key dates timeline (registration, test scores, contact periods)
- 10 coach outreach email templates

### Sprint 4: Polish + Launch (Weeks 5-6)
- Mobile responsive pass
- Onboarding flow (wizard: add first 3 schools)
- Landing page (NudgeDocs pattern — proven)
- PostHog analytics
- Waitlist → beta conversion

---

## Build Time Estimate

| Phase | Duration | Builder |
|-------|----------|---------|
| Design (brief + system) | 2-3 days | design-inspiration + frontend-design skills |
| Landing page | 1-2 days | Gemini 3.1 Pro |
| MVP app (Sprint 0-3) | 3-4 weeks | Claude Code (sprint-loop) |
| Polish + Launch | 1-2 weeks | Claude Code |
| **Total** | **5-7 weeks** | |

---

## Technical Risks

| Risk | Severity | Mitigation |
|------|----------|------------|
| Convex pricing at scale | Low | Free tier covers 10K+ users. Pro at $25/mo for more. |
| Clerk pricing at scale | Low | Free to 10K MAU. $0.02/MAU after. |
| Coach database (80K coaches) | Medium | NOT needed for MVP. Families add their own contacts. Future: scrape or license. |
| Mobile app demand | Medium | Start PWA (responsive web). Native app is Year 2 if needed. |
| Data freshness (NCAA rules) | Low | Rules change annually. Small manual update burden. |

---

## Conclusion

Zero technical blockers. The entire stack is proven (NudgeDocs), the features are standard CRM patterns, and the MVP is scoped to 4-6 weeks of focused development. The hardest part isn't technology — it's design (making a CRM feel approachable to non-technical parents) and marketing (reaching the right families).

**Recommendation: Move to prototyping immediately.** Start with design inspiration + design system, then build.
