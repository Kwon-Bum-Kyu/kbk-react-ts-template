import type { Meta, StoryObj } from "@storybook/react-vite";
import Dropdown from "@/components/common/Dropdown";
import type { DropdownProps } from "@/components/common/Dropdown/types.ts";

/**
 * Dropdown 컴포넌트는 사용자가 목록에서 하나의 옵션을 선택할 수 있도록 하는 UI 요소입니다.
 * 검색, 비활성화, 오류 상태 등 다양한 기능을 지원합니다.
 */
const meta: Meta<typeof Dropdown> = {
  title: "Common/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "옵션 목록에서 항목을 선택하는 드롭다운 컴포넌트입니다.",
      },
    },
  },
  argTypes: {
    label: { control: "text" },
    assistiveText: { control: "text" },
    errorMessage: { control: "text" },
    options: { control: "object" },
    value: { control: "text" },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    searchable: { control: "boolean" },
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const defaultOptions = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
  { label: "Option 3", value: "3" },
];

export const Default: Story = {
  args: {
    label: "Label",
    assistiveText: "Assistive text",
    placeholder: "Select an option",
    options: defaultOptions,
  } as DropdownProps,
};

export const WithValue: Story = {
  args: {
    ...Default.args,
    value: "2",
  } as DropdownProps,
};

export const Searchable: Story = {
  args: {
    ...Default.args,
    searchable: true,
    options: [
        ...defaultOptions,
        { label: "Another Option", value: "4" },
        { label: "Yet Another", value: "5" },
    ]
  } as DropdownProps,
};

export const WithError: Story = {
  args: {
    ...Default.args,
    errorMessage: "This field is required.",
  } as DropdownProps,
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    value: "1",
    disabled: true,
  } as DropdownProps,
};
