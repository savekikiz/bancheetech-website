---
version: alpha
name: "Algolia"
website: "https://www.algolia.com"
description: >-
  A hosted-search platform whose marketing site opens on a near-black hero washed with a violet-to-cobalt gradient and carries an 80px Sora display headline in weight 700 with -4% tracking; the electric Algolia blue is held in reserve as a single primary CTA fill and a handful of inline link accents rather than painting the canvas. Below the fold the page inverts to a warm grey body where Inter takes over for every running paragraph, hairline-bordered card surfaces in near-white grey carry the ROI metrics and customer evidence, and Sora returns only for the big numeric proof points. The pairing of Sora-as-display plus Inter-as-body is the structural typographic move; one near-black gradient hero plus a white editorial body is the structural layout move.

seo:
  title: "Algolia Design System for React — electric blue voltage, Sora display, Inter body, 19 components"
  metaDescription: "Algolia's marketing-site design system as a DESIGN.md file. Electric Algolia blue held as a single CTA voltage, Sora 80px display at weight 700, Inter body, near-black gradient hero canvas. Tokens for React, Next.js, and AI coding tools."
  highlights:
    - "Scarce blue voltage — electric Algolia blue appears only 48 times across the captured page, reserved for the single primary CTA fill and a handful of inline link accents rather than painting the hero canvas"
    - "Gradient hero, white body — the above-fold opens on a near-black canvas washed with a violet-to-cobalt gradient, then the entire below-fold page returns to a warm grey editorial surface"
    - "Sora plus Inter — display headlines run Sora at 80px weight 700 with -4% tracking, body copy runs Inter at 16-18px weight 400; two voices, one each for shout and speak"
    - "Hairline-dominant chrome — a single near-white grey #e5e7eb carries 1151 of the captured border occurrences, doing the work that a shadow tier would carry on a typical dashboard product"
    - "Metric-led proof — the 80px Sora numerals reappear below the fold rendering the ROI numbers (213%, etc) as the dominant editorial moment of the body"
  tags:
    - "AI & LLM Platforms"
    - "Developer Tools & IDEs"
  lastUpdated: "2026-05-18"
  author:
    name: "Dov Azencot"
    url: "https://x.com/dovazencot"
  opening: |
    Algolia's marketing site reads in two halves, joined at the fold. Above it sits a near-black hero washed left-to-right with a violet-to-cobalt gradient, the wordmark "Agentic. Generative. Search." stacked in 80px Sora at weight 700 with -4% tracking, and a single electric-blue CTA pill beneath. Below the fold the page flips entirely: a white editorial body where Inter takes over for every running paragraph, where hairline-bordered cards in near-white grey carry the ROI numerals, and where the blue voltage recedes to inline link accents. Where Elasticsearch's docs feel like infrastructure paperwork and where Meilisearch leans on a cartoonish lavender, Algolia treats the page like an editorial spread — a gradient title-page on top, hairline-ruled editorial body below.

    The DESIGN.md file packages the system into a machine-readable spec for React and AI coding tools. Inside: 17 color tokens drawn from a near-black hero canvas, a white body floor, and the held-in-reserve electric blue voltage; 13 typography tokens split between Sora (display, headings, big proof-point numerals) and Inter (body, captions, nav, button labels); 7 radius tokens centered on the 8-12px tier with a full pill for the primary CTA and a circle for avatar chips; 8 spacing tokens on a 4-8-16-24px base; and 20 component definitions covering the gradient hero, the electric-blue primary pill, the hairline-bordered metric card, the dark feature-tile, the top-nav, and the dropdown search input.

    Feed this file to Claude or Cursor and it reproduces Algolia's specific moves: the gradient near-black hero with white display type, the electric-blue CTA held in reserve, the white body with hairline cards, and the Sora-on-Inter typographic split. The tokens resolve directly without invention. The one move worth borrowing only with caution is the half-and-half page rhythm — it works when the hero earns the chromatic moment and the body keeps its head down, but a less-confident product ends up looking like two unrelated sites stitched together at the fold.
  related:
    - href: "/design"
      title: "Browse all design systems"
      description: "The full directory of DESIGN.md files on shadcn.io, with live mockups for each."
    - href: "https://www.algolia.com"
      title: "Algolia — official site"
      description: "Algolia's public marketing site — the source of truth for the live tokens captured in this file."
    - href: "https://github.com/google-labs-code/design.md"
      title: "The DESIGN.md specification"
      description: "Google Labs' open spec for machine-readable design system files — the format this page is built on."
  questions:
    - id: "primary-color"
      title: "What is Algolia's primary brand color?"
      answer: "Algolia's brand voltage is the electric Algolia blue, declared on the page as the brand-primary hex and shipped as the favicon and theme-color meta tag. It appears 48 times in the captured marketing surface — 23 as text on inline links, 20 as the background fill for the single primary CTA pill, 3 as a border, and 2 inside drop-shadows. Unlike Stripe's indigo voltage which carries the gradient mesh that paints the hero, Algolia holds the blue in reserve and lets a violet-to-cobalt gradient carry the hero canvas instead. The single blue CTA pill is the load-bearing brand moment on the page, and the inline link tone in the body is the only secondary surface that carries the same chromatic signal."
    - id: "typography"
      title: "What typefaces does Algolia use, and what should I use as a substitute?"
      answer: "Algolia runs two typefaces. Sora carries every display, heading, and big proof-point numeral — the hero h1 sits at 77px in weight 700 with -4% letter-spacing, the in-body display tier at 80px in weight 900, section h4 labels at 21px in weight 600. Inter carries every running paragraph, the body caption tier, the nav, and the button labels — 16px and 18px in weight 400 are the workhorse sizes. Both are open-source via Google Fonts, so the substitute is the typeface itself; if a closer-spaced display alternative is needed, Geist Sans at 95% line-height tracks comparably to Sora at the hero size, and system-ui transfers acceptably for Inter at body sizes without retuning."
    - id: "gradient-hero"
      title: "Why does Algolia's hero use a violet-to-cobalt gradient instead of solid blue?"
      answer: "The above-fold hero washes from a saturated violet on the right toward a cobalt blue on the left, finishing into the near-black canvas at the edges. The gradient does the chromatic work that the brand blue would otherwise carry, freeing the electric-blue CTA pill to read as the single hottest element on the page. If the entire hero were brand-blue, the CTA would disappear into its own background; the gradient creates the contrast budget the single voltage moment depends on. The same gradient logic recurs in product-domain illustrations below the fold, where the violet-to-cobalt wash returns as the inner glow on feature tiles."
    - id: "white-not-white"
      title: "What is the canvas color of the body below the fold?"
      answer: "The body canvas below the fold is pure white rather than the warm cream tones brands like Cloudflare and Anthropic favor. Algolia surrounds it with near-white grey hairline borders — 1151 of the captured border occurrences — and lets the warmth come from the cards rather than from the canvas itself. The choice keeps the body reading as a documentation surface rather than as an editorial one, which matches Algolia's positioning as a dev-platform brand whose customers reach the marketing site already evaluating an API. Switching the body floor to a warmer off-white would soften the contrast between the cards and the surface, making the hairline borders read as decorative rather than as the load-bearing elevation device they are."
    - id: "use-in-project"
      title: "Can I use this DESIGN.md to build my own React search-platform marketing site?"
      answer: "Yes — the file is designed to be fed into Claude, Cursor, or any AI tool that reads structured design tokens. The agent will reproduce Algolia's specific moves: the near-black gradient hero with Sora display in white, the held-in-reserve electric blue CTA pill, the warm-grey hairline-bordered body, and the Sora-on-Inter typographic split. You can also reference the tokens directly: every hex, font name, radius, and spacing value is a quoted scalar you can paste into Tailwind config or CSS variables. The one move worth treating as optional is the gradient hero canvas — it only works when your headline can stand alone in 80px display without supporting illustration; weaker copy needs more chrome and a flatter hero serves it better."

