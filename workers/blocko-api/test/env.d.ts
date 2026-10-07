declare module "cloudflare:test" {
  export const SELF: Fetcher;
  export function applyD1Migrations(db: D1Database, migrations: unknown[]): Promise<void>;
}
