# AGENTS.md

This repository is generated, merchant-facing output of Blocko. Use it; do not regenerate it.

## Layout

- `catalog.json`: machine-readable index of every theme, section and block (id, name, category, targets, files, deps, gaps, demo path, one-line agent `prompt`) for sections, blocks and pages, and the Worker endpoints. Start here. HTML-only themes (no `themes/<theme>/`) list every item as a gap with its `demo` path.
- `themes/<theme>/`: complete Shopify OS2 theme.
- `sections/<theme>/<id>/`: one standalone bundle per section or block (mirrors theme folders: `sections/`, `blocks/`, `snippets/`, `assets/`, `locales/`) plus a README with its settings table.
- `demo/`: static HTML demo (same content as https://blocko.avada.net/html/).
- `workers/blocko-api/`: optional Cloudflare Worker (`client/blko-api.js` is the storefront client).
- `plugins/blocko-sections/`: Claude Code plugin with skills to find, install and deploy sections.

## Before you change anything

Ask the user where the item should go: which project/theme, platform (Shopify theme or plain HTML site), page/template and position. If the request already answers this, restate it and wait for confirmation. Never guess.

## Items without a Shopify bundle

If `targets.shopify` is a gap, port the HTML demo (`demo/<theme>/...`) into a Liquid section with a `{% schema %}` (mirror a bundle in `sections/veil/`), or copy the HTML for a plain site.

## Rules for any change you make to a merchant theme

- Every class and custom property keeps the `blko-` prefix. Never write global selectors (`h2`, `button`, `.container`).
- Design tokens are always read with fallbacks: `var(--color-accent, #bba293)`. Do not remove the fallbacks.
- Interactive behavior is a Custom Element registered idempotently: `if (!customElements.get("blko-x")) customElements.define("blko-x", ...)`. This keeps Theme Editor re-renders safe.
- Static sections ship 0 KB JavaScript. Do not add jQuery, Alpine, React, Vue or a CDN runtime.
- Do not hotlink images except `images.unsplash.com`; replace demo images with the merchant's own assets.

## Generated files

Everything here is generated. Do not edit it in place: the next publish overwrites it. To request a change, open an issue describing the section id and the change. To customise for one store, copy the bundle into the store theme and edit that copy.

## Safe workflow

Before copying a section into a theme: check for file-name collisions, never overwrite without asking, merge locale keys instead of replacing the locale file, run `shopify theme check` afterwards.

## Commit identity (hard rule)

Every commit in this repository has author AND committer `Blocko <team@blocko.ai>`. Publishing is automated and verifies this before every push; commits by anyone else are rejected from the published history. Do not add personal names or email addresses to any file here.
