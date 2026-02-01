import { reactConfig } from "@repo/vitest-config";
import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      ...reactConfig,
      name: "unit",
      include: ["tests/unit/**/*.test.{ts,tsx}"],
      exclude: ["tests/e2e/**", "node_modules/**"],
      setupFiles: ["./tests/unit/setup.ts"],
    },
  })
);
