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

| Concept | Phosphor | Preview |
|---|---|---|
| Catalog / browse | `ph-squares-four` | <img src="https://unpkg.com/@phosphor-icons/core@2.1.1/assets/regular/squares-four.svg" width="20"> |
| Collection (cart) | `ph-shopping-bag` | <img src="https://unpkg.com/@phosphor-icons/core@2.1.1/assets/regular/shopping-bag.svg" width="20"> |
| Quote request | `ph-file-text` | <img src="https://unpkg.com/@phosphor-icons/core@2.1.1/assets/regular/file-text.svg" width="20"> |
| Proof / artwork | `ph-image-square` | <img src="https://unpkg.com/@phosphor-icons/core@2.1.1/assets/regular/image-square.svg" width="20"> |
| Studio / team | `ph-users-three` | <img src="https://unpkg.com/@phosphor-icons/core@2.1.1/assets/regular/users-three.svg" width="20"> |
| Case study / journal | `ph-book-open-text` | <img src="https://unpkg.com/@phosphor-icons/core@2.1.1/assets/regular/book-open-text.svg" width="20"> |
| Client account | `ph-user-circle` | <img src="https://unpkg.com/@phosphor-icons/core@2.1.1/assets/regular/user-circle.svg" width="20"> |
| Search | `ph-magnifying-glass` | <img src="https://unpkg.com/@phosphor-icons/core@2.1.1/assets/regular/magnifying-glass.svg" width="20"> |
| Filter | `ph-sliders-horizontal` | <img src="https://unpkg.com/@phosphor-icons/core@2.1.1/assets/regular/sliders-horizontal.svg" width="20"> |
| Sort | `ph-arrows-down-up` | <img src="https://unpkg.com/@phosphor-icons/core@2.1.1/assets/regular/arrows-down-up.svg" width="20"> |
| Success | `ph-check-circle` | <img src="https://unpkg.com/@phosphor-icons/core@2.1.1/assets/regular/check-circle.svg" width="20"> |
| Warning | `ph-warning-circle` | <img src="https://unpkg.com/@phosphor-icons/core@2.1.1/assets/regular/warning-circle.svg" width="20"> |
| Error | `ph-x-circle` | <img src="https://unpkg.com/@phosphor-icons/core@2.1.1/assets/regular/x-circle.svg" width="20"> |
| Info | `ph-info` | <img src="https://unpkg.com/@phosphor-icons/core@2.1.1/assets/regular/info.svg" width="20"> |
| In production | `clock-countdown` | <img src="https://unpkg.com/@phosphor-icons/core@2.1.1/assets/regular/package.svg" width="20"> |
| Shipped | `ph-truck` | <img src="https://unpkg.com/@phosphor-icons/core@2.1.1/assets/regular/truck.svg" width="20"> |
| Delivered | `ph-check-square` | <img src="https://unpkg.com/@phosphor-icons/core@2.1.1/assets/regular/check-square.svg" width="20"> |
| Approve | `ph-check` | <img src="https://unpkg.com/@phosphor-icons/core@2.1.1/assets/regular/check.svg" width="20"> |
| Reject / revise | `ph-arrow-u-up-left` | <img src="https://unpkg.com/@phosphor-icons/core@2.1.1/assets/regular/arrow-u-up-left.svg" width="20"> |
| Download | `ph-download-simple` | <img src="https://unpkg.com/@phosphor-icons/core@2.1.1/assets/regular/download-simple.svg" width="20"> |
| Upload artwork | `ph-upload-simple` | <img src="https://unpkg.com/@phosphor-icons/core@2.1.1/assets/regular/upload-simple.svg" width="20"> |
| Message vendor | `ph-chat-circle` | <img src="https://unpkg.com/@phosphor-icons/core@2.1.1/assets/regular/chat-circle.svg" width="20"> |
| Close | `ph-x` | <img src="https://unpkg.com/@phosphor-icons/core@2.1.1/assets/regular/x.svg" width="20"> |
| Caret / nav | `ph-caret-right`, `ph-caret-down` | <img src="https://unpkg.com/@phosphor-icons/core@2.1.1/assets/regular/caret-right.svg" width="20"> <img src="https://unpkg.com/@phosphor-icons/core@2.1.1/assets/regular/caret-down.svg" width="20"> |

## Things we don't do

- No emoji.
- No filled-variant icons (even for active state — use color + weight instead).
- No icon backgrounds (colored circles, rounded squares) except semantic status dots.
- No mixed icon sets — everything flows from Phosphor.
- No hand-rolled SVG icons. If Phosphor doesn't have it, ask before inventing one.
