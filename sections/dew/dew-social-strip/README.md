# You + Dew strip

Rounded community photo strip with a social link.

- Category: gallery
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/dew/sections/gallery--dew-social-strip.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "You + Dew strip" (id `dew-social-strip`, theme `dew`; live demo: https://demo.blocko.ai/html/dew/sections/gallery--dew-social-strip.html; Shopify bundle: sections/dew/dew-social-strip/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-dew-social-strip.liquid`
- `assets/blko-signature.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `heading` | text | Heading | you + dew |
| `social_url` | url | Social url |  |
| `social_label` | text | Social label | find us on social |

## Blocks

### Photo (`post`, max 8)

| id | type | label | default |
| --- | --- | --- | --- |
| `url` | url | Url |  |
| `image` | image_picker | Image |  |
| `image_alt` | text | Image alt text | Community photo |

## Dependencies

- Assets: `blko-signature.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
