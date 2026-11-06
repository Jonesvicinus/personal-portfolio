---
name: Jones Vicinus — Portfolio
description: A personal engineering portfolio built for brand recall and technical credibility.
colors:
  structural-navy: "#0F2D5E"
  ink-black: "#111111"
  blueprint-white: "#FFFFFF"
  blueprint-paper: "#F5F5F5"
  steel-mist: "#777777"
  pale-rule: "#BBBBBB"
  draft-line: "#E0E0E0"
typography:
  display:
    fontFamily: "'DM Serif Display', Georgia, serif"
    fontSize: "clamp(2rem, 5vw, 2.5rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "0.02em"
  headline:
    fontFamily: "'DM Serif Display', Georgia, serif"
    fontSize: "clamp(1.5rem, 3.5vw, 2rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "normal"
  title:
    fontFamily: "'DM Sans', system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.12em"
  body:
    fontFamily: "'DM Sans', system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'DM Sans', system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.1em"
rounded:
  none: "0"
  sm: "2px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "80px"
components:
  button-primary:
    backgroundColor: "{colors.structural-navy}"
    textColor: "{colors.blueprint-white}"
    rounded: "{rounded.none}"
    padding: "10px 28px"
  button-primary-hover:
    backgroundColor: "{colors.ink-black}"
    textColor: "{colors.blueprint-white}"
    rounded: "{rounded.none}"
    padding: "10px 28px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.structural-navy}"
    rounded: "{rounded.none}"
    padding: "10px 28px"
  button-ghost-hover:
    backgroundColor: "{colors.structural-navy}"
    textColor: "{colors.blueprint-white}"
    rounded: "{rounded.none}"
    padding: "10px 28px"
  chip:
    backgroundColor: "{colors.blueprint-paper}"
    textColor: "{colors.steel-mist}"
    rounded: "{rounded.sm}"
    padding: "4px 10px"
  card:
    backgroundColor: "{colors.blueprint-white}"
    textColor: "{colors.ink-black}"
    rounded: "{rounded.none}"
    padding: "{spacing.md}"
---

# Design System: Jones Vicinus — Portfolio

## 1. Overview

**Creative North Star: "The Architecture Review"**

This system is built for authority and recall — the design equivalent of a well-prepared engineering review: confident command of space, structural clarity, nothing wasted. Every element earns its position not through decoration but through weight. Sections fill the viewport with presence; typography drives hierarchy through scale and contrast, not color or flourish. Motion reveals structure rather than entertains — scroll-anchored, purposeful, like a blueprint unfolding.