mockups:
  - "marketing-hero"
  - "dashboard-card-grid"

colors:
  primary: "#003dff"
  secondary: "#1e59ff"
  tertiary: "#b75aff"
  accent-ring: "#3b82f6"
  ink: "#23263b"
  ink-deep: "#000000"
  ink-soft: "#36395a"
  ink-muted: "#484c7a"
  ink-secondary: "#374151"
  canvas: "#ffffff"
  surface-1: "#f2f2f2"
  surface-deep: "#000033"
  hairline: "#e5e7eb"
  hairline-cool: "#d6d6e7"
  link-active: "#2563eb"
  caption-muted: "#9698c3"
  shadow-cool: "#c7d2fe"

typography:
  display-xxl:
    fontFamily: "Sora, sans-serif"
    fontSize: 80px
    fontWeight: 900
    lineHeight: 88px
    letterSpacing: "-3.2px"
  display-xl:
    fontFamily: "Sora, sans-serif"
    fontSize: 77px
    fontWeight: 700
    lineHeight: 80.85px
    letterSpacing: "-4px"
  display-lg:
    fontFamily: "Sora, sans-serif"
    fontSize: 48px
    fontWeight: 700
    lineHeight: 48px
    letterSpacing: "-1px"
  display-md:
    fontFamily: "Sora, sans-serif"
    fontSize: 42px
    fontWeight: 700
    lineHeight: 55px
    letterSpacing: "-0.42px"
  heading-md:
    fontFamily: "Sora, sans-serif"
    fontSize: 21px
    fontWeight: 600
    lineHeight: 28px
    letterSpacing: 0
  heading-sm:
    fontFamily: "Sora, sans-serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: 0
  display-light:
    fontFamily: "Sora, sans-serif"
    fontSize: 22px
    fontWeight: 300
    lineHeight: 33px
    letterSpacing: "-0.55px"
  body-lg:
    fontFamily: "Inter, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 29.25px
    letterSpacing: 0
  body-md:
    fontFamily: "Inter, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0
  body-sm:
    fontFamily: "Inter, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0
  label-upper:
    fontFamily: "Inter, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: 0
  heading-inter:
    fontFamily: "Inter, sans-serif"
    fontSize: 18px
    fontWeight: 700
    lineHeight: 28px
    letterSpacing: 0
  button-md:
    fontFamily: "Sora, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0

