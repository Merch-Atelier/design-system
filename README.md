# Merch Atelier — Design System

A high-touch, boutique promotional products agency for small businesses. Merch Atelier positions itself as an **atelier rather than a bulk supplier** — every item is treated as a curated design piece, not a disposable giveaway.

> **Brand personality:** sophisticated, design-led, confident, artisanal, approachable, partnership-focused.
> **Aesthetic:** editorial and restrained. Think independent design studio or luxury goods catalog — generous whitespace, considered typography, and quiet confidence that lets product imagery remain the visual focus.

## Products covered

Merch Atelier's software has two distinct surfaces that share tokens but differ in density:

1. **Storefront** — public catalog, product detail, customization/proof preview, quote request, case studies, client account dashboard (orders, proofs). Default density.
2. **Admin** — internal console for managing quotes, orders, vendor communication, artwork approvals, production tracking. Compact density, table-heavy.

There is no "add to cart." The primary conversion path is **Request a quote** — we quote before we sell.

## Source materials

This system was built from:
- `uploads/Merch Atelier - Transparent.png` — primary logo (Montserrat Bold "MERCH" in Carbon Black + Playfair Display Italic "ATELIER" in Dusty Taupe).
- `uploads/merch_atelier_palette.html` — proposed token palette (brand, neutral scale, surfaces, semantic).
- Written brand brief from the founder covering voice, type pairing, motion, spacing, components.

No Figma file or existing codebase was provided. Components in `ui_kits/` are built from the brief alone, so treat them as an opinionated first pass — the type + color system is locked; component details are open to iteration.

---

## Content fundamentals

Voice is **editorial, confident, quietly crafted.** Copy reads like a small design studio wrote it — short sentences, no marketing breathlessness, no urgency tactics, no discount language.

### Tone & diction
- **Partnership over transaction.** We say "Let's build your collection" or "Start a project" — never "Shop now."
- **Craft-aware nouns.** "Piece," "collection," "proof," "production run," "vendor." Use **"collection"** when presenting a catalog of items for the client to choose from; use **"item"** in all other contexts. Use **"inventory"** only when discussing a warehousing or fulfillment project. Never use "SKU."
- **Understated adjectives.** "Considered," "refined," "tactile," "enduring" — not "premium," "amazing," "revolutionary."
- **Second person, warm but reserved.** We address the client as "you," refer to ourselves as "we." Never "I." Never "Merch Atelier" in third person inside the product.

### Casing
- **Sentence case** everywhere except:
  - **UPPERCASE with tracking** (`0.08–0.12em`) for short Montserrat Bold labels: section eyebrows, category tags, button labels, metadata pills. Max ~4 words.
  - **Title Case** only in logo lockups and major hero moments already set in Playfair.

### Specific vocabulary (use these, not the alternatives)
| Use | Not |
|---|---|
| Request a quote | Add to cart / Buy now |
| In production | Processing / Fulfilling |
| Proof ready for review | Awaiting approval |
| Start a project | Build your own / Start a brief |
| Collection | Catalog / Listing |
| Case study | Testimonial / Customer story |
| Client | Customer |

**Kept as-is** (retained per brand direction): *SKU*, *Your cart*, *Get started*, *Team*, *Company*, *Studio*. These are recognized terms customers and internal users already scan for — don't fight the pattern.

### Example microcopy
- **Empty state (collection):** *Nothing here yet. Start by browsing the catalog or telling us what you have in mind — we'll build a collection together.*
- **Quote confirmation:** *Thanks — we've received your project request. We will be in touch within one business day.*
- **Production status:** *In production · Expected ship 14 Nov 2026*
- **Error (form):** *We need a contact email to send your proof.* (Not: "Invalid input.")
- **CTA button:** `Request a quote`, `Start a project`, `Review proof`, `Approve & produce`.

### Numbers, dates, currency
- Dates spelled with abbreviated month: `14 Nov 2026`. No ordinals ("14th").
- Currency with symbol, no trailing zeros on whole units: `$1,240` not `$1,240.00`. Include `.00` only in invoices and admin tables.
- Quantities use "pcs" in tables, spelled out in copy: "a run of 250 pieces."

### Emoji
**Never.** Emoji don't fit the editorial register. Use typography, spacing, and restrained iconography instead.

### Emphasis
- **Montserrat Bold uppercase** for functional emphasis (labels).
- **Playfair Display Italic in Dusty Taupe** for editorial emphasis (a phrase inside a headline, a pull quote). Italic is a *signature treatment, not decoration* — use it sparingly and meaningfully.

