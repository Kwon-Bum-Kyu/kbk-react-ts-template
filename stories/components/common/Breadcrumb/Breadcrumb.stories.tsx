import type { Meta, StoryObj } from "@storybook/react";
import Breadcrumb from "@/components/common/Breadcrumb";
import type { BreadcrumbProps } from "@/components/common/Breadcrumb/types.ts";
import { MemoryRouter } from "react-router-dom";

/**
 * Breadcrumb 컴포넌트는 사용자의 현재 위치를 계층적으로 표현하며,
 * 네비게이션을 돕기 위해 각 단계에 링크를 제공합니다.
 */
const meta: Meta<typeof Breadcrumb> = {
  title: "Common/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          "페이지 상단에 현재 위치를 경로 형태로 보여주는 Breadcrumb 컴포넌트입니다.",
      },
    },
  },
  argTypes: {
    items: {
      description: "Breadcrumb 항목 리스트",
      control: { type: "object" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Docs", href: "/docs" },
      { label: "Components", href: "/docs/components" },
      { label: "Breadcrumb" },
    ],
  } as BreadcrumbProps,
  parameters: {
    docs: {
      description: {
        story: "기본적인 Breadcrumb 경로를 예시로 보여줍니다.",
      },
    },
  },
};
