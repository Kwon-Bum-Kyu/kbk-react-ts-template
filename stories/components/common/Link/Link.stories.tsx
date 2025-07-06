import type { Meta, StoryObj } from "@storybook/react-vite";
import Link from "@/components/common/Link";
import type { LinkProps } from "@/components/common/Link/types.ts";
import { MemoryRouter } from "react-router-dom";

/**
 * Link 컴포넌트는 `react-router-dom`의 `Link`를 기반으로 한 네비게이션 링크입니다.
 * 비활성화 상태를 지원하며, 기본 스타일이 적용되어 있습니다.
 */
const meta: Meta<typeof Link> = {
  title: "Common/Link",
  component: Link,
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
        component: "내부 페이지 이동에 사용되는 링크 컴포넌트입니다.",
      },
    },
  },
  argTypes: {
    to: { control: "text" },
    children: { control: "text" },
    disabled: { control: "boolean" },
    className: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    to: "/",
    children: "Go to Home",
  } as LinkProps,
};

export const Disabled: Story = {
  args: {
    to: "/",
    children: "Disabled Link",
    disabled: true,
  } as LinkProps,
};
