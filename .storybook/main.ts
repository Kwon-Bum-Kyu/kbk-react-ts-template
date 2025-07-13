import path from "path";
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  // Replace your-framework with the framework you are using, e.g. react-vite, nextjs-vite, vue3-vite, etc.
  framework: "@storybook/react-vite",
  stories: ["../stories/**/*.stories.@(ts|tsx|js|jsx)"],
  addons: [
    "@storybook/addon-docs",
    "@chromatic-com/storybook",
    "@storybook/addon-onboarding",
    "@storybook/addon-vitest"
  ],
  core: {
    builder: "@storybook/builder-vite",
  },
  async viteFinal(config) {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          "@": path.resolve(__dirname, "../src"),
        },
      },
    };
  },
};

export default config;
