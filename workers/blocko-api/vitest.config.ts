import { cloudflareTest, readD1Migrations } from "@cloudflare/vitest-pool-workers";
import { defineConfig } from "vitest/config";

export default defineConfig(async () => {
  const migrations = await readD1Migrations("./migrations");
  return {
    plugins: [
      cloudflareTest({
        wrangler: { configPath: "./wrangler.jsonc" },
        miniflare: { bindings: { TEST_MIGRATIONS: migrations, SHOPIFY_API_SECRET: "test-secret", DEV_SKIP_SIGNATURE: "0" } },
      }),
    ],
    test: { setupFiles: ["./test/setup.ts"] },
  };
});