The palette is near-monochrome with a single load-bearing accent. Structural Navy (#0F2D5E) does the work that in weaker portfolios gets diluted across five colors; its rarity is its authority. The typographic pairing — DM Serif Display with DM Sans — balances editorial confidence with technical legibility. Headings command attention; body text moves fast and gets out of the way.

This system explicitly rejects: cluttered or resume-dump portfolios, warm or casual personal site aesthetics, generic SaaS-cream templates that could be swapped onto any startup's landing page, overly decorative patterns that undermine technical credibility, and timid layouts that apologize for taking up space.

**Key Characteristics:**
- Near-monochrome palette anchored by a single structural accent
- Serif + sans pairing: editorial authority, technical readability
- Zero-radius corners on structural elements — sharpness signals precision
- Choreographed, scroll-anchored motion: reveals, not animations
- Section-scale thinking: each viewport is a composition, not a scroll fragment
- Flat by default; depth communicated through typographic scale and spatial contrast

## 2. Colors: The Structural Palette

One accent. The rest is neutral discipline.

### Primary
- **Structural Navy** (#0F2D5E): The single accent color. Applied to active nav states, primary button fills, tag outlines on hover, stat values in the hero, and form focus rings. Its restraint is its authority — when it appears, the eye knows this matters.

### Neutral
- **Ink Black** (#111111): Primary text. All body copy, headings in neutral contexts, and high-importance labels. Not pure black — a slight warmth keeps it from feeling harsh.
- **Blueprint White** (#FFFFFF): Primary background surface. The canvas everything is set against.
- **Blueprint Paper** (#F5F5F5): Secondary surface. Used for alternating section backgrounds, chip fills, and subtle contrast from white.
- **Steel Mist** (#777777): Muted text. Secondary labels, metadata, timestamps, supporting copy, chip text. The mid-gray voice.
- **Pale Rule** (#BBBBBB): Faint text and tertiary separators. Used sparingly — only where information is genuinely least-important.
- **Draft Line** (#E0E0E0): Borders and dividers. Card outlines, section separators, input strokes at rest, the nav bottom border.

**The One Voice Rule.** Structural Navy appears on no more than 15% of any screen's surface area. Never use it as a background fill for full-width sections, decorative block elements, or typographic embellishment. Its presence is a signal; dilute it and the signal collapses into noise.

**The Warmth Prohibition.** No warm-tinted neutrals, amber highlights, tan surfaces, or soft beige backgrounds. This system is cool and precise. Any brown or yellow hue is out of register.

## 3. Typography

**Display Font:** DM Serif Display (Georgia, serif fallback)
**Body Font:** DM Sans (system-ui, sans-serif fallback)

**Character:** An editorial serif brings formal authority and presence to headings; a geometric sans keeps body text clean and technically legible. The pairing reads as both precise and intentional — never an accident, never a default.

### Hierarchy
- **Display** (400, clamp(2rem, 5vw, 2.5rem), line-height 1.1, letter-spacing 0.02em): Hero name and top-level section anchors. Set in uppercase. These are the load-bearing structural elements of each scroll section.
- **Headline** (400, clamp(1.5rem, 3.5vw, 2rem), line-height 1.2): Sub-section headings and card titles. Same face, smaller scale — still editorial, still commanding.
- **Title** (DM Sans 600, 0.8125rem, line-height 1.4, letter-spacing 0.12em): Category labels, navigation items, and section markers. Always uppercase. Never the same size as body.
- **Body** (DM Sans 400, 0.875rem, line-height 1.6): All running copy. Max line length 65ch — beyond that, lines detach from the reading rhythm.
- **Label** (DM Sans 500, 0.6875rem, line-height 1.4, letter-spacing 0.1em): Tags, chips, stat labels, and small metadata. Always uppercase.

**The Scale Rule.** Hierarchy is achieved through size and weight contrast, not color variation. Never make a heading Structural Navy unless it's an active or interactive state. Type is dark; navy is reserved for signal.

**The Uppercase Protocol.** Uppercase is reserved for Title and Label roles. Body copy and Headline text use sentence or title case. Mixing cases freely collapses the hierarchy and reads as careless.

## 4. Elevation

This system is flat by default. Surfaces are distinguished through tonal difference (Blueprint White / Blueprint Paper), typographic scale contrast, and spatial rhythm — not shadows. A flat surface isn't a timid one; it's a disciplined one.

Shadows appear in exactly one context: interactive hover states. A faint ambient shadow on hover communicates lift without breaking the flat-surface doctrine. If a shadow is visible before the user interacts, something is wrong.

**The Flat-First Rule.** Cards at rest carry a 1px Draft Line border (#E0E0E0), not a shadow. Shadow is a state indicator. Never use it as a layout or decorative tool.

### Shadow Vocabulary
- **Hover lift** (`box-shadow: 0 4px 20px rgba(15, 45, 94, 0.09)`): Applied on hover to cards and interactive containers. Low opacity keeps the flat feeling intact while confirming the element is interactive.

## 5. Components

### Buttons
Sharp-edged, high-contrast, zero radius. Uppercase label, DM Sans 500.
- **Shape:** 0px radius. Hard corners throughout — no rounding, ever.
- **Primary:** Structural Navy fill (#0F2D5E), Blueprint White text, 10px/28px padding, 0.8rem, letter-spacing 0.1em, uppercase.
- **Primary Hover:** Background shifts to Ink Black (#111111), border shifts to match. Transition: 0.2s ease-out.
- **Ghost:** Transparent background, 1px Structural Navy border (#0F2D5E), Structural Navy text. For secondary actions — download resume, view GitHub.
- **Ghost Hover:** Structural Navy background fills in, text inverts to Blueprint White.

### Chips / Tags
- **Style:** Blueprint Paper background (#F5F5F5), Steel Mist text (#777777), 1px Draft Line border (#E0E0E0), 2px radius. DM Sans 500, 0.6875rem, uppercase, letter-spacing 0.1em.
- **Active/Hover:** Border shifts to Structural Navy.

### Cards / Containers
- **Corner Style:** 0px radius. Hard corners signal structural precision.
- **Background:** Blueprint White (#FFFFFF).
- **Shadow Strategy:** None at rest. Hover lift only (see Elevation).
- **Border:** 1px solid Draft Line (#E0E0E0) at rest.
- **Internal Padding:** 24px (md spacing).
- **Hover:** translateY(-2px) + hover lift shadow. Transition: 0.2s ease-out.

### Inputs / Fields
- **Style:** Blueprint White background, 1px Draft Line border (#E0E0E0), 0px radius, 12px/16px padding.
- **Focus:** Border shifts to Structural Navy (#0F2D5E). No glow, no box-shadow. The border shift alone is the signal.
- **Placeholder:** Pale Rule (#BBBBBB).
- **Label:** DM Sans 600, Title role — uppercase, letter-spacing 0.12em, Ink Black.

### Navigation
- **Style:** Blueprint White background, 1px Draft Line bottom border. Fixed top, full viewport width, 57px height.
- **Items:** DM Sans 500, 0.75rem, uppercase, letter-spacing 0.08em, Ink Black (#111111) at rest.
- **Hover:** Steel Mist (#777777) — a slight retreat, not a forward push.
- **Active:** Structural Navy (#0F2D5E). The one context where navy appears inline with nav text.
- **Mobile (≤768px):** Full-screen overlay. Hamburger icon reveals items stacked vertically. The overlay is Blueprint White.

### Scroll Reveals (Signature Component)
The choreographed motion layer — the architecture unfolding section by section.
- **Trigger:** IntersectionObserver at 15% viewport threshold.
- **Entry:** Elements translate from `translateY(24px)` to `translateY(0)` and fade from `opacity: 0` to `opacity: 1`.
- **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` — fast out, exponential deceleration. Never bounce, never elastic.
- **Duration:** 600ms per element.
- **Stagger:** 60–100ms between sibling elements within the same section.
- **Reduced motion:** When `prefers-reduced-motion: reduce` is active, skip translateY. Opacity-only, no spatial movement.

## 6. Do's and Don'ts

### Do:
- **Do** fill the viewport with intent. Each scroll section should own its space — scale typography and spacing until the section has weight. If a section feels like it's hiding, it probably is.
- **Do** use DM Serif Display at Display or Headline size for section headings — uppercase, at least 1.5rem, with enough letter-spacing (0.02em+) to breathe.
- **Do** restrict Structural Navy to interactive states, active indicators, and single-value emphasis. Never as a background fill on sections.
- **Do** use 0px radius on buttons, cards, and inputs. The sharpness is a design choice that signals precision.
- **Do** choreograph scroll reveals: `translateY(24px) → 0` with exponential ease-out, staggered within each section.
- **Do** respect `prefers-reduced-motion` — opacity-only transitions, no translate, when the user has requested it.
- **Do** keep body copy below 65ch line length on wide viewports.
- **Do** differentiate surfaces through Blueprint White vs Blueprint Paper before reaching for borders or shadows.

### Don't:
- **Don't** make this feel warm, cozy, or casual. No soft palettes, rounded sans headings, or informal copy tone. This is a technical portfolio, not a personal blog.
- **Don't** produce a layout that could be swapped onto any startup's SaaS landing page. If it reads as "generic modern," start over.
- **Don't** use `border-left` greater than 1px as a colored accent stripe on cards, callouts, or list items. Rewrite with a full border, a tonal background, or nothing.
- **Don't** use gradient text (`background-clip: text` combined with a gradient). Single solid color, always.
- **Don't** add shadows to surfaces at rest. Flat + 1px Draft Line border is the default state. Shadow is hover-only.
- **Don't** dilute Structural Navy by using it on more than 15% of any screen's surface. If navy is everywhere, it means nothing.
- **Don't** produce a layout that feels timid — narrow columns, under-sized headings, excessive whitespace with no visual anchors. Take up space deliberately.
- **Don't** make cluttered or information-dense layouts that scan like resume dumps. One idea per section. Breathe.
- **Don't** use decorative, whimsical, or overly illustrative elements. Credibility comes from precision, not from personality graphics.