rounded:
  none: "0px"
  xs: "2px"
  sm: "6px"
  md: "8px"
  lg: "12px"
  full: "9999px"
  circle: "50%"

spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  base: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "40px"
  3xl: "64px"

components:
  hero-section:
    backgroundColor: "{colors.ink-deep}"
    textColor: "{colors.canvas}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: "96px 24px"
  hero-heading:
    backgroundColor: transparent
    textColor: "{colors.canvas}"
    typography: "{typography.display-xl}"
    padding: "0px"
  metric-display:
    backgroundColor: transparent
    textColor: "{colors.canvas}"
    typography: "{typography.display-xxl}"
    padding: "0px"
  section-heading:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
  body-paragraph:
    backgroundColor: transparent
    textColor: "{colors.ink-muted}"
    typography: "{typography.body-lg}"
    padding: "8px 0px"
  body-paragraph-small:
    backgroundColor: transparent
    textColor: "{colors.ink-secondary}"
    typography: "{typography.body-md}"
  label-uppercase:
    backgroundColor: transparent
    textColor: "{colors.ink-muted}"
    typography: "{typography.label-upper}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.canvas}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
    height: "44px"
    border: "0"
  button-primary-hover:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.canvas}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
    height: "44px"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
    height: "44px"
    borderColor: "{colors.hairline}"
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "12px 32px"
    height: "64px"
    borderColor: "{colors.hairline}"
  nav-link:
    backgroundColor: transparent
    textColor: "{colors.ink-secondary}"
    typography: "{typography.body-md}"
    padding: "8px 12px"
  card-hairline:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "29px 40px 29px 24px"
    borderColor: "{colors.hairline}"
  card-surface:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "32px"
  card-dark:
    backgroundColor: "{colors.surface-deep}"
    textColor: "{colors.canvas}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "32px"
  link-inline:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
  link-inline-active:
    backgroundColor: transparent
    textColor: "{colors.link-active}"
    typography: "{typography.body-md}"
  search-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
    height: "44px"
    borderColor: "{colors.hairline}"
  avatar-chip:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.circle}"
    height: "40px"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.body-sm}"
    padding: "48px 24px"
    borderColor: "{colors.hairline}"
---

## Overview