---

## Visual foundations

### Colors
Warm-neutral throughout. The palette moves from **Parchment (#F5F3ED)** up to **Carbon Black (#242424)**, with **Dusty Taupe (#8C7A65)** as the single editorial accent. Semantic colors (sage / ochre / terracotta / dusty slate) are all muted and earthy so they don't shout against the taupe.

- **Primary:** Carbon Black `#242424` — headlines, body, buttons, structural ink.
- **Accent:** Dusty Taupe `#8C7A65` — Playfair italic, editorial moments, hover accents, focus rings.
- **Neutrals:** 50 / 100 (Parchment) / 200 / 300 / 400 / 500 / 600 / 700 / 800 / 900 (= Carbon).
- **Surfaces:** Parchment (page) · Pure White (cards) · Parchment 200 (muted panels) · Carbon (inverse / footer).
- **Semantic:** Sage `#6F8452` · Ochre `#C68A2E` · Terracotta `#B04A3B` · Dusty Slate `#5B7B95`.

No cool tones except Info. Pale Sky (`#CBE3F6`) was rejected — Info does that job.

### Typography
Pair drawn directly from the logo:
- **Montserrat** = structural / utilitarian. Regular (400) body, Medium (500) UI, Bold (700) uppercase + tracking for eyebrows and buttons.
- **Playfair Display** = expressive / editorial. Regular or Medium, frequently italic, for hero titles, collection names, pull quotes.
- **Montserrat sits in Carbon**; **Playfair italic sits in Dusty Taupe** when it needs to feel crafted.

Modular scale: `12 · 14 · 16 · 18 · 24 · 32 · 48 · 64 · 80`.
Line-height: Montserrat body `1.6–1.7`, Playfair headlines `1.1–1.25`.
In hero layouts, echo the logo's proportions — the editorial Playfair outscales the Montserrat eyebrow above it.

### Spacing & layout
8px base: `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96`.
12-column grid, max content `1280px`, breakpoints `640 / 768 / 1024 / 1280`.
**Generous whitespace is the rule**, not the exception. Section padding usually starts at `96px` top/bottom on desktop.

### Backgrounds & imagery
- **No gradients.** Ever. Flat Parchment, flat white, flat Carbon.
- **No patterns, no textures, no grain overlays.** The palette is the texture.
- **Product imagery is the visual hero.** Photography is warm, soft-lit, catalog-quality. Prefer cropped, single-subject, generous negative space. Avoid busy scenes.
- **Full-bleed imagery** is reserved for hero moments and case-study openers — not decoration on normal pages.
- Imagery tone: **warm, not cool.** Natural light, occasional shallow depth-of-field, editorial neutrals. No saturated color casts.

### Cards
- Pure white `#FFFFFF` on Parchment page.
- Radius `8px` (large cards `12px`).
- No border by default; use a `0.5px` hairline at `rgba(36,36,36,0.08)` when needed for separation.
- Resting shadow: none or `shadow-xs`. On hover, lift to `shadow-md` and translate `-2px` — the paper-lifting metaphor.

### Corners
Soft but not playful.
- **Cards:** `8–12px`
- **Buttons, inputs:** `6px`
- **Small tags / chips:** `2–4px`
- **Avatars, pills:** `999px` only when genuinely pill-shaped

### Borders & dividers
- Hairlines at **0.5px** rendered as `1px solid rgba(36,36,36,0.08)` (browsers round; the opacity keeps it feeling thin).
- Section dividers are full-width Parchment 200 `1px` rules, or just whitespace.
- Inputs use a `1px` border at `rgba(36,36,36,0.22)`, darkening to Carbon on focus with a taupe focus ring.

### Shadows (elevation)
Paper-lifting, never drop-shadowy. All shadows use Carbon `rgba(36,36,36,α)` — never black.
- `xs` — hairline lift for flat cards that need subtle separation
- `sm` — resting product cards
- `md` — hover / menus / popovers
- `lg` — modals, elevated sheets

No inner shadows. No long gradients. No colored shadows.

### Motion
Subtle and considered.
- **Duration:** `120ms` (micro), `180ms` (standard), `280ms` (slow).
- **Easing:** `cubic-bezier(0.22, 0.61, 0.36, 1)` — a refined ease-out. Never bouncy, never spring.
- **Properties:** `transform` and `opacity` only. Never animate color hastily — use `180ms` cross-fades on hover.
- **Hover states feel like paper lifting, not buttons popping.** A product card hover = `translateY(-2px)` + shadow lift over `180ms`.

### Hover states
- **Primary button:** lighten to `#3A3832` (neutral 800), no scale change.
- **Secondary button:** Parchment 200 fill appears behind the label.
- **Ghost / text link:** color shifts from Carbon to Taupe; underline thickens from `1px` to `1.5px`.
- **Cards:** translate `-2px`, elevation `xs → md`. Image inside scales `1.0 → 1.03`.
- **Nav links:** Taupe underline grows in from 0 → 100% width in `180ms`.

### Press (active) states
- **No scale shrink.** Press returns the hover translate to `0`, drops shadow back to resting. Brief (`120ms`). Tactile but quiet.
- **Buttons:** darken one step further (`#2E2C28`) for the duration of press.

### Transparency & blur
Used sparingly.
- **Backdrop blur** only on the sticky top nav when it overlaps content: `backdrop-filter: blur(12px)` with Parchment at 80% alpha.
- **Modal scrims:** `rgba(36, 36, 36, 0.45)` — Carbon-tinted, not pure black.
- **No frosted-glass components** beyond those two cases.

### Fixed / sticky elements
- Top nav is sticky with hairline bottom border.
- Quote-builder summary is sticky to viewport right on `≥1024px` during configuration flows.
- Admin sidebar is fixed left on `≥1024px`, collapsible to icon-only on smaller breakpoints.
- No floating chat bubbles, no sticky CTA bars, no cookie banners in the chrome — we respect the reader's attention.

---

## Iconography

**Phosphor Icons** at the **Regular** or **Light** weight. Regular is the default; Light reserved for oversized decorative moments (≥48px). **Never mix weights within a single view.**

- **Source:** CDN via `https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css` (and `/light/style.css` when needed). Usage documented in `ICONOGRAPHY.md`.
- **Sizing:** default `20px` in UI, `16px` in dense admin tables, `24px` in navigation, `40–48px` for feature callouts.
- **Stroke weight:** Phosphor Regular is `1.5px` — matches the refined, hand-drawn-adjacent feel called for in the brief.
- **Color:** icons inherit `currentColor`. In body contexts that means Carbon; in nav they can sit at `fg-secondary` and transition to Carbon on hover.

### Not used
- **No emoji.** Anywhere.
- **No flat-color 2D illustrations**, no isometric illustrations, no 3D renders.
- **No unicode-as-icon** except very occasional typographic marks (· — →) used intentionally in editorial copy.
- **No icon badges** with colored-circle backgrounds unless it's a semantic status dot (sage / ochre / terracotta / slate).

### SVG assets shipped
- `assets/logo-merch-atelier.png` — full-color logo on transparent background (for light surfaces).
- `assets/logo-merch-atelier-light.png` — Parchment "MERCH" + Taupe "ATELIER" (for Carbon surfaces).
- Phosphor is CDN-loaded rather than vendored to keep the repo light. If an offline bundle is needed, copy the npm package into `assets/phosphor/`.

---

## Index

| Path | What it is |
|---|---|
| `README.md` | This file. |
| `colors_and_type.css` | All design tokens as CSS custom properties + semantic typography classes. |
| `ICONOGRAPHY.md` | Icon usage rules & Phosphor reference. |
| `SKILL.md` | Agent-Skill manifest for using this system. |
| `assets/` | Logo variants and shipped brand assets. |
| `preview/` | Design-system preview cards (rendered in the Design System tab). |
| `ui_kits/storefront/` | Customer-facing UI kit — catalog, product, quote flow, account. |
| `ui_kits/admin/` | Internal admin UI kit — quotes queue, orders, proof approvals. |

### UI kits included

- **Storefront** (`ui_kits/storefront/index.html`) — home / catalog / product detail with proof preview / quote brief / client account. Default density.
- **Admin** (`ui_kits/admin/index.html`) — quote requests queue / orders & production tracking / proof review. Compact density via `[data-density="compact"]`.

---

## Caveats

- **Font substitution note:** Montserrat and Playfair Display are pulled from Google Fonts. If brand guidelines specify licensed cuts of either (e.g. foundry originals vs. the Google versions), swap the `@import` in `colors_and_type.css` and ship the files in `assets/fonts/`.
- **No source code or Figma was provided** — UI kits are built from the brief. Component structure and interactions are opinionated, not reverse-engineered.
- **Phosphor is linked from CDN**, not vendored. Offline / airgapped environments should vendor the set.
