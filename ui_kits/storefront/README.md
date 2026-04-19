# Storefront UI Kit — Merch Atelier

Customer-facing surfaces: homepage, catalog, product detail with proof preview, quote builder, and client account.

## Files

- `index.html` — clickable prototype stepping through homepage → catalog → product → quote → account.
- `Components.jsx` — shared atoms (Logo, Button, Tag, Field, ProductCard, Footer, etc).
- `Nav.jsx` — sticky top nav with blurred Parchment background.
- `Home.jsx` — hero + featured collection + studio intro + case study teaser.
- `Catalog.jsx` — faceted catalog browse.
- `Product.jsx` — product detail + customization + proof preview.
- `Quote.jsx` — quote request / brief form.
- `Account.jsx` — client dashboard: orders, proofs awaiting review.

All components pull tokens from `../../colors_and_type.css`. No production logic — screens are click-through.
