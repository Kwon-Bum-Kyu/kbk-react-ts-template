import type { Meta, StoryObj } from "@storybook/react-vite";
import Input from "@/components/common/Input";
import type { InputProps } from "@/components/common/Input/types.ts";

/**
 * Input 컴포넌트는 사용자로부터 텍스트 입력을 받기 위한 기본 필드입니다.
 * 레이블, 보조 텍스트, 오류 메시지, 비활성화 상태 등 다양한 옵션을 지원합니다.
 */
const meta: Meta<typeof Input> = {
  title: "Common/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "사용자 입력을 위한 폼 필드입니다. 다양한 상태(기본, 오류, 비활성화)를 가집니다.",
      },
    },
  },
  argTypes: {
    label: {
      description: "입력 필드 위에 표시될 레이블입니다.",
      control: { type: "text" },
    },
    placeholder: {
      description: "입력 필드에 표시될 플레이스홀더 텍스트입니다.",
      control: { type: "text" },
    },
    assistiveText: {
      description: "입력 필드 아래에 표시될 보조 텍스트입니다.",
      control: { type: "text" },
    },
    errorMessage: {
      description: "오류 상태일 때 표시될 메시지입니다. 이 값이 있으면 오류 스타일이 적용됩니다.",
      control: { type: "text" },
    },
    disabled: {
      description: "입력 필드를 비활성화합니다.",
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "Label",
    placeholder: "Text input",
    assistiveText: "Assistive text",
    disabled: false,
  } as InputProps,
  parameters: {
    docs: {
      description: {
        story: "기본적인 Input 컴포넌트의 예시입니다. 레이블과 보조 텍스트를 포함합니다.",
      },
    },
  },
};

export const WithError: Story = {
  args: {
    label: "Label",
    placeholder: "Text input",
    errorMessage: "Error message",
    disabled: false,
  } as InputProps,
    parameters: {
    docs: {
      description: {
        story: "오류 상태의 Input 컴포넌트입니다. `errorMessage`가 제공되면 테두리가 빨갛게 변합니다.",
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    label: "Label",
    placeholder: "Text input",
    disabled: true,
  } as InputProps,
    parameters: {
    docs: {
      description: {
        story: "비활성화된 상태의 Input 컴포넌트입니다. 사용자는 이 필드와 상호작용할 수 없습니다.",
      },
    },
  },
};
