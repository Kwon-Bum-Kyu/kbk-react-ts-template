import type { Meta, StoryObj } from "@storybook/react-vite";
import Radio from "@/components/common/Radio";
import type { RadioProps } from "@/components/common/Radio/types.ts";

/**
 * Radio 컴포넌트는 여러 옵션 중 하나만 선택할 수 있도록 하는 UI 요소입니다.
 * 동일한 `name` 속성을 가진 라디오 버튼들은 하나의 그룹으로 묶입니다.
 */
const meta: Meta<typeof Radio> = {
  title: "Common/Radio",
  component: Radio,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "여러 옵션 중 하나를 선택하기 위한 라디오 버튼 컴포넌트입니다.",
      },
    },
  },
  argTypes: {
    label: {
      description: "라디오 버튼 옆에 표시될 텍스트 레이블입니다.",
      control: { type: "text" },
    },
    name: {
      description: "라디오 버튼 그룹을 식별하는 이름입니다.",
      control: { type: "text" },
    },
    disabled: {
      description: "라디오 버튼을 비활성화합니다.",
      control: { type: "boolean" },
    },
    checked: {
      description: "라디오 버튼의 선택 여부를 제어합니다.",
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    label: "Radio Label",
    name: "story-radio-1",
    checked: false,
    disabled: false,
    onChange: () => {},
  } as RadioProps,
  parameters: {
    docs: {
      description: {
        story: "기본적인 라디오 버튼입니다.",
      },
    },
  },
};

export const Checked: Story = {
  args: {
    label: "Radio Label",
    name: "story-radio-2",
    checked: true,
    disabled: false,
    onChange: () => {},
  } as RadioProps,
  parameters: {
    docs: {
      description: {
        story: "선택된 상태의 라디오 버튼입니다.",
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    label: "Radio Label",
    name: "story-radio-3",
    checked: false,
    disabled: true,
    onChange: () => {},
  } as RadioProps,
  parameters: {
    docs: {
      description: {
        story: "비활성화된 상태의 라디오 버튼입니다.",
      },
    },
  },
};

// To demonstrate a group
export const RadioGroup: Story = {
  render: (args) => (
    <div role="radiogroup" className="flex flex-col space-y-2">
      <Radio {...args} label="Option 1" value="1" name="story-radio-group" onChange={() => {}} />
      <Radio
        {...args}
        label="Option 2"
        value="2"
        name="story-radio-group"
        checked
        onChange={() => {}}
      />
      <Radio {...args} label="Option 3" value="3" name="story-radio-group" onChange={() => {}} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "라디오 버튼 그룹 예시입니다. `name` 속성을 공유하여 그룹으로 동작합니다.",
      },
    },
  },
};
