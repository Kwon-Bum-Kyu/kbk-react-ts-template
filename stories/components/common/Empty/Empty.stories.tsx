import type { Meta, StoryObj } from "@storybook/react";
import Empty from "@/components/common/Empty";
import type { EmptyProps } from "@/components/common/Empty/types.tsx";

/**
 * Empty 컴포넌트는 데이터가 없거나 비어 있는 상태를 시각적으로 표현합니다.
 * `blank`, `image`, `text` 세 가지 유형을 지원합니다.
 */
const meta: Meta<typeof Empty> = {
  title: "Common/Empty",
  component: Empty,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "데이터가 비어있음을 나타내는 플레이스홀더 컴포넌트입니다.",
      },
    },
  },
  argTypes: {
    type: { control: "radio", options: ["blank", "image", "text"] },
    size: { control: "number" },
    className: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Empty>;

export const Blank: Story = {
  args: {
    type: "blank",
    size: 128,
  } as EmptyProps,
};

export const Image: Story = {
  args: {
    type: "image",
    size: 128,
  } as EmptyProps,
};

export const Text: Story = {
  args: {
    type: "text",
    size: 128,
  } as EmptyProps,
};
