import type { Meta, StoryObj } from "@storybook/react-vite";
import SystemIcon from "@/components/common/SystemIcon";
import type { SystemIconProps } from "@/components/common/SystemIcon/types.tsx";

/**
 * SystemIcon 컴포넌트는 프로젝트 전반에서 사용되는 아이콘을 일관된 스타일로 제공합니다.
 * `react-icons/fa` 라이브러리를 기반으로 하며, `name` 속성을 통해 아이콘을 선택할 수 있습니다.
 */
const meta: Meta<typeof SystemIcon> = {
  title: "Common/SystemIcon",
  component: SystemIcon,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "프로젝트의 표준 아이콘 시스템입니다.",
      },
    },
  },
  argTypes: {
    name: { control: "select", options: ["bars", "search", "info", "close", "circle", "circle-filled", "eye", "eye-slash", "chevron-right", "chevron-left", "chevron-up", "chevron-down", "toggle-on", "toggle-off", "user", "user-circle", "user-outline", "envelope", "envelope-outline", "caret-up", "caret-down", "arrow-up", "arrow-down", "arrow-left", "arrow-right", "check-square", "check-square-outline", "check-circle", "check-circle-outline", "square", "square-outline", "linkedin", "github", "globe"] },
    size: { control: "number" },
    className: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof SystemIcon>;

export const Default: Story = {
  args: {
    name: "github",
    size: 24,
  } as SystemIconProps,
};

export const Colored: Story = {
  args: {
    name: "check-circle",
    size: 32,
    className: "text-system-green",
  } as SystemIconProps,
};
