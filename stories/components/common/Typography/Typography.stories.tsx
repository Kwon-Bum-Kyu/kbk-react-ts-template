import type { Meta, StoryObj } from "@storybook/react";
import Typography from "@/components/common/Typography";
import type { TypographyProps } from "@/components/common/Typography/types.ts";

/**
 * Typography 컴포넌트는 텍스트의 스타일(크기, 굵기, 줄 간격 등)을 일관되게 관리합니다.
 * h1부터 h6, paragraph, small 등 다양한 시맨틱 변형을 지원합니다.
 */
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

export const H1: Story = {
  args: {
    variant: "h1",
    children: "Heading 1",
  } as TypographyProps,
};

export const Paragraph: Story = {
  args: {
    variant: "paragraph",
    children: "This is a paragraph. It provides a good reading experience.",
  } as TypographyProps,
};

export const Small: Story = {
  args: {
    variant: "small",
    children: "This is a small text, suitable for captions or footnotes.",
  } as TypographyProps,
};
