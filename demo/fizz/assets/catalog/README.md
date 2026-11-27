# Fizz catalog
1. Add `<script src="assets/catalog/catalog.js"></script>` at the end of the page body.
2. Wrap a product in `<div data-product="cherry-pop">` with `[data-name]`, `[data-price]`, `[data-compare]` and `<img data-can>` inside.
3. `FizzCatalog.render()` runs on load; call `FizzCatalog.render(el)` after you inject new markup.
4. Use `FizzCatalog.all()`, `.get(handle)`, `.byLine("Classics")` to build grids; add `tile_bg` as the card background.
5. Other art: `packs/<handle>.svg`, `variety-fan-favorites.svg`, `badge-sale.svg`; edit `products.json` only, then rerun the generator.
