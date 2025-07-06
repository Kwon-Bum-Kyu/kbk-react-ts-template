import { Preview } from "@storybook/react-vite";
import "../src/index.css"; // TailwindCSS가 들어있는 파일

export const parameters: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};
