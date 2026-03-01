# CommitKit — Design System

*Generated from `design-brief.md` | 2026-03-01*

This document contains the concrete design tokens, Tailwind configuration, and component specifications for CommitKit. Every UI element must reference these tokens — no default Tailwind values, no freestyle colors, no generic fonts.

---

## 1. Color Tokens

### Core Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--ck-navy-950` | `#071A33` | Darkest navy (footer bg, dark section overlays) |
| `--ck-navy-900` | `#0A2342` | **Primary brand** — hero bg, dark sections, nav on scroll |
| `--ck-navy-800` | `#0E2F56` | Dark section hover states, card backgrounds on dark |
| `--ck-navy-700` | `#153D6B` | Interactive hover on navy backgrounds |
| `--ck-navy-600` | `#1E5189` | Border color on dark backgrounds |
| `--ck-navy-500` | `#2A6AAD` | Muted accent on dark backgrounds |
| `--ck-navy-400` | `#4A8DD0` | Links on dark backgrounds |
| `--ck-navy-300` | `#7EAFE0` | Disabled text on dark backgrounds |
| `--ck-navy-200` | `#B3D1EF` | Placeholder text on dark backgrounds |
| `--ck-navy-100` | `#DDE9F5` | Light navy tint (subtle section bg accent) |
| `--ck-navy-50` | `#EEF4FA` | Lightest navy tint (card hover on light bg) |

### Accent — Amber

| Token | Hex | Usage |
|-------|-----|-------|
| `--ck-amber-600` | `#D97706` | Amber hover/active state |
| `--ck-amber-500` | `#F59E0B` | **Primary accent** — CTAs, highlights, Pro badge |
| `--ck-amber-400` | `#FBBF24` | Amber hover on dark backgrounds |
| `--ck-amber-300` | `#FCD34D` | Subtle amber glow / focus ring |
| `--ck-amber-200` | `#FDE68A` | Light amber tint |
| `--ck-amber-100` | `#FEF3C7` | Amber surface (light pricing highlight) |
| `--ck-amber-50` | `#FFFBEB` | Lightest amber tint |

### Secondary — Emerald

| Token | Hex | Usage |
|-------|-----|-------|
| `--ck-emerald-600` | `#059669` | Success text on light bg |
| `--ck-emerald-500` | `#10B981` | **Success states** — "On Track," positive indicators |
| `--ck-emerald-400` | `#34D399` | Success on dark backgrounds |
| `--ck-emerald-100` | `#D1FAE5` | Success surface (light bg) |
| `--ck-emerald-50` | `#ECFDF5` | Lightest success tint |

### Neutrals

| Token | Hex | Usage |
|-------|-----|-------|
| `--ck-text-primary` | `#1A1A2E` | Body text (warm near-black) |
| `--ck-text-secondary` | `#6B7280` | Muted text (gray-500) |
| `--ck-text-tertiary` | `#9CA3AF` | Placeholder, disabled (gray-400) |
| `--ck-text-on-navy` | `#F0F4F8` | Text on navy backgrounds |
| `--ck-text-on-amber` | `#0A2342` | Text on amber buttons (navy for contrast) |
| `--ck-bg-primary` | `#FAFBFC` | Page background (slightly warm off-white) |
| `--ck-bg-elevated` | `#FFFFFF` | Card/panel surfaces |
| `--ck-bg-subtle` | `#F3F4F6` | Alternate section background |
| `--ck-border-light` | `#E5E7EB` | Borders on light backgrounds |
| `--ck-border-dark` | `#1E3A5F` | Borders on dark backgrounds |

### Dark Mode Overrides

| Token | Hex | Usage |
|-------|-----|-------|
| `--ck-dark-bg-primary` | `#0F172A` | Page background (slate-900 base, not pure black) |
| `--ck-dark-bg-elevated` | `#1E293B` | Card/panel surfaces (slate-800) |
| `--ck-dark-bg-subtle` | `#162033` | Navy-tinted alternate sections |
| `--ck-dark-text-primary` | `#F1F5F9` | Body text (slate-100) |
| `--ck-dark-text-secondary` | `#94A3B8` | Muted text (slate-400) |
| `--ck-dark-border` | `#334155` | Borders (slate-700) |

### Semantic Aliases

