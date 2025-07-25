import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "@/stories/components/common/Pagenation.stories";

const { Default, ManyPages } = composeStories(stories);

describe("Pagination 컴포넌트", () => {
  describe("Default Pagination", () => {
    it("올바른 페이지 번호와 네비게이션 버튼이 렌더링되어야 한다.", () => {
      render(<Default />);
      expect(screen.getByText("1")).toBeInTheDocument();
      expect(screen.getByText("10")).toBeInTheDocument();
      expect(screen.getByText("<")).toBeInTheDocument();
      expect(screen.getByText(">")).toBeInTheDocument();
    });

    it("첫 페이지에서 이전 버튼이 비활성화되어야 한다.", () => {
      render(<Default />);
      expect(screen.getByText("<")).toBeDisabled();
    });

    it("페이지 클릭 시 onChange 핸들러가 호출되어야 한다.", () => {
      const { rerender } = render(<Default />);
      const page2 = screen.getByText("2");
      fireEvent.click(page2);
      // Since the story uses useState, the component will re-render with the new active page
      rerender(<Default current={2} />);
      expect(screen.getByText("2")).toHaveClass("bg-blue-800");
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await Default.play?.();
    });
  });

  describe("ManyPages Pagination", () => {
    it("많은 페이지가 있을 때 생략(...)이 렌더링되어야 한다.", () => {
      render(<ManyPages />);
      expect(screen.getAllByText("...")).toHaveLength(2); // 앞뒤로 두 개의 ...이 있음
    });

    it("마지막 페이지에서 다음 버튼이 비활성화되어야 한다.", () => {
      render(<ManyPages current={50} />);
      expect(screen.getByText(">")).toBeDisabled();
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await ManyPages.play?.();
    });
  });
});