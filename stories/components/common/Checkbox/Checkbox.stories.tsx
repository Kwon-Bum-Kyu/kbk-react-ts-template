import type { Meta, StoryObj } from "@storybook/react-vite";
import Checkbox from "@/components/common/Checkbox";
import type { CheckboxProps } from "@/components/common/Checkbox/types.ts";

/**
 * Checkbox 컴포넌트는 사용자가 하나 이상의 옵션을 선택할 수 있도록 하는 UI 요소입니다.
 */
const meta: Meta<typeof Checkbox> = {
  title: "Common/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "단일 선택 또는 다중 선택을 위한 체크박스 컴포넌트입니다.",
      },
    },
  },
  argTypes: {
    label: {
      description: "체크박스 옆에 표시될 텍스트 레이블입니다.",
      control: { type: "text" },
    },
    disabled: {
      description: "체크박스를 비활성화합니다.",
      control: { type: "boolean" },
    },
    checked: {
      description: "체크박스의 선택 여부를 제어합니다.",
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: "Checkbox Label",
    checked: false,
    disabled: false,
  } as CheckboxProps,
  parameters: {
    docs: {
      description: {
        story: "기본적인 체크박스입니다.",
      },
    },
  },
};

export const Checked: Story = {
  args: {
    label: "Checkbox Label",
    checked: true,
    disabled: false,
  } as CheckboxProps,
  parameters: {
    docs: {
      description: {
        story: "선택된 상태의 체크박스입니다.",
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    label: "Checkbox Label",
    checked: false,
    disabled: true,
  } as CheckboxProps,
  parameters: {
    docs: {
      description: {
        story: "비활성화된 상태의 체크박스입니다.",
      },
    },
  },
};

export const DisabledChecked: Story = {
  args: {
    label: "Checkbox Label",
    checked: true,
    disabled: true,
  } as CheckboxProps,
  parameters: {
    docs: {
      description: {
        story: "비활성화되고 선택된 상태의 체크박스입니다.",
      },
    },
  },
};
