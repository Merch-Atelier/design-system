# Iconography — Merch Atelier

## System: Phosphor Icons

Refined, hand-drawn-adjacent. We use **Regular** (1.5px stroke) as default. **Light** (1px stroke) is allowed for oversized decorative moments (≥ 48px) where Regular would feel heavy. **Never mix weights in one view.**

### Load

```html
<!-- Regular (default) -->
<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css" />
<!-- Light (optional, only for >=48px decorative) -->
<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/light/style.css" />
```

### Usage

```html
<i class="ph ph-shopping-bag"></i>
<i class="ph-light ph-sparkle" style="font-size: 48px;"></i>
```

Icons inherit `color` and `font-size` from their container.

## Sizing

| Context | Size |
|---|---|
| Dense admin table | 16px |
| Standard UI (buttons, form inputs, body) | 20px |
| Navigation, nav items | 24px |
| Feature callouts, section markers | 40–48px |

Do not use icons smaller than 14px.

## Color

Icons should nearly always inherit `currentColor` from their container. Explicit color exceptions:

- **Semantic status** (sage / ochre / terracotta / slate) — for order status dots, validation, system messages.
- **Dusty Taupe** — for decorative editorial moments only (e.g. section marker above a Playfair headline).

Never stroke-color icons with off-brand colors.

## Curated icon vocabulary

Stay consistent with this mapping across the system:

| Concept | Phosphor |
|---|---|
| Catalog / browse | `ph-squares-four` |
| Collection (cart) | `ph-shopping-bag` |
| Quote request | `ph-file-text` |
| Proof / artwork | `ph-image-square` |
| Studio / team | `ph-users-three` |
| Case study / journal | `ph-book-open-text` |
| Client account | `ph-user-circle` |
| Search | `ph-magnifying-glass` |
| Filter | `ph-sliders-horizontal` |
| Sort | `ph-arrows-down-up` |
| Success | `ph-check-circle` |
| Warning | `ph-warning-circle` |
| Error | `ph-x-circle` |
| Info | `ph-info` |
| In production | `ph-package` |
| Shipped | `ph-truck` |
| Delivered | `ph-check-square` |
| Approve | `ph-check` |
| Reject / revise | `ph-arrow-u-up-left` |
| Download | `ph-download-simple` |
| Upload artwork | `ph-upload-simple` |
| Message vendor | `ph-chat-circle` |
| Close | `ph-x` |
| Caret / nav | `ph-caret-right`, `ph-caret-down` |

## Things we don't do

- No emoji.
- No filled-variant icons (even for active state — use color + weight instead).
- No icon backgrounds (colored circles, rounded squares) except semantic status dots.
- No mixed icon sets — everything flows from Phosphor.
- No hand-rolled SVG icons. If Phosphor doesn't have it, ask before inventing one.