```css
:root {
  --ck-surface: var(--ck-bg-primary);
  --ck-surface-raised: var(--ck-bg-elevated);
  --ck-surface-sunken: var(--ck-bg-subtle);
  --ck-accent: var(--ck-amber-500);
  --ck-accent-hover: var(--ck-amber-600);
  --ck-brand: var(--ck-navy-900);
  --ck-brand-hover: var(--ck-navy-800);
  --ck-success: var(--ck-emerald-500);
  --ck-danger: #EF4444;
  --ck-warning: var(--ck-amber-500);
  --ck-focus-ring: var(--ck-amber-300);
}

.dark {
  --ck-surface: var(--ck-dark-bg-primary);
  --ck-surface-raised: var(--ck-dark-bg-elevated);
  --ck-surface-sunken: var(--ck-dark-bg-subtle);
}
```

---

## 2. Typography

### Font Stack

```css
:root {
  --font-display: 'Satoshi', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-body: 'General Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', 'Fira Code', monospace;
}
```

### Font Loading

Both fonts are variable fonts from Fontshare. Self-host (no CDN dependency):
- Download from https://fontshare.com/fonts/satoshi and https://fontshare.com/fonts/general-sans
- Place in `public/fonts/`
- Use `@font-face` with `font-display: swap` and `woff2` format
- Load weights: Satoshi 500 (Medium), 700 (Bold), 900 (Black); General Sans 400 (Regular), 500 (Medium), 600 (Semibold)

### Type Scale

Base: 16px (1rem). Scale factor: 1.25 (Major Third).

| Token | Size | Line Height | Weight | Font | Usage |
|-------|------|-------------|--------|------|-------|
| `--ck-text-hero` | 4rem (64px) | 1.05 | 900 (Black) | Satoshi | Hero headline only |
| `--ck-text-h1` | 3rem (48px) | 1.1 | 700 (Bold) | Satoshi | Page titles |
| `--ck-text-h2` | 2.25rem (36px) | 1.15 | 700 (Bold) | Satoshi | Section headings |
| `--ck-text-h3` | 1.5rem (24px) | 1.25 | 700 (Bold) | Satoshi | Card titles, subsections |
| `--ck-text-h4` | 1.25rem (20px) | 1.3 | 600 (Semibold) | General Sans | Feature labels, small headings |
| `--ck-text-lg` | 1.125rem (18px) | 1.5 | 400 | General Sans | Lead paragraphs, subtext |
| `--ck-text-base` | 1rem (16px) | 1.6 | 400 | General Sans | Body text |
| `--ck-text-sm` | 0.875rem (14px) | 1.5 | 400 | General Sans | Captions, metadata |
| `--ck-text-xs` | 0.75rem (12px) | 1.5 | 500 | General Sans | Badges, overlines, fine print |

### Mobile Overrides

| Token | Desktop | Mobile (< 768px) |
|-------|---------|-------------------|
| `--ck-text-hero` | 4rem | 2.5rem |
| `--ck-text-h1` | 3rem | 2rem |
| `--ck-text-h2` | 2.25rem | 1.75rem |
| `--ck-text-h3` | 1.5rem | 1.25rem |

### Letter Spacing

| Context | Value |
|---------|-------|
| Hero headline | `-0.03em` |
| H1-H2 | `-0.02em` |
| H3-H4 | `-0.01em` |
| Body | `0` (default) |
| Overlines / badges | `0.05em` (uppercase tracking) |

---

## 3. Spacing & Layout

### Spacing Scale

8px base unit. Use Tailwind's default spacing where it aligns.

| Token | Value | Tailwind | Usage |
|-------|-------|----------|-------|
| `--ck-space-1` | 4px | `1` | Tight inner spacing (badge padding) |
| `--ck-space-2` | 8px | `2` | Dense component padding |
| `--ck-space-3` | 12px | `3` | Default gap between inline elements |
| `--ck-space-4` | 16px | `4` | Card internal padding, form field gap |
| `--ck-space-5` | 20px | `5` | — |
| `--ck-space-6` | 24px | `6` | Section internal padding (mobile) |
| `--ck-space-8` | 32px | `8` | Between related content blocks |
| `--ck-space-10` | 40px | `10` | Between components in a section |
| `--ck-space-12` | 48px | `12` | Section padding (desktop top/bottom) |
| `--ck-space-16` | 64px | `16` | Between major page sections (mobile) |
| `--ck-space-20` | 80px | `20` | Between major page sections (tablet) |
| `--ck-space-24` | 96px | `24` | Between major page sections (desktop) |
| `--ck-space-32` | 128px | `32` | Hero vertical padding |

### Container

