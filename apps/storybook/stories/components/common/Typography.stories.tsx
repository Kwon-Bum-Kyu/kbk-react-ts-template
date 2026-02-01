import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "@/common";
import type { TypographyProps } from "@/common";

const meta: Meta<typeof Typography> = {
  title: "Common/Typography",
  component: Typography,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "텍스트 스타일을 위한 타이포그래피 컴포넌트입니다.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "large", "paragraph", "small", "xsmall"],
    },
    children: { control: "text" },
    className: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    variant: "paragraph",
    children: "Typography text example",
  } as TypographyProps,
};
