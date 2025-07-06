import type { Meta, StoryObj } from "@storybook/react";
import Slider from "@/components/common/Slider";
import type { SliderProps } from "@/components/common/Slider/types.ts";
import { useState } from "react";

/**
 * Slider 컴포넌트는 사용자가 지정된 범위 내에서 값을 선택할 수 있도록 하는 UI 요소입니다.
 * 연속적인 값 또는 불연속적인 값(step)을 선택하는 데 사용됩니다.
 */
const meta: Meta<typeof Slider> = {
  title: "Common/Slider",
  component: Slider,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "값의 범위를 시각적으로 선택하는 슬라이더 컴포넌트입니다.",
      },
    },
  },
  argTypes: {
    label: { control: "text" },
    min: { control: "number" },
    max: { control: "number" },
    step: { control: "number" },
    value: { control: "number" },
    onChange: { action: "changed" },
    disabled: { control: "boolean" },
    showValue: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

const SliderWithState = (args: SliderProps) => {
  const [value, setValue] = useState(args.value);
  return <Slider {...args} value={value} onChange={setValue} />;
};

export const Default: Story = {
  args: {
    label: "Volume",
    min: 0,
    max: 100,
    step: 1,
    value: 50,
    disabled: false,
    showValue: true,
  } as SliderProps,
  render: (args) => <SliderWithState {...args} />,
};

export const Stepped: Story = {
  args: {
    ...Default.args,
    label: "Brightness",
    step: 10,
    value: 30,
  } as SliderProps,
  render: (args) => <SliderWithState {...args} />,
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    label: "Disabled Slider",
    value: 70,
    disabled: true,
  } as SliderProps,
  render: (args) => <SliderWithState {...args} />,
};

export const NoValueLabel: Story = {
  args: {
    ...Default.args,
    label: "Opacity",
    showValue: false,
  } as SliderProps,
  render: (args) => <SliderWithState {...args} />,
};