Algolia's marketing site reads as two halves stitched at the fold, with the join itself doing structural work. **Gradient title-page, hairline editorial.** The above-fold hero is a near-black canvas (`{colors.ink-deep}` — #000000) washed left-to-right with a violet-to-cobalt gradient (`{colors.tertiary}` — #b75aff softening into `{colors.secondary}` — #1e59ff), carrying the three-word wordmark "Agentic. Generative. Search." stacked at 80px Sora in weight 700 with -4% letter-spacing. A single electric-blue CTA pill (`{colors.primary}` — #003dff) sits beneath in the held-in-reserve position. Below the fold the page inverts entirely: a white canvas (`{colors.canvas}` — #ffffff), hairline-bordered cards in near-white grey (`{colors.hairline}` — #e5e7eb), the blue receding to inline link accents and the gradient returning only inside product-domain illustrations.

Where Elasticsearch's docs feel like infrastructure paperwork, and where Meilisearch leans on a cartoonish lavender, Algolia treats the page like an editorial spread — a gradient cover image up top, hairline-ruled editorial body below. The half-and-half rhythm is the structural device. The hero earns the chromatic moment because it is one display headline, one CTA, one ambient gradient; the body keeps its head down because it is metric cards, customer evidence, and product-domain rows. Where Stripe's indigo voltage paints the entire mesh-gradient hero, Algolia's electric blue is held in reserve as the single most-tappable element on the page. The contrast budget depends on the gradient doing the chromatic work that the brand blue would otherwise carry.

Typography splits the labor across two open-source families. **Sora carries display and shout** — the 80px hero, the 80px proof-point numerals (213% ROI sits in the same display tier as the headline), the 48px section displays, the 21px h4 sub-headings. **Inter carries running speech** — 18px body paragraphs in `{colors.ink-muted}`, 16px nav links, 14px captions, 12px uppercase labels. Sora-as-display plus Inter-as-body is the typographic split the rest of the system relies on; the two families never trade roles. There is no third voice — no monospace tier in the captured surface, no serif moment, no script accent.

