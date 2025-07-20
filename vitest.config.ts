import { defineConfig, mergeConfig } from "vitest/config";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import viteConfig from "./vite.config";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      projects: [
        {
          plugins: viteConfig.plugins,
          test: {
            name: "unit",
            include: ["tests/**/*.test.{ts,tsx}"],
            browser: {
              enabled: true,
              provider: "playwright",
              headless: true,
              instances: [{ browser: "chromium" }],
            },
            setupFiles: ["./tests/setup.ts"],
          },
        },
        {
          plugins: [
            storybookTest({
              configDir: path.join(dirname, ".storybook"),
              storybookScript: "yarn storybook --ci",
            }),
          ],
          test: {
            name: "storybook",
            browser: {
              enabled: true,
              provider: "playwright",
              headless: true,
              instances: [{ browser: "chromium" }],
            },
            setupFiles: ["./.storybook/vitest.setup.ts"],
          },
        },
      ],
    },
  })
);
