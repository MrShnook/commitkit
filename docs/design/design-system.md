# CommitKit — Design System

*Generated from design-brief.md | 2026-03-01*

## Typography

### Font Stack

```css
--font-display: 'Satoshi', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-body: 'General Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**Display (Satoshi):** Headlines, hero text, section titles, feature card headings, pricing tier names, nav logo text.
**Body (General Sans):** Paragraphs, descriptions, form labels, buttons, nav links, captions, meta text.

Both fonts available from Fontshare (free for commercial use):
- Satoshi: https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap
- General Sans: https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600&display=swap

### Type Scale

| Token | Size | Weight | Font | Use |
|-------|------|--------|------|-----|
| `--text-hero` | 56px / 3.5rem | 900 (Black) | Satoshi | Hero headline only |
| `--text-h1` | 44px / 2.75rem | 700 (Bold) | Satoshi | Section titles |
| `--text-h2` | 32px / 2rem | 700 (Bold) | Satoshi | Subsection headings |
| `--text-h3` | 24px / 1.5rem | 600 (SemiBold) | Satoshi | Card headings, feature titles |
| `--text-h4` | 20px / 1.25rem | 600 (SemiBold) | Satoshi | Minor headings |
| `--text-body-lg` | 18px / 1.125rem | 400 | General Sans | Hero subtext, lead paragraphs |
| `--text-body` | 16px / 1rem | 400 | General Sans | Default body text |
| `--text-body-sm` | 14px / 0.875rem | 400 | General Sans | Captions, meta, secondary info |
| `--text-label` | 12px / 0.75rem | 600 | General Sans | Tags, badges, overline text |

### Line Heights

| Token | Value | Use |
|-------|-------|-----|
| `--leading-tight` | 1.1 | Hero headline |
| `--leading-snug` | 1.25 | Section headings |
| `--leading-normal` | 1.6 | Body text |
| `--leading-relaxed` | 1.75 | Long-form reading |

### Mobile Overrides

| Token | Desktop | Mobile (< 640px) |
|-------|---------|-------------------|
| `--text-hero` | 56px | 36px |
| `--text-h1` | 44px | 30px |
| `--text-h2` | 32px | 24px |
| `--text-h3` | 24px | 20px |
| `--text-body-lg` | 18px | 16px |

---

## Colors

### Core Palette

```css
/* Primary */
--color-navy: #0A2342;
--color-navy-light: #0F3460;
--color-navy-dark: #061A33;

/* Accent */
--color-amber: #F59E0B;
--color-amber-light: #FCD34D;
--color-amber-dark: #D97706;

/* Secondary */
--color-emerald: #10B981;
--color-emerald-light: #34D399;
--color-emerald-dark: #059669;

/* Neutrals */
--color-text-primary: #1A1A2E;
--color-text-secondary: #6B7280;
--color-text-muted: #9CA3AF;
--color-text-inverse: #FFFFFF;

/* Backgrounds */
--color-bg-light: #FAFBFC;
--color-bg-white: #FFFFFF;
--color-bg-dark: #0A2342;
--color-bg-dark-alt: #0F172A;