**Key Characteristics:**
- Scarce blue voltage (`{colors.primary}` — #003dff) reserved for the single primary CTA pill and inline link accents — 48 total occurrences in the captured page, 23 as text, 20 as background.
- Near-black gradient hero canvas (`{colors.ink-deep}` washing into `{colors.surface-deep}` — #000033) carrying the violet-to-cobalt gradient (`{colors.tertiary}` and `{colors.secondary}`); no flat hero color anywhere in the system.
- White (`{colors.canvas}` — #ffffff) below-fold body canvas; the warmth comes from hairline cards rather than from the page floor.
- Sora-as-display, Inter-as-body — the two-family split is the structural typographic move; display headlines top out at 80px in weight 900, body paragraphs sit at 18px in weight 400.
- Single hairline tone (`{colors.hairline}` — #e5e7eb) carries 1151 of the captured border occurrences; there is essentially no second hairline color in the system.
- Metric-led editorial — the 80px Sora display tier reappears below the fold to render the ROI numerals (213%, etc.) as the dominant typographic moment of the body.
- Pill-shaped primary CTA only — every other surface uses small-step rounding (2 / 6 / 8 / 12px) or a flat 0px edge.
- 16px base spacing unit. 64px and 32px section padding tokens carry the editorial rhythm below the fold.

## Colors

### Brand

- **Algolia Blue** (`{colors.primary}` — #003dff): frequency 48. Used as text (23), bg (20), border (3), shadow (2). The held-in-reserve voltage — fills the single primary CTA pill on the hero, carries inline link text on the body, and shows up as the favicon and meta theme-color. This is the load-bearing brand moment on the page.
- **Cobalt Secondary** (`{colors.secondary}` — #1e59ff): frequency 14, all inside gradients. The cooler end-stop of the hero's left-to-right gradient and the inner glow on product-domain illustrations below the fold.
- **Violet Tertiary** (`{colors.tertiary}` — #b75aff): frequency 20, all inside gradients. The warmer end-stop of the hero gradient — the violet wash that paints the right edge of the above-fold canvas.
- **Ring Blue** (`{colors.accent-ring}` — #3b82f6): frequency 34, mostly inside gradients and the Tailwind ring-color variable. A softer cobalt used for focus rings and decorative gradient stops; never a brand-load-bearing surface.

### Text

- **Ink** (`{colors.ink}` — #23263b): frequency 39. Used as text (38) and border (1). The dominant in-body text color — section headings, h2 metric labels, large body-paragraph lead-ins. A near-black with a faint violet undertone, never pure black on the body.
- **Ink Deep** (`{colors.ink-deep}` — #000000): frequency 964. Used as text (913), shadow (33), border (18). The hero canvas color and the dominant text color when text needs maximum weight; carries every shadow ink on the page.
- **Ink Soft** (`{colors.ink-soft}` — #36395a): frequency 8 as text. A secondary navy tone used inside long-form body where ink would feel too heavy.
- **Ink Muted** (`{colors.ink-muted}` — #484c7a): frequency 9 — text (4), border (5). The body-paragraph mid-tone, also used as the muted footnote color and the body-paragraph default fill below the fold.
- **Ink Secondary** (`{colors.ink-secondary}` — #374151): frequency 70 as text. A warmer mid-grey running through the nav links, secondary captions, and dropdown labels — the workhorse muted-text tone.

### Surface

- **Canvas** (`{colors.canvas}` — #ffffff): frequency 159 — bg (54), text (101), border (4). Pure white, the body floor below the fold and the inside-card surface throughout.
- **Surface-1** (`{colors.surface-1}` — #f2f2f2): frequency 20, all as background. The near-white grey used for avatar chips, code-strip surfaces, and secondary card backgrounds below the fold.
- **Surface Deep** (`{colors.surface-deep}` — #000033): frequency 7 as background. The deep-navy used as the dark-mode card fill on the "Total Economic Impact" panel and on the gradient-edged feature card.

### Hairline

- **Hairline** (`{colors.hairline}` — #e5e7eb): frequency 1152 — 1151 as border. The single dominant hairline tone; carries essentially every card outline, every input outline, every divider rule in the captured page. There is no second hairline color in the system.
- **Hairline Cool** (`{colors.hairline-cool}` — #d6d6e7): frequency 14 — border (10), text (4). A slightly cooler grey-violet hairline used inside the gradient-edged feature card to mark internal divisions; not interchangeable with the dominant hairline.

### Inline link

- **Link Active** (`{colors.link-active}` — #2563eb): frequency 10 as text. The visited / active state for inline links — a slightly darker cobalt than the primary blue.
- **Caption Muted** (`{colors.caption-muted}` — #9698c3): frequency 1 as text. A pale violet-grey used on the footer caption row beneath the wordmark.
- **Shadow Cool** (`{colors.shadow-cool}` — #c7d2fe): frequency 2, all inside shadows. A pale lavender used as the soft shadow tint behind the dropdown-search input — the only tinted shadow in the system.

## Typography

### Font Families

The system runs two open-source voices: **Sora** for every display, heading, and big proof-point numeral; **Inter** for every body paragraph, caption, nav label, and form control. Fallbacks walk to `sans-serif` on both — no system-ui safety stack on the captured surfaces. The button-md token uses `"Sora, Arial, sans-serif"` as the explicit primary-CTA fallback, a deliberate choice that the rest of the Sora tier does not share.

The split is the distinguishing typographic move. Sora-on-Inter pairs a contemporary slightly-condensed geometric sans for shout with a humanist sans for speak; both are Google Fonts so the substitute is the typeface itself.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xxl}` | 80px | 900 | 88px | -3.2px (-4%) | ROI proof-point numerals (213%, etc), big in-body display |
| `{typography.display-xl}` | 77px | 700 | 80.85px | -4px | Hero h1 ("Agentic. Generative. Search.") |
| `{typography.display-lg}` | 48px | 700 | 48px | -1px | Below-fold section h2 |
| `{typography.display-md}` | 42px | 700 | 55px | -0.42px | Section h2 ("Powering AI retrieval across use cases") |
| `{typography.heading-md}` | 21px | 600 | 28px | 0 | h4 / feature-card title |
| `{typography.heading-sm}` | 20px | 400 | 28px | 0 | h2 sub-section title |
| `{typography.display-light}` | 22px | 300 | 33px | -0.55px | Hero lead paragraph (Sora 300 — the only weight 300 on the page) |
| `{typography.body-lg}` | 18px | 400 | 29.25px | 0 | Default body paragraph |
| `{typography.body-md}` | 16px | 400 | 24px | 0 | Workhorse running text |
| `{typography.body-sm}` | 14px | 400 | 20px | 0 | Caption rows, footnote text |
| `{typography.label-upper}` | 12px | 400 | 16px | 0 | Small-caps section labels (uppercase via CSS) |
| `{typography.heading-inter}` | 18px | 700 | 28px | 0 | Body-tier h2 labels ("Learn") rendered in Inter rather than Sora |
| `{typography.button-md}` | 16px | 400 | 24px | 0 | Primary and secondary button labels (Sora) |

### Principles

Display weight ranges 700-900, never below 700 for the Sora display tier. The hero h1 at 77px / 700 with -4px tracking and the in-body display numerals at 80px / 900 are both bold-and-tracked-tight — confidence by weight and tracking simultaneously, the inverse of Stripe's weight-300 restraint. Body paragraphs sit at weight 400 in Inter; there is no weight-500 body tier and no weight-600 body emphasis. Bold-body emphasis when needed falls to weight 700 in either family.

The one exception worth noting is the hero lead paragraph, set in Sora at weight 300 — the only weight-300 instance anywhere on the page. The choice softens the transition from the 77px hero display to the 16px body running text immediately beneath.

### Note on Font Substitutes

Both Sora and Inter are open-source via Google Fonts; the substitute is the typeface itself. If a closer-spaced display alternative is needed for the 77px hero tier, Geist Sans at 95% line-height tracks comparably; for the Inter body tier, system-ui transfers acceptably at 16-18px without retuning.

## Layout

### Spacing System

- **Base unit:** 16px — the dominant gap value, appearing 73 times in the captured page.
- **Tokens:** `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.base}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.2xl}` 40px · `{spacing.3xl}` 64px.
- **Section padding (vertical):** ~96px on the hero band; below the fold the rhythm tightens to ~64px between major sections.
- **Card internal padding:** `{spacing.xl}` (32px) for `{component.card-surface}` and `{component.card-dark}`; `{component.card-hairline}` uses asymmetric 29×40×29×24px to set the metric-card content off-center.
- **Top-nav padding:** `{spacing.md}` (12px) vertical, `{spacing.xl}` (32px) horizontal.

### Grid & Container

- **Max content width:** ~1080px on display headlines and feature rows; ~1280px on the platform diagram and customer logo band.
- **Hero block:** full-bleed gradient canvas with the display headline left-aligned to the ~720px text column and the hero illustration (a person holding a laptop with a search overlay) anchored on the right.
- **Below-fold sections:** centered displays at ~1080px with the metric proof-point row and the 4-up product cards splitting into equal columns separated by 1px hairline rules.
- **Card grid:** 4-up below the platform-impact band, each card sized to roughly 240×320px with 32px internal padding.

### Rhythm

The page alternates between **gradient/dense and white/breathing** bands. The hero is dark-and-illustrated (gradient canvas, full illustration). Section 2 (use-cases) returns to white-and-typographic (single column, no surface fill). The ROI band is dark-and-numeric (the Forrester TEI panel sits on `{colors.surface-deep}`). The 4-up product cards are white-and-bordered. The footer is white-and-quiet. This dark/light alternation is the page's structural device.

## Elevation

The system has essentially **no shadow tier above hairlines**. The captured page has 33 occurrences of `#000000` used as shadow ink and 2 occurrences of `{colors.shadow-cool}` used as a soft tint behind the dropdown-search input — almost every other elevation moment is carried by the hairline border `{colors.hairline}` instead of by a layered shadow.

- **Flat (no shadow):** hero, body bands, feature cells, footer — 95% of surfaces.
- **Hairline outlines:** `{colors.hairline}` (1151 captured borders) carries the work that shadows would carry on a typical dashboard product. Card outlines, input outlines, divider rules.
- **Dropdown elevation:** the algolia-autocomplete search panel uses an `rgba(35,38,59,0.15)` 16-pixel shadow plus the lavender `{colors.shadow-cool}` tint — the only meaningfully-elevated component on the page.
- **Dark-card edge:** the gradient-edged "Total Economic Impact" card on `{colors.surface-deep}` uses no shadow at all; the dark fill against the white body does the elevation work.

## Shapes

The radius scale is **small-step plus pill**:

- `{rounded.none}` 0px — section bands and the hero block use a flat edge.
- `{rounded.xs}` 2px — small chips and the algolia-autocomplete result cells.
- `{rounded.sm}` 6px (10 occurrences) — icon buttons, secondary surfaces, dropdown items.
- `{rounded.md}` 8px (24 occurrences) — input fields, smaller cards, the search-input outline.
- `{rounded.lg}` 12px (26 occurrences) — the default rounding for feature cards and metric panels below the fold.
- `{rounded.full}` 9999px — the primary CTA pill (`{component.button-primary}`) and the secondary CTA. Only buttons take the pill treatment.
- `{rounded.circle}` 50% — avatar chips in the customer-logo strip.

The 12px tier carries most card surfaces; 8px carries inputs and smaller surfaces; the pill is reserved exclusively for buttons. There is no 16 / 20 / 24px middle tier — the scale tops out at 12px before jumping to the full pill.

## Components

**`hero-section`** — Near-black `{colors.ink-deep}` canvas washed with the violet-to-cobalt gradient, 96×24px padding, no border-radius. Holds the hero h1 in white at `{typography.display-xl}`, a single Sora-300 lead paragraph beneath, and the electric-blue CTA pill anchored left.

**`hero-heading`** — White `{colors.canvas}` text on the gradient hero, Sora 77px / 700, -4px tracking. The display tier — confidence by weight, tracking, and chromatic restraint simultaneously.

**`metric-display`** — White text rendered at `{typography.display-xxl}` (80px / 900). Used for the ROI proof-point numerals (213% sits in this tier as the dominant typographic moment of the body); the only weight-900 surface in the system.

**`section-heading`** — Ink `{colors.ink}` text at `{typography.display-lg}` (48px / 700, -1px tracking). The below-fold section h2 — sits on the white body canvas.

**`body-paragraph`** — Ink-muted `{colors.ink-muted}` text at `{typography.body-lg}` (18px / 400) in Inter. Default body paragraph; 8px vertical padding to set the lead off the heading.

**`body-paragraph-small`** — Ink-secondary `{colors.ink-secondary}` text at `{typography.body-md}` (16px / 400) in Inter. Workhorse running text for secondary explanations.

**`label-uppercase`** — Ink-muted text at `{typography.label-upper}` (12px / 400) in Inter, uppercased via CSS. Section labels above headings; 37 occurrences across the page.

**`button-primary`** — The signature CTA. Electric-blue `{colors.primary}` fill, white text, fully-rounded `{rounded.full}` pill, 12×24px padding, 44px height, weight 400 Sora. No border. The single brand-load-bearing moment on the page.

**`button-primary-hover`** — Background steps to `{colors.secondary}` (#1e59ff) — the cobalt end-stop of the hero gradient — with white text. The press state holds the pill geometry.

**`button-secondary`** — White `{colors.canvas}` fill, ink text, 1px hairline border, `{rounded.full}` pill, same 12×24 / 44px geometry as the primary. Used for "Watch demo" and "Learn more" secondary CTAs.

**`top-nav`** — White `{colors.canvas}` surface, 64px height, 1px bottom hairline border. Algolia wordmark flush left, product links (Products / Customers / Resources / Pricing) center, "Contact us" plus the primary-pill CTA flush right.

**`nav-link`** — Ink-secondary `{colors.ink-secondary}` text at `{typography.body-md}` (16px Inter / 400), 8×12px padding. Transparent background; hover state thickens the text weight without changing color.

**`card-hairline`** — White surface, 1px `{colors.hairline}` border, `{rounded.lg}` 12px radius, asymmetric 29×40×29×24px padding. The default metric / feature card below the fold; holds an icon, a heading-md title, and a 1-2 line body paragraph.

**`card-surface`** — Light-grey `{colors.surface-1}` fill, ink text, `{rounded.lg}` 12px radius, 32px padding. Secondary card surface used inside the use-cases band where the white-on-white treatment would feel under-defined.

**`card-dark`** — Surface-deep `{colors.surface-deep}` fill (#000033), white text, `{rounded.lg}` 12px radius, 32px padding. The Forrester TEI dark panel and the gradient-edged feature card — the in-body application of the hero canvas treatment.

**`link-inline`** — Electric-blue `{colors.primary}` text at `{typography.body-md}`. The inline link color across the body; one of the few non-CTA surfaces that carries the brand voltage.

**`link-inline-active`** — Slightly darker cobalt `{colors.link-active}` (#2563eb) text. The visited / active state.

**`search-input`** — White surface, ink text, 1px hairline border, `{rounded.md}` 8px radius, 12×16px padding, 44px height. The dropdown algolia-autocomplete trigger uses the same geometry plus the lavender `{colors.shadow-cool}` soft shadow.

**`avatar-chip`** — Light-grey `{colors.surface-1}` fill, ink text, fully circular `{rounded.circle}` 50% radius, 40px height. Used in the customer testimonial cards beneath the logo wall.

**`footer`** — White canvas, ink-muted text at `{typography.body-sm}` (14px Inter), 48×24px padding, top hairline border. The footer continues the body canvas; no surface contrast from the page floor above it.

## Do's and Don'ts

**Do** hold the electric blue `{colors.primary}` (#003dff) as a single-voltage CTA tone. The system has one primary pill on the hero and inline link accents in the body — multiplying the blue across feature cards or section backgrounds would dilute the only chromatic brand signal that does load-bearing work.

**Do** let the violet-to-cobalt gradient (`{colors.tertiary}` softening into `{colors.secondary}`) carry the hero canvas instead of painting the hero in flat brand blue. The gradient creates the contrast budget the single CTA pill depends on.

**Do** keep Sora on display and Inter on body. The split is the structural typographic move; running Sora as the body paragraph (or Inter as the 80px hero) flattens the spread/dek rhythm the page depends on.

**Do** use `{colors.hairline}` (#e5e7eb) for every card outline and divider rule. The system is mono-hairline — 1151 of the 1152 captured border occurrences use this single color, and introducing a second hairline tone reads as a system fault.

**Don't** render the body canvas in a warm cream or a near-white grey. Algolia's body floor is pure `{colors.canvas}` (#ffffff); the warmth comes from the cards, not from the canvas. Softening the floor turns the page into a SaaS marketing surface rather than the documentation-adjacent editorial it reads as.

**Don't** apply `{rounded.full}` to anything except the primary and secondary CTAs. The pill is button-only in this system; pill-rounded cards or pill-rounded badges break the small-step + pill binary the radius scale relies on.

**Don't** introduce a third typeface — no monospace, no serif, no display-script. The Sora-on-Inter pair does the entire typographic job across 13 declared tokens spanning 12px label to 80px display; a third voice would force a re-tier of the existing two and break the shout/speak split.

**Don't** apply the dark `{colors.surface-deep}` (#000033) card fill outside the two in-body uses (the Forrester TEI panel and the gradient-edged feature card). The dark card is a scarce typographic moment — using it for every feature card would erase the alternating dark/light rhythm that gives the body its structure.

## Known Gaps

- **Hover, focus, and active states:** documented for `{component.button-primary-hover}` and `{component.link-inline-active}` only; the full state matrix (focus rings beyond the Tailwind ring-color variable, disabled tints, error states) is not exposed on the captured marketing surfaces.
- **Form input error states:** `{component.search-input}` carries the resting and dropdown-open states; error / validation styling lives inside the product Dashboard and is not exposed on the marketing site.
- **Dark mode:** the captured marketing site is light-only below the fold. The Dashboard product surface carries a dark variant that is not represented here.
- **Motion:** the hero gradient is static in the captured surface, but the production page applies a slow ambient drift on the gradient stops and a parallax on the right-side illustration. Easing curves and stop-position timing are not represented.
- **Product surfaces:** this DESIGN.md captures the marketing site only. The Algolia Dashboard (`dashboard.algolia.com`), the InstantSearch / autocomplete component libraries, and the documentation site (`algolia.com/doc`) carry their own surface tokens and component sets that are not represented here.
- **Sub-brand palettes:** Algolia ships several product-domain illustrations on this page (Search, Recommend, NeuralSearch) that use related-but-distinct gradient stops. These are decorative rather than tokenized; the brand voltage, the gradient, and the structural greys are the only color systems captured.
