// Tiny dependency-free client for the Blocko API (reached through the Shopify App Proxy).
// Every call resolves to {ok, status, data}; it never throws, so theme code can fall back
// to its static mock UI when the proxy is absent (ok === false).
const DEFAULT_BASE = "/apps/blocko";

export function createBlkoApi(base = DEFAULT_BASE) {
  const root = String(base || DEFAULT_BASE).replace(/\/+$/, "");
  async function call(path, { method = "GET", query, body } = {}) {
    const qs = query ? "?" + new URLSearchParams(Object.entries(query).filter(([, v]) => v != null && v !== "")).toString() : "";
    try {
      const res = await fetch(`${root}${path}${qs}`, {
        method,
        headers: body ? { "content-type": "application/json" } : undefined,
        body: body ? JSON.stringify(body) : undefined,
        credentials: "same-origin",
      });
      const data = await res.json().catch(() => null);
      return { ok: res.ok && data !== null, status: res.status, data };
    } catch {
      return { ok: false, status: 0, data: null };
    }
  }
  return {
    reviews: (productId, { page, sort } = {}) => call("/reviews", { query: { product_id: productId, page, sort } }),
    submitReview: (review) => call("/reviews", { method: "POST", body: review }),
    wishlist: () => call("/wishlist"),
    addWishlist: (item) => call("/wishlist", { method: "POST", body: { item } }),
    removeWishlist: (item) => call("/wishlist", { method: "DELETE", query: { item } }),
    orderTracking: ({ order, email }) => call("/order-tracking", { query: { order, email } }), // 501 = not configured
    stockists: ({ lat, lng, q, radius } = {}) => call("/stockists", { query: { lat, lng, q, radius } }),
  };
}

// Reads the base from <meta name="blko-api-base"> (fed by the theme setting) or window.BLKO_API_BASE.
export function blkoApi() {
  const meta = typeof document !== "undefined" && document.querySelector('meta[name="blko-api-base"]');
  return createBlkoApi((meta && meta.content) || (typeof window !== "undefined" && window.BLKO_API_BASE) || DEFAULT_BASE);
}
