# blocko-api

Cloudflare Worker + D1 backend for Blocko sections that Shopify does not provide natively:
reviews, wishlist, stockist locator. Reached from the storefront through a Shopify App Proxy
(default prefix `/apps/blocko`, configurable via theme setting `blocko_api_base`).
Rewards and subscriptions are out of scope (UI shells, "needs app").

## Endpoints

All requests carry the App Proxy query params (`shop`, `timestamp`, `signature`, and
`logged_in_customer_id` when logged in). Paths work with or without the `/apps/blocko` prefix.
Errors: `{"error": "..."}` with 400 / 401 / 404 / 429 / 500.

| Method | Path | Notes |
|---|---|---|
| GET | `/health` | `{ok:true}`, no signature needed |
| GET | `/reviews?product_id=&page=&sort=` | sort: `newest` (default), `oldest`, `highest`, `lowest`; 10 per page; approved only |
| POST | `/reviews` | body below; returns 201 `{id,status:"pending"}` |
| GET | `/wishlist` | `{items:["handle",...]}`; 401 when anonymous |
| POST | `/wishlist` | body `{item}` (handle or id); idempotent; max 500 per customer |
| DELETE | `/wishlist?item=` | removes one item |
| GET | `/stockists?lat=&lng=&q=&radius=` | radius in km; sorted by distance when lat/lng given; max 50 |
| GET | `/order-tracking?order=&email=` | Admin API lookup, see below; 501 `{error:"order_tracking_not_configured"}` when `SHOPIFY_ADMIN_TOKEN` is unset |

GET /reviews response:

```json
{"summary":{"avg":4.25,"count":4,"histogram":{"1":0,"2":0,"3":1,"4":1,"5":2}},
 "page":1,"page_size":10,
 "items":[{"id":5,"rating":5,"title":"...","body":"...","author":"Jordan R.","verified":true,"created_at":"2026-09-20T10:00:00.000Z"}]}
```

POST /reviews body: `{product_id, rating (1-5), title?, body, author, email, website?}`.
`website` is a honeypot: render it as a hidden field and leave it empty (a filled value is silently dropped).
Email is stored only as `sha256(shop:email)`. New reviews are `pending`; moderation is a manual
status change in D1 (set `status` to `approved` or `rejected` on the `reviews` row).
Rate limit: 5 review posts per 10 min per IP per shop (429).

GET /stockists item: `{id,name,address,city,country,lat,lng,phone,distance_km|null}`.
GET /stockists response: `{"items":[...]}` (never a bare array).

GET /order-tracking: `order` is the order name (`#1001` or `1001`), `email` must match the order email, else 404
`{error:"order_not_found"}` (same answer for unknown order and wrong email). 200 returns only
`{step (1 confirmed, 2 preparing, 3 in transit, 4 delivered), status, fulfillment, tracking:[{company,number,url}]}`.
Looked up with Shopify Admin GraphQL on the signed `shop`; 502 on upstream failure; 10 lookups per 10 min per IP per shop (429).
Wishlist: DELETE takes `?item=` (query string, no body).

Machine-readable contract: `contract.json` (read by `test/contract.test.ts` here and by
`tools/shopify/api-contract.test.ts` at the repo root, which fails when the theme JS drifts from it).

Rows with `shop='*'` are shared defaults (seeded fake data); add per-shop rows with the real shop domain.

## Security

- Every request except `/health` must have a valid App Proxy `signature`
  (HMAC-SHA256 hex over sorted `key=value` pairs joined without separator, key = `SHOPIFY_API_SECRET`).
- `DEV_SKIP_SIGNATURE=1` disables the check. Local dev only (`.dev.vars`); never set in production.
- All rows are keyed by the `shop` param (validated as `*.myshopify.com`).
- Wishlist identity is `logged_in_customer_id`, which Shopify injects (and signs) on proxied requests.

## Merchant setup (App Proxy)

1. Partner Dashboard, your app, Configuration, App proxy.
2. Subpath prefix `apps`, subpath `blocko`, proxy URL = the Worker URL (`https://blocko-api.your-subdomain.workers.dev`).
3. Set the Worker secret to the app's real client secret (`wrangler secret put SHOPIFY_API_SECRET`).
4. Install the app on the store. Storefront calls to `/apps/blocko/...` now reach the Worker.
5. Theme setting `blocko_api_base` defaults to `/apps/blocko`.

## Theme usage

```js
import { createBlkoApi } from "./blko-api.js"; // client/blko-api.js
const api = createBlkoApi(base);               // base = theme setting blocko_api_base
const r = await api.reviews(productId);
if (r.ok) render(r.data); // else: keep the static mock UI
const w = await api.addWishlist(handle);
if (!w.ok) saveToLocalStorage(handle); // anonymous (401) or no proxy
```

Every client call resolves to `{ok,status,data}` and never throws: when the proxy is absent
(404 or network error) `ok` is false and the section keeps its static content.

## Dev

```bash
bun install --backend=copyfile
bun run test                      # vitest + workers pool
printf 'DEV_SKIP_SIGNATURE=1\n' > .dev.vars
bun run db:migrate:local && bun run db:seed:local
bun run dev                       # wrangler dev --local, :8787
curl "localhost:8787/reviews?shop=demo.myshopify.com&product_id=demo-product"
```

## Env / secrets

| Name | Kind | Purpose |
|---|---|---|
| `DB` | D1 binding | database `blocko-api` |
| `SHOPIFY_API_SECRET` | secret | App Proxy HMAC key. The deployed value is a PLACEHOLDER; replace with the real app secret |
| `DEV_SKIP_SIGNATURE` | var | `1` = skip signature and enable permissive CORS (dev only) |
| `SHOPIFY_ADMIN_TOKEN` | secret | Admin API token with `read_orders`; enables `/order-tracking` (otherwise 501) |
| `SHOPIFY_ADMIN_SHOP` | var | Optional but recommended: the one `*.myshopify.com` the token belongs to; other shops get 501 |
| `SHOPIFY_ADMIN_API_VERSION` | var | Optional, default `2025-07` |