| Breakpoint | Max Width | Side Padding |
|------------|-----------|--------------|
| Default (mobile) | 100% | 20px (`px-5`) |
| sm (640px) | 100% | 24px (`px-6`) |
| md (768px) | 720px | 32px (`px-8`) |
| lg (1024px) | 960px | 32px |
| xl (1280px) | 1120px | 32px |
| 2xl (1536px) | 1200px | 32px |

### Grid

- **Feature bento grid:** 12-column at lg+, 6-column at md, single column at sm
- **Bento pattern:** Asymmetric — hero card spans `col-span-8`, accent cards `col-span-4`. Row 2 inverts: two `col-span-6` or three `col-span-4`.
- **Column gap:** 24px (lg: 32px)
- **Row gap:** 24px (lg: 32px)

---

## 4. Borders & Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--ck-radius-sm` | 4px | Badges, tags, chips |
| `--ck-radius-md` | 8px | Buttons, inputs, small cards |
| `--ck-radius-lg` | 12px | Cards, panels |
| `--ck-radius-xl` | 16px | Modal, large containers |
| `--ck-radius-full` | 9999px | Avatars, pills, round icons |
| `--ck-border-width` | 1px | Default border width |

### Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `--ck-shadow-sm` | `0 1px 2px rgba(10, 35, 66, 0.05)` | Subtle lift (buttons) |
| `--ck-shadow-md` | `0 4px 12px rgba(10, 35, 66, 0.08)` | Cards at rest |
| `--ck-shadow-lg` | `0 8px 24px rgba(10, 35, 66, 0.12)` | Cards on hover, dropdowns |
| `--ck-shadow-xl` | `0 16px 48px rgba(10, 35, 66, 0.16)` | Modals, hero product preview |
| `--ck-shadow-glow` | `0 0 24px rgba(245, 158, 11, 0.25)` | Amber glow (Pro badge, CTA emphasis) |

Note: Shadow color is navy-tinted, not generic black. This keeps shadows cohesive with the brand.

---

## 5. Motion & Animation

### Timing

| Token | Value | Usage |
|-------|-------|-------|
| `--ck-duration-fast` | `150ms` | Hover states, color transitions |
| `--ck-duration-normal` | `200ms` | General transitions |
| `--ck-duration-slow` | `300ms` | Layout changes, accordion open/close |
| `--ck-duration-reveal` | `500ms` | Page entrance, scroll reveals |

### Easing