/* Borders */
--color-border-light: #E5E7EB;
--color-border-dark: #1E3A5F;
```

### Semantic Colors

```css
--color-primary: var(--color-navy);
--color-primary-hover: var(--color-navy-light);
--color-accent: var(--color-amber);
--color-accent-hover: var(--color-amber-dark);
--color-success: var(--color-emerald);
--color-error: #EF4444;
--color-warning: var(--color-amber);
```

### Usage Rules

- **Navy** → Hero backgrounds, footer, dark feature sections, primary brand color
- **Amber** → CTAs, highlights, pricing accent, achievement/progress indicators
- **Emerald** → Success states only (checkmarks, "on track" labels, positive progress). Never as a primary accent.
- **Never** use default Tailwind blue-500, gray-100, etc. Every color must come from this palette.

### Dark Mode

```css
--color-bg-dark-mode: #0F172A;        /* slate-900 base */
--color-bg-dark-mode-card: #1E293B;   /* slate-800 */
--color-text-dark-mode: #F1F5F9;      /* slate-100 */
--color-text-dark-mode-muted: #94A3B8; /* slate-400 */
--color-border-dark-mode: #334155;    /* slate-700 */
```

---

## Spacing

### Scale

```css
--space-1: 4px;    /* 0.25rem */
--space-2: 8px;    /* 0.5rem */
--space-3: 12px;   /* 0.75rem */
--space-4: 16px;   /* 1rem */
--space-5: 20px;   /* 1.25rem */
--space-6: 24px;   /* 1.5rem */
--space-8: 32px;   /* 2rem */
--space-10: 40px;  /* 2.5rem */
--space-12: 48px;  /* 3rem */
--space-16: 64px;  /* 4rem */
--space-20: 80px;  /* 5rem */
--space-24: 96px;  /* 6rem */
```

### Section Spacing

| Context | Padding | Use |
|---------|---------|-----|
| Section vertical | `--space-20` (80px) | Between major page sections |
| Section horizontal | `--space-6` (24px) mobile, `--space-16` (64px) desktop | Page gutter |
| Card internal | `--space-6` (24px) | Feature cards, pricing cards |
| Stack gap (tight) | `--space-3` (12px) | Label + input, icon + text |
| Stack gap (normal) | `--space-4` (16px) | Paragraphs, list items |
| Stack gap (loose) | `--space-8` (32px) | Section heading + content |

### Max Width

```css
--max-width-content: 1200px;  /* Main content */
--max-width-text: 680px;      /* Readable text blocks */
--max-width-hero: 800px;      /* Hero headline container */
```

---

## Borders & Radii

```css
--radius-sm: 6px;     /* Tags, badges */
--radius-md: 8px;     /* Buttons, inputs */
--radius-lg: 12px;    /* Cards, panels */
--radius-xl: 16px;    /* Feature cards, hero containers */
--radius-full: 9999px; /* Avatars, pills */

--border-width: 1px;
--border-color: var(--color-border-light);
```

---

## Shadows

```css
--shadow-sm: 0 1px 2px rgba(10, 35, 66, 0.05);
--shadow-md: 0 4px 6px -1px rgba(10, 35, 66, 0.07), 0 2px 4px -2px rgba(10, 35, 66, 0.05);
--shadow-lg: 0 10px 15px -3px rgba(10, 35, 66, 0.08), 0 4px 6px -4px rgba(10, 35, 66, 0.04);
--shadow-xl: 0 20px 25px -5px rgba(10, 35, 66, 0.1), 0 8px 10px -6px rgba(10, 35, 66, 0.05);
--shadow-card-hover: 0 20px 40px -8px rgba(10, 35, 66, 0.15);
```

Note: Shadow color uses navy base `rgba(10, 35, 66, ...)` not generic black.

---

## Components

### Buttons

**Primary (CTA):**
```css
background: var(--color-amber);
color: var(--color-navy);
font-family: var(--font-body); /* General Sans */
font-weight: 600;
font-size: var(--text-body); /* 16px */
padding: 12px 28px;
border-radius: var(--radius-md); /* 8px */
transition: transform 150ms ease, box-shadow 150ms ease;
/* Hover: */
transform: scale(1.02);
box-shadow: var(--shadow-md);
```

**Secondary:**
```css
background: transparent;
color: var(--color-navy);
border: 1.5px solid var(--color-navy);
/* Hover: background var(--color-navy), color white */
```

**On dark background:**
Primary stays amber. Secondary: border white, color white. Hover: bg white, color navy.

**Sizes:**
| Size | Padding | Font |
|------|---------|------|
| Small | 8px 16px | 14px |
| Default | 12px 28px | 16px |
| Large | 16px 36px | 18px |

### Cards (Feature Cards)

```css
background: var(--color-bg-white);
border: 1px solid var(--color-border-light);
border-radius: var(--radius-xl); /* 16px */
padding: var(--space-6); /* 24px */
transition: box-shadow 200ms ease;
/* Hover: */
box-shadow: var(--shadow-card-hover);
```

**Card Spotlight Effect (Aceternity-inspired):**
On hover, radial gradient spotlight follows cursor:
```css
background: radial-gradient(400px at var(--mouse-x) var(--mouse-y), rgba(245, 158, 11, 0.06), transparent 80%);
```

### Navigation

- Height: 64px
- Background: transparent over hero → `rgba(255, 255, 255, 0.95)` with `backdrop-filter: blur(8px)` on scroll
- Logo: Satoshi Bold, 20px, navy
- Links: General Sans 500, 14px, navy. Hover: underline slide-in from left (200ms)
- CTA button: Primary small (amber)
- Mobile: Hamburger menu, full-screen slide-down
- On dark sections: Logo and links become white, CTA stays amber

### Pricing Cards

```css
/* Free tier */
background: var(--color-bg-white);
border: 1px solid var(--color-border-light);

