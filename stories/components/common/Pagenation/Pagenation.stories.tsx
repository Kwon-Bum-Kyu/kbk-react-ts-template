import type { Meta, StoryObj } from "@storybook/react";
import Pagination from "@/components/common/Pagenation";
import type { PaginationProps } from "@/components/common/Pagenation/types.ts";
import { useState } from "react";

/**
 * Pagination 컴포넌트는 많은 양의 콘텐츠를 여러 페이지로 나누어 보여줄 때 사용됩니다.
 */
const meta: Meta<typeof Pagination> = {
  title: "Common/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "페이지네이션 UI를 제공하여 콘텐츠를 나вига이션하는 컴포넌트입니다.",
      },
    },
  },
  argTypes: {
    current: { control: "number" },
    total: { control: "number" },
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

const PaginationWithState = (args: PaginationProps) => {
  const [current, setCurrent] = useState(args.current);
  return <Pagination {...args} current={current} onChange={setCurrent} />;
};

export const Default: Story = {
  args: {
    current: 1,
    total: 10,
  } as PaginationProps,
  render: (args) => <PaginationWithState {...args} />,
};

export const ManyPages: Story = {
  args: {
    current: 25,
    total: 50,
  } as PaginationProps,
  render: (args) => <PaginationWithState {...args} />,
};
