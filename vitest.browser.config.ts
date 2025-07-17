import { defineConfig } from "vitest/config";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    projects: [
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
});
