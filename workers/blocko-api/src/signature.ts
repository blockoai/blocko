// Shopify App Proxy signature: HMAC-SHA256 (hex) over the sorted query params
// (excluding `signature`), each as `key=value` (multi-values joined by ","), concatenated WITHOUT separator.
const enc = new TextEncoder();

export function proxyMessage(params: URLSearchParams): string {
  const map = new Map<string, string[]>();
  for (const [k, v] of params) {
    if (k === "signature") continue;
    map.set(k, [...(map.get(k) ?? []), v]);
  }
  return [...map.entries()]
    .map(([k, v]) => `${k}=${v.join(",")}`)
    .sort()
    .join("");
}

function toHex(buf: ArrayBuffer): string {
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

export async function hmacHex(secret: string, message: string): Promise<string> {
  const key = await crypto.subtle.importKey("raw", enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  return toHex(await crypto.subtle.sign("HMAC", key, enc.encode(message)));
}

export async function sha256Hex(text: string): Promise<string> {
  return toHex(await crypto.subtle.digest("SHA-256", enc.encode(text)));
}

function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let r = 0;
  for (let i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return r === 0;
}

export async function verifyProxySignature(params: URLSearchParams, secret: string | undefined): Promise<boolean> {
  const sig = params.get("signature");
  if (!sig || !secret) return false;
  return safeEqual(await hmacHex(secret, proxyMessage(params)), sig.toLowerCase());
}

/** Test/dev helper: returns the query string with a valid `signature` appended. */
export async function signParams(secret: string, params: Record<string, string>): Promise<string> {
  const p = new URLSearchParams(params);
  p.set("signature", await hmacHex(secret, proxyMessage(p)));
  return p.toString();
}
