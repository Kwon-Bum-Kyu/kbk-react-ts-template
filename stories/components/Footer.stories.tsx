import type { Meta, StoryObj } from "@storybook/react-vite";
import Footer from "@/components/Footer";

import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof Footer> = {
  title: "Common/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {};