/* Pro tier (highlighted) */
background: var(--color-bg-white);
border: 2px solid var(--color-amber);
box-shadow: 0 0 0 4px rgba(245, 158, 11, 0.1);
/* "Most Popular" badge: amber bg, navy text, Satoshi 600 */
```

### Input Fields

```css
background: var(--color-bg-white);
border: 1px solid var(--color-border-light);
border-radius: var(--radius-md);
padding: 12px 16px;
font-family: var(--font-body);
font-size: var(--text-body);
/* Focus: */
border-color: var(--color-amber);
box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.15);
```

---

## Textures & Decorative

### Grain Overlay
3-5% opacity noise PNG via CSS pseudo-element on solid-color sections.

### Decorative Blobs
Coolshapes-style abstract gradient shapes. Navy-to-amber gradient, 15-20% opacity, CSS `filter: blur(60px)`, positioned behind feature sections.

### Field Line Pattern (Hero only)
Subtle soccer field lines (center circle, center line, penalty arc) at 5-8% opacity. SVG or CSS-drawn, `rgba(255, 255, 255, 0.06)` on dark backgrounds.

---

## Motion

### Entrance Animations
```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
/* Stagger: 100ms delay between sibling elements */
```

### Scroll Reveal
IntersectionObserver. Elements begin hidden, animate when 20% in viewport. No parallax.

### Hover States
- Buttons: `scale(1.02)` + shadow lift, 150ms ease
- Cards: Shadow elevation + spotlight, 200ms ease
- Nav links: Underline slide-in from left, 200ms ease

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
```

---

## Breakpoints

```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
```

Mobile-first: default styles target mobile. Use `min-width` media queries.

---

## Tailwind Config Extensions

```js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        display: ['Satoshi', 'system-ui', 'sans-serif'],
        body: ['General Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: { DEFAULT: '#0A2342', light: '#0F3460', dark: '#061A33' },
        amber: { DEFAULT: '#F59E0B', light: '#FCD34D', dark: '#D97706' },
        emerald: { DEFAULT: '#10B981', light: '#34D399', dark: '#059669' },
        surface: { light: '#FAFBFC', white: '#FFFFFF' },
        ink: { primary: '#1A1A2E', secondary: '#6B7280', muted: '#9CA3AF' },
      },
      borderRadius: {
        sm: '6px', md: '8px', lg: '12px', xl: '16px',
      },
      maxWidth: {
        content: '1200px', text: '680px', hero: '800px',
      },
    },
  },
};
```

---

## Page Layout (Landing Page)

| # | Section | Background | Content |
|---|---------|------------|---------|
| 1 | **Hero** | Navy | Bold headline, subtext, email capture CTA, product mockup |
| 2 | **Problem** | Light | "Sound familiar?" empathy section, 3 pain points |
| 3 | **Features** | White/Light alternating | Bento grid — 6 features with icons + descriptions |
| 4 | **How It Works** | Light | 3-step visual flow |
| 5 | **Pricing** | White | Free vs. Pro comparison, amber accent on Pro |
| 6 | **Social Proof** | Navy | Trust signals (placeholder for beta testimonials) |
| 7 | **Final CTA** | Amber accent strip | Last push — email capture repeat |
| 8 | **Footer** | Navy dark | Links, legal, socials |

---

*This design system is the source of truth for all CommitKit UI work. Every component, color, and spacing value MUST come from these tokens. No freestyle.*
