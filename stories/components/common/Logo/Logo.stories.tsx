import type { Meta, StoryObj } from "@storybook/react";
import Logo from "@/components/common/Logo";
import { MemoryRouter } from "react-router-dom";

/**
 * Logo 컴포넌트는 사이트의 로고를 표시합니다.
 * 클릭 시 메인 페이지로 이동합니다.
 */
const meta: Meta<typeof Logo> = {
  title: "Common/Logo",
  component: Logo,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: "사이트 로고를 나타내는 컴포넌트입니다.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {};