| Token | Value | Usage |
|-------|-------|-------|
| `--ck-ease-default` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | General-purpose |
| `--ck-ease-out` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Elements entering view |
| `--ck-ease-in` | `cubic-bezier(0.4, 0.0, 1, 1)` | Elements leaving view |
| `--ck-ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Playful micro-interactions (button press) |

### Animation Patterns

**Page entrance (staggered fade-up):**
```css
@keyframes ck-fade-up {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.ck-animate-in {
  animation: ck-fade-up var(--ck-duration-reveal) var(--ck-ease-out) both;
}
.ck-animate-in:nth-child(1) { animation-delay: 0ms; }
.ck-animate-in:nth-child(2) { animation-delay: 100ms; }
.ck-animate-in:nth-child(3) { animation-delay: 200ms; }
.ck-animate-in:nth-child(4) { animation-delay: 300ms; }
```

**Card spotlight hover (Aceternity-inspired):**
```css
.ck-card-spotlight {
  position: relative;
  overflow: hidden;
}
.ck-card-spotlight::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
    rgba(245, 158, 11, 0.08),
    transparent 60%
  );
  opacity: 0;
  transition: opacity var(--ck-duration-fast) var(--ck-ease-default);
}
.ck-card-spotlight:hover::before {
  opacity: 1;
}
```
Requires JS to track `--mouse-x` / `--mouse-y` on mousemove.

**Button hover:**
```css
.ck-btn {
  transition: transform var(--ck-duration-fast) var(--ck-ease-default),
              box-shadow var(--ck-duration-fast) var(--ck-ease-default),
              background-color var(--ck-duration-fast) var(--ck-ease-default);
}
.ck-btn:hover {
  transform: scale(1.02);
}
.ck-btn:active {
  transform: scale(0.98);
}
```

**Scroll reveal (IntersectionObserver):**
- Trigger: element enters viewport at 15% threshold
- Animation: fade-up (same as page entrance)
- Once only — no re-animation on scroll-back
- Respect `prefers-reduced-motion` — disable all motion animations

**Nav link underline:**
```css
.ck-nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--ck-amber-500);
  transition: width var(--ck-duration-normal) var(--ck-ease-out);
}
.ck-nav-link:hover::after {
  width: 100%;
}
```

---

## 6. Components

### 6.1 Button

| Variant | Background | Text | Border | Hover |
|---------|-----------|------|--------|-------|
| **Primary** | `--ck-amber-500` | `--ck-navy-900` | none | bg → `--ck-amber-600`, scale 1.02 |
| **Secondary** | transparent | `--ck-navy-900` | 1px `--ck-navy-900` | bg → `--ck-navy-50`, scale 1.02 |
| **Ghost** | transparent | `--ck-text-secondary` | none | text → `--ck-text-primary` |
| **Primary (on dark)** | `--ck-amber-500` | `--ck-navy-900` | none | bg → `--ck-amber-400` |
| **Secondary (on dark)** | transparent | `--ck-text-on-navy` | 1px `--ck-navy-600` | bg → `--ck-navy-800` |

**Sizing:**

| Size | Padding | Font Size | Height | Radius |
|------|---------|-----------|--------|--------|
| sm | `8px 16px` | 14px / `--ck-text-sm` | 36px | `--ck-radius-md` |
| md | `10px 24px` | 16px / `--ck-text-base` | 44px | `--ck-radius-md` |
| lg | `14px 32px` | 18px / `--ck-text-lg` | 52px | `--ck-radius-md` |

**Font:** General Sans Semibold (600). No uppercase on buttons — sentence case.

**Focus:** 2px offset ring in `--ck-focus-ring` (amber-300). Always visible on keyboard focus.

### 6.2 Navigation Bar

- **Layout:** Logo (left) — Links (center) — CTA button (right)
- **Height:** 64px (desktop), 56px (mobile)
- **Hero state:** `background: transparent`, `backdrop-filter: none`
- **Scrolled state:** `background: rgba(10, 35, 66, 0.95)`, `backdrop-filter: blur(12px)`
- **Transition:** background 300ms ease
- **Logo:** "CommitKit" wordmark in Satoshi Bold, white on hero, navy on light pages
- **Links:** General Sans Medium (500), 14px, `--ck-text-on-navy` (hero) / `--ck-text-primary` (light)
- **CTA:** Primary button (sm size)
- **Mobile:** Hamburger icon → full-screen overlay (navy-900 bg)
- **Sticky:** `position: sticky; top: 0; z-index: 50`

### 6.3 Card (Feature Card)

- **Background:** `--ck-bg-elevated` (light) / `--ck-dark-bg-elevated` (dark)
- **Border:** 1px `--ck-border-light` / `--ck-dark-border`
- **Radius:** `--ck-radius-lg` (12px)
- **Shadow:** `--ck-shadow-md` at rest → `--ck-shadow-lg` on hover
- **Padding:** 32px (desktop), 24px (mobile)
- **Spotlight effect:** Aceternity-style radial gradient on hover (amber tint at 8% opacity)
- **Content:** Icon (32px, amber) → H3 title → body text (2 lines max on landing page)
- **Hover:** Shadow elevation + spotlight + subtle translateY(-2px) over 200ms

### 6.4 Hero Section

- **Background:** `--ck-navy-900` solid
- **Grain overlay:** PNG noise texture at 3-5% opacity via `::after` pseudo-element (mix-blend-mode: overlay)
- **Layout:** Centered text block, stacked:
  1. Optional overline badge ("Now in Beta" or similar) — amber-100 bg, amber-600 text, xs, uppercase, tracked
  2. Hero headline — Satoshi Black, `--ck-text-hero`, white, max 2 lines
  3. Subtext — General Sans Regular, `--ck-text-lg`, `--ck-navy-200`
  4. CTA row — Primary button (lg) + Ghost button ("See how it works")
  5. Product preview — screenshot/mockup of Kanban board, `--ck-shadow-xl`, radius-xl, below the CTA with 48px gap
- **Vertical padding:** 128px top, 96px bottom (desktop); 80px top, 64px bottom (mobile)
- **Decorative:** Subtle soccer field center-line arc pattern in the background at 5% opacity (CSS or SVG)
- **Max width for text:** 720px (centered)

### 6.5 Section Layout

**Light section:**
- Background: `--ck-bg-primary`
- Vertical padding: 96px (desktop), 64px (mobile)

**Dark section:**
- Background: `--ck-navy-900`
- Grain overlay at 3-5% opacity
- Vertical padding: 96px (desktop), 64px (mobile)

**Alternate section:**
- Background: `--ck-bg-subtle`
- Used between two light sections to break monotony

**Section header pattern:**
- Overline text (optional): xs, uppercase, amber-500, tracked
- Heading: H2 centered, max-w-3xl (768px)
- Subtext: text-lg, `--ck-text-secondary`, max-w-2xl (672px), centered
- Gap between header and content: 48px (desktop), 32px (mobile)

### 6.6 Pricing Comparison

- **Layout:** Two-column at md+, stacked on mobile
- **Free tier card:** Default card styling, no highlight
- **Pro tier card:** `--ck-amber-100` top border (3px) or full amber-50 background. "Recommended" badge (amber pill).
- **Price display:** Satoshi Bold, H1 size. Monthly with annual toggle showing per-month equivalent.
- **Feature list:** Checkmark icon (emerald-500 for included, gray-300 for excluded). General Sans Regular, base size.
- **CTA:** Primary button (Pro), Secondary button (Free)

### 6.7 Testimonial

- **Layout:** Centered, max-w-2xl
- **Quote:** General Sans Regular, `--ck-text-lg` or `--ck-text-h3`, italic
- **Attribution:** Name in General Sans Semibold, role/context in `--ck-text-secondary`
- **Photo:** 48px circle avatar (if available)
- **Transition:** Aceternity animated testimonials pattern — crossfade with 500ms duration

### 6.8 Footer

- **Background:** `--ck-navy-950`
- **Layout:** 4-column grid (lg), 2-column (md), stacked (mobile)
- **Columns:** Product (links) | Resources (blog, FAQ) | Legal (privacy, terms) | Logo + tagline
- **Text:** General Sans Regular, sm, `--ck-navy-300`
- **Links hover:** `--ck-navy-100`
- **Bottom bar:** Copyright + social icons, separated by 1px `--ck-navy-800` border
- **Padding:** 64px top, 32px bottom

### 6.9 Input / Form Field

- **Height:** 44px (md button size alignment)
- **Border:** 1px `--ck-border-light`, radius `--ck-radius-md`
- **Focus:** border → `--ck-amber-500`, ring → 2px `--ck-focus-ring`
- **Text:** General Sans Regular, base
- **Placeholder:** `--ck-text-tertiary`
- **Email capture (waitlist):** Input + adjacent primary button. On mobile: stacked. On desktop: inline with input taking remaining width.

---

## 7. Textures & Decorative Elements

### Grain Overlay
Apply to dark sections (hero, feature dark, footer):
```css
.ck-grain::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('/textures/noise.png');
  background-repeat: repeat;
  opacity: 0.04;
  mix-blend-mode: overlay;
  pointer-events: none;
  z-index: 1;
}
```
Source texture: 200x200px tileable noise PNG. Generate or download from Grainient Supply free pack.

### Coolshapes Accents
- Use 2-3 abstract gradient blob shapes (Star/Flower category from coolshap.es)
- Navy-to-amber gradient, 15-20% opacity
- Position: behind feature sections, offset to edges
- Size: 300-500px, with blur(60px) for soft glow effect
- Purpose: break up flat sections, add organic warmth without explicit illustration

### Soccer Field Pattern (Hero Only)
- SVG of center circle + center line, rendered in `--ck-navy-800` at 5-8% opacity
- Positioned bottom-right of hero section, partially clipped
- Scale: ~600px wide
- This is the ONLY explicit sports visual element on the page

---

## 8. Tailwind Configuration

```js
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Satoshi', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        body: ['General Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        navy: {
          50: '#EEF4FA',
          100: '#DDE9F5',
          200: '#B3D1EF',
          300: '#7EAFE0',
          400: '#4A8DD0',
          500: '#2A6AAD',
          600: '#1E5189',
          700: '#153D6B',
          800: '#0E2F56',
          900: '#0A2342',
          950: '#071A33',
        },
        amber: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
        },
        emerald: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
        },
        text: {
          primary: '#1A1A2E',
          secondary: '#6B7280',
          tertiary: '#9CA3AF',
        },
        surface: {
          primary: '#FAFBFC',
          elevated: '#FFFFFF',
          subtle: '#F3F4F6',
        },
      },
      fontSize: {
        hero: ['4rem', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '900' }],
        'hero-mobile': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '900' }],
        h1: ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h1-mobile': ['2rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
        h2: ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h2-mobile': ['1.75rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        h3: ['1.5rem', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '700' }],
        h4: ['1.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        lg: ['1.125rem', { lineHeight: '1.5', fontWeight: '400' }],
        base: ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        sm: ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        xs: ['0.75rem', { lineHeight: '1.5', fontWeight: '500' }],
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(10, 35, 66, 0.05)',
        md: '0 4px 12px rgba(10, 35, 66, 0.08)',
        lg: '0 8px 24px rgba(10, 35, 66, 0.12)',
        xl: '0 16px 48px rgba(10, 35, 66, 0.16)',
        glow: '0 0 24px rgba(245, 158, 11, 0.25)',
      },
      maxWidth: {
        container: '1200px',
        prose: '720px',
        heading: '768px',
        subtext: '672px',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
      transitionDuration: {
        fast: '150ms',
        normal: '200ms',
        slow: '300ms',
        reveal: '500ms',
      },
      transitionTimingFunction: {
        default: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        out: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
        in: 'cubic-bezier(0.4, 0.0, 1, 1)',
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 500ms cubic-bezier(0.0, 0.0, 0.2, 1) both',
        'fade-up-1': 'fade-up 500ms cubic-bezier(0.0, 0.0, 0.2, 1) 100ms both',
        'fade-up-2': 'fade-up 500ms cubic-bezier(0.0, 0.0, 0.2, 1) 200ms both',
        'fade-up-3': 'fade-up 500ms cubic-bezier(0.0, 0.0, 0.2, 1) 300ms both',
        'fade-up-4': 'fade-up 500ms cubic-bezier(0.0, 0.0, 0.2, 1) 400ms both',
      },
    },
  },
  plugins: [],
}

