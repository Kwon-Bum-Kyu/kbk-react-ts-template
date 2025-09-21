import path from "path";
import type { StorybookConfig } from "@storybook/react-vite";
import { loadEnv } from "vite";

const config: StorybookConfig = {
  // Replace your-framework with the framework you are using, e.g. react-vite, nextjs-vite, vue3-vite, etc.
  framework: "@storybook/react-vite",
  stories: ["../stories/**/*.stories.@(ts|tsx|js|jsx)"],
  addons: [
    "@storybook/addon-docs",
    "@chromatic-com/storybook",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
  ],
  core: {
    builder: "@storybook/builder-vite",
  },
  env: (config) => {
    // Load Storybook-specific environment variables
    const env = loadEnv("storybook", process.cwd(), "");
    return {
      ...config,
      ...env,
    };
  },
  async viteFinal(config) {
    // Load environment variables for Vite
    const env = loadEnv("storybook", process.cwd(), "VITE_");

    return {
      ...config,
      define: {
        ...config.define,
        ...Object.keys(env).reduce((acc, key) => {
          acc[`import.meta.env.${key}`] = JSON.stringify(env[key]);
          return acc;
        }, {} as Record<string, string>),
      },
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
