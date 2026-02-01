import { nodeConfig } from "@repo/vitest-config";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    ...nodeConfig,
    name: "api",
    include: ["test/**/*.test.{ts,tsx}"],
    setupFiles: ["./test/setup.ts"],
  },
});