export default config
```

---

## 9. Accessibility

- **Color contrast:** All text combinations meet WCAG 2.1 AA (4.5:1 body text, 3:1 large text)
  - Navy-900 on white: 15.4:1
  - White on navy-900: 15.4:1
  - Navy-900 on amber-500: 7.2:1
  - Text-secondary on white: 4.6:1
- **Focus indicators:** Visible 2px amber focus ring on all interactive elements (keyboard navigation)
- **Motion:** Respect `prefers-reduced-motion` — disable all animations, transitions instant
- **Font sizing:** Minimum 14px for any readable text. Hero scales down but never below 2rem (32px)
- **Touch targets:** Minimum 44x44px for all interactive elements on mobile
- **Semantic HTML:** `<nav>`, `<main>`, `<section>`, `<footer>`, proper heading hierarchy (no skipping levels)
- **Alt text:** All images and icons have descriptive alt text. Decorative elements use `aria-hidden="true"`

---

## 10. Iconography

- **Style:** Outlined, 1.5px stroke weight. Consistent with Heroicons (outline set) or Lucide.
- **Size tokens:** 16px (inline), 20px (UI), 24px (feature card), 32px (hero feature)
- **Color:** Inherits parent text color. Feature card icons use `--ck-amber-500`.
- **No custom icon library** — use Lucide React (`lucide-react` package) for consistency with Linear aesthetic.

---

## 11. Page Structure Reference

For coding agents — the landing page sections in order:

```
+--------------------------------------------+
|  NAVBAR (transparent -> solid on scroll)    |
+--------------------------------------------+
|  HERO (navy bg, grain overlay)             |
|    Overline badge                          |
|    Satoshi Black headline                  |
|    General Sans subtext                    |
|    CTA row (amber primary + ghost)         |
|    Product preview (Kanban mockup)         |
|    Soccer field pattern (decorative)       |
+--------------------------------------------+
|  PROBLEM (light bg)                        |
|    "Sound familiar?" empathy copy          |
|    3 pain point cards (spreadsheet,        |
|     missed follow-ups, NCSA cost)          |
+--------------------------------------------+
|  FEATURES (alternating light/dark)         |
|    Bento grid — 5-6 features               |
|    Card spotlight hover effect             |
|    Icons + titles + descriptions           |
+--------------------------------------------+
|  PRICING (light bg)                        |
|    Free vs Pro comparison                  |
|    Annual/monthly toggle                   |
|    Amber highlight on Pro                  |
+--------------------------------------------+
|  SOCIAL PROOF (navy bg, grain)             |
|    Testimonial carousel                    |
|    Trust indicators                        |
+--------------------------------------------+
|  FINAL CTA (light bg, amber accent)       |
|    "Ready to get organized?"               |
|    Email capture / CTA button              |
+--------------------------------------------+
|  FOOTER (navy-950 bg)                      |
|    4-column grid -> stacked mobile         |
|    Logo, links, legal, social              |
+--------------------------------------------+
```

---

*This design system is the source of truth for all CommitKit UI. No freestyle. No defaults. Every pixel uses these tokens.*
