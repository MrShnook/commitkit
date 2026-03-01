# CommitKit — Financial Model

*Research completed: 2026-03-01*

## Pricing Structure

### Free Tier (Acquisition)
- Track up to **3 schools**
- Basic Kanban board
- No coach contact management
- No eligibility tracking
- **Purpose:** Let families experience the value before paying. Low friction.

### Pro ($19/mo or $149/year — save $79)
- **Unlimited schools** on Kanban board
- Coach contact management (email tracking, follow-up reminders)
- Eligibility timeline (NCAA/NAIA/JUCO deadlines)
- Showcase/camp calendar
- Email templates for coach outreach
- Export/share with family members

### Premium ($29/mo or $229/year — save $119) — FUTURE
- Everything in Pro
- Highlight reel analytics (who viewed, when)
- Coach response benchmarking ("average response time for D1 programs is X days")
- Multi-sport tracking
- Priority support

---

## Unit Economics

### Revenue Per User
- **Monthly:** $19/mo = $228/year
- **Annual:** $149/year (effective $12.42/mo)
- **Blended assumption:** 40% annual / 60% monthly = $196.40/year average

### Cost Per User (Monthly)

| Cost Item | Per User/Mo | Notes |
|-----------|-------------|-------|
| Convex (backend) | $0.10-0.50 | Real-time DB, generous free tier |
| Vercel (hosting) | $0.02-0.05 | Static + serverless |
| Clerk (auth) | $0.02 | Free up to 10K MAU |
| PostHog (analytics) | $0.01 | Free tier covers early stage |
| Resend (transactional email) | $0.01-0.05 | Low volume |
| Domain + DNS | $0.01 | ~$12/year |
| **Total COGS** | **~$0.20-0.65** | |

### Margins
- **Monthly subscriber:** ($19 - $0.65) / $19 = **96.6% gross margin**
- **Annual subscriber:** ($12.42 - $0.65) / $12.42 = **94.8% gross margin**
- **Blended:** ~**95.5% gross margin**

This is a SaaS dream margin. No SMS costs (unlike NudgeDocs), no per-message charges, no physical goods.

---

## Growth Projections

### Year 1 (2026-2027)

| Month | Free Users | Paid Users | MRR | Notes |
|-------|-----------|------------|-----|-------|
| M1-3 | 100 | 10 | $190 | Soft launch, friends/family, Reddit |
| M4-6 | 500 | 50 | $950 | SEO + social content kicking in |
| M7-9 | 1,500 | 200 | $3,800 | Peak recruitment season (fall) |
| M10-12 | 3,000 | 500 | $9,500 | Word of mouth + camp season |

**Year 1 Total:** ~500 paid users, **~$114K ARR**

### Year 2 (2027-2028)
- Leverage Year 1 product-market fit
- Add B2B (club partnerships)
- Multi-sport expansion begins
- **Target:** 2,000 paid users, **$456K ARR**

### Year 3 (2028-2029)
- Established brand in soccer recruiting
- Premium tier launched
- 3+ sports supported
- **Target:** 5,000 paid users, **$1.32M ARR**

---

## Break-Even Analysis

### Fixed Costs (Monthly)

| Item | Cost | Notes |
|------|------|-------|
| Convex Pro | $25 | Once we outgrow free tier |
| Vercel Pro | $20 | |
| Clerk Pro | $25 | After 10K MAU |
| Domain | $1 | |
| PostHog | $0 | Free tier sufficient early |
| Marketing tools | $50 | Newsletter, social scheduler |
| **Total Fixed** | **~$121/mo** | |

### Break-Even
$121 / $19 per paid user = **7 paid users to break even**

With annual pricing: $121 / $12.42 = **10 paid users**

**This venture is profitable from almost Day 1.** Zero infrastructure cost cliff. No SMS/messaging costs. Pure SaaS margins.

---

## Customer Acquisition Cost (CAC) Targets

### Organic Channels (Primary — $0 CAC)
- SEO blog content (recruitment guides, checklists, timelines)
- Reddit engagement (r/bootroom, r/CollegeSoccer)
- Facebook group participation
- Twitter/X content (@CommitKit)
- Word of mouth from sideline conversations

### Paid Channels (Secondary — Year 1 experiments)
- Facebook/Instagram ads targeting soccer parents: $5-15 CAC
- Google Ads on "college soccer recruiting tool": $10-25 CAC
- Influencer partnerships (soccer YouTube): $3-10 CAC equivalent
- **Target blended CAC:** <$20

### LTV:CAC
- LTV (24-month avg retention × $16.37 blended monthly): **$392**
- Target CAC: $20
- **LTV:CAC = 19.6x** (excellent — 3x is healthy)

---

## Key Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| ProductiveRecruit pivots to B2C | High | Move fast, win on UX + community. First-mover on family side. |
| NCSA launches affordable tier | Medium | They can't shed predatory reputation. Trust is our moat. |
| Recruitment process changes (NCAA rule shifts) | Low | Adaptable — timelines/rules are data, not architecture |
| Low conversion from free to paid | High | Ensure free tier shows value but creates natural upgrade friction at 3-school limit |
| Seasonality (recruitment peaks in fall) | Medium | Build content/SEO year-round, accept seasonal MRR variance |

---

## Summary

CommitKit has **95%+ gross margins**, breaks even at **7 paid users**, and targets a market where families are already spending $10K+/year on recruitment. The unit economics are exceptional because there are zero per-transaction costs (no SMS, no marketplace fees, no physical goods).

**The only question is acquisition speed, not economics.** If we can get to 500 paid users in Year 1, this is a meaningful business.
