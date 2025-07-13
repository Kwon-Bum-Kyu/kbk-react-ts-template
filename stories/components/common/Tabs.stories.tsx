import type { Meta, StoryObj } from "@storybook/react-vite";
import Tabs from "@/components/common/Tabs";
import type { TabsProps } from "@/components/common/Tabs/types.ts";
import { useState } from "react";

/**
 * Tabs 컴포넌트는 관련된 콘텐츠를 여러 섹션으로 나누어 보여줄 때 사용됩니다.
 * `underline`과 `pill` 두 가지 스타일 변형을 지원합니다.
 */
const meta: Meta<typeof Tabs> = {
  title: "Common/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "콘텐츠를 여러 탭으로 구성하여 보여주는 컴포넌트입니다.",
      },
    },
  },
  argTypes: {
    tabs: { control: "object" },
    activeTab: { control: "text" },
    onChange: { action: "changed" },
    variant: { control: "radio", options: ["underline", "pill"] },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const TabsWithState = (args: TabsProps) => {
  const [activeTab, setActiveTab] = useState(args.activeTab);
  return <Tabs {...args} activeTab={activeTab} onChange={setActiveTab} />;
};

export const Underline: Story = {
  args: {
    tabs: ["Tab 1", "Tab 2", "Tab 3"],
    activeTab: "Tab 1",
    variant: "underline",
  } as TabsProps,
  render: (args) => <TabsWithState {...args} />,
};

export const Pill: Story = {
  args: {
    ...Underline.args,
    variant: "pill",
  } as TabsProps,
  render: (args) => <TabsWithState {...args} />,
};
