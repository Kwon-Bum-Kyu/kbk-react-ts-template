import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "@/stories/components/Header.stories";

const { LoggedIn, LoggedOut } = composeStories(stories);

describe("Header 컴포넌트", () => {
  describe("로그인 상태 Header", () => {
    it("로그인 상태에서 사용자 이름이 표시된다.", () => {
      render(<LoggedIn />);
      const userButton = screen.getByRole("button", { name: /KBK/i });
      expect(userButton).toBeInTheDocument();
    });

    it("로그인 상태에서 메뉴가 표시된다.", () => {
      render(<LoggedOut />);
      const navs = screen.getAllByRole("navigation");
      expect(navs).toHaveLength(2); // 데스크탑 + 모바일 메뉴

      // 예: 데스크탑 메뉴 안에 Log in / Register 포함 여부 검사
      const desktopNav = navs[0];
      expect(within(desktopNav).getByText("Log in")).toBeInTheDocument();
      expect(within(desktopNav).getByText("Register")).toBeInTheDocument();
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await LoggedIn.play?.();
    });
  });

  describe("로그아웃 상태 Header", () => {
    it("로그아웃 상태에서 로그인/회원가입 버튼이 표시된다.", () => {
      render(<LoggedOut />);
      const navs = screen.getAllByRole("navigation");
      expect(navs).toHaveLength(2);
      const desktopNav = navs[0];
      expect(within(desktopNav).getByText("Register")).toBeInTheDocument();
    });

    it("로그아웃 상태에서 사용자 이름이 표시되지 않는다.", () => {
      render(<LoggedOut />);
      expect(screen.queryByRole("button", { name: /KBK/i })).not.toBeInTheDocument();
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await LoggedOut.play?.();
    });
  });
});
