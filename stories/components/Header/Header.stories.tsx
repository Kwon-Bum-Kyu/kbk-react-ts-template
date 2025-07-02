import type { Meta, StoryObj } from "@storybook/react";
import Header from "@/components/Header";
import { MemoryRouter } from "react-router-dom";

/**
 * Header 컴포넌트는 사이트 상단 네비게이션 역할을 하며
 * 로그인 상태에 따라 메뉴를 다르게 표시합니다.
 *
 * - 로그인 상태일 경우: 유저 이름과 메뉴가 표시됩니다.
 * - 비로그인 상태일 경우: 로그인 및 회원가입 버튼이 표시됩니다.
 *
 * 반응형 레이아웃을 지원하며, 모바일에서는 햄버거 메뉴로 동작합니다.
 */
const meta: Meta<typeof Header> = {
  title: "Common/Header",
  component: Header,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "사이트의 상단 내비게이션 컴포넌트입니다. 로그인 여부에 따라 메뉴 항목이 다르게 렌더링됩니다.",
      },
    },
  },
  argTypes: {
    isLoggedIn: {
      description: "로그인 여부를 설정합니다.",
      control: { type: "boolean" },
      defaultValue: false,
    },
    username: {
      description: "로그인 상태일 때 표시할 사용자 이름입니다.",
      control: { type: "text" },
      defaultValue: "",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const LoggedIn: Story = {
  args: {
    isLoggedIn: true,
    username: "KBK",
  },
  parameters: {
    docs: {
      description: {
        story: "로그인 상태의 헤더 UI입니다. 유저 이름과 메뉴가 표시됩니다.",
      },
    },
  },
};

export const LoggedOut: Story = {
  args: {
    isLoggedIn: false,
    username: "",
  },
  parameters: {
    docs: {
      description: {
        story:
          "🚪 로그아웃 상태의 헤더 UI입니다. 로그인/회원가입 버튼이 표시됩니다.",
      },
    },
  },
};
