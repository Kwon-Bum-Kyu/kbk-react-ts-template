import type { Meta, StoryObj } from "@storybook/react";
import ButtonGroup from "@/components/common/ButtonGroup";
import type { ButtonGroupProps } from "@/components/common/ButtonGroup/types";
import { SystemIcon } from "@/components/common";

/**
 * ButtonGroup 컴포넌트는 여러 버튼을 하나의 그룹으로 묶어 표시합니다.
 * 텍스트 버튼과 아이콘 버튼을 모두 지원합니다.
 */
const meta: Meta<typeof ButtonGroup> = {
  title: "Common/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "여러 버튼을 그룹으로 묶어주는 컨테이너 컴포넌트입니다.",
      },
    },
  },
  argTypes: {
    buttons: { control: "object" },
    className: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const TextButtons: Story = {
  args: {
    buttons: [
      { label: "First", onClick: () => alert("Clicked First") },
      { label: "Second", onClick: () => alert("Clicked Second") },
      { label: "Third", disabled: true },
    ],
  } as ButtonGroupProps,
};

export const IconButtons: Story = {
  args: {
    buttons: [
      { label: <SystemIcon name="arrow-left" />, onClick: () => alert("Left") },
      { label: <SystemIcon name="arrow-right" />, onClick: () => alert("Right") },
      {
        label: <SystemIcon name="close" />,
        onClick: () => alert("Close"),
        disabled: true,
      },
    ],
  } as ButtonGroupProps,
};
