import type { Meta, StoryObj } from "@storybook/react-vite";
import DatePicker from "@/components/common/DatePicker";
import type { DatePickerProps } from "@/components/common/DatePicker/types.ts";
import { useState } from "react";
import { DateRange } from "react-day-picker";

/**
 * DatePicker 컴포넌트는 사용자가 날짜 또는 날짜 범위를 선택할 수 있도록 하는 UI 요소입니다.
 * `single` 모드와 `range` 모드를 지원합니다.
 */
const meta: Meta<typeof DatePicker> = {
  title: "Common/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "날짜 및 날짜 범위를 선택하는 데 사용되는 데이트 피커 컴포넌트입니다.",
      },
    },
  },
  argTypes: {
    mode: {
      control: "radio",
      options: ["single", "range"],
    },
    value: { control: "object" },
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

const SingleDatePickerWithState = (args: DatePickerProps) => {
  const [date, setDate] = useState<Date | DateRange | undefined>(args.value);
  return <DatePicker {...args} value={date} onChange={setDate} />;
};

const RangeDatePickerWithState = (args: DatePickerProps) => {
  const [range, setRange] = useState<Date | DateRange | undefined>(args.value);
  return <DatePicker {...args} value={range} onChange={setRange} />;
};

export const Single: Story = {
  args: {
    mode: "single",
    value: new Date(),
  } as DatePickerProps,
  render: (args) => <SingleDatePickerWithState {...args} />,
};

export const Range: Story = {
  args: {
    mode: "range",
    value: {
      from: new Date(),
      to: new Date(new Date().setDate(new Date().getDate() + 5)),
    },
  } as DatePickerProps,
  render: (args) => <RangeDatePickerWithState {...args} />,
};
