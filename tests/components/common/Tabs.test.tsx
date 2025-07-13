import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "@/stories/components/common/Tabs.stories";

const { Underline, Pill } = composeStories(stories);

describe("Tabs 컴포넌트", () => {
  describe("Underline Tabs", () => {
    it("모든 탭이 렌더링되어야 한다.", () => {
      render(<Underline />);
      expect(screen.getByText("Tab 1")).toBeInTheDocument();
      expect(screen.getByText("Tab 2")).toBeInTheDocument();
      expect(screen.getByText("Tab 3")).toBeInTheDocument();
    });

    it("활성 탭에 올바른 스타일이 적용되어야 한다.", () => {
      render(<Underline />);
      const activeTab = screen.getByText("Tab 1");
      expect(activeTab).toHaveClass("border-b-2");
      expect(activeTab).toHaveClass("border-blue-800");
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await Underline.play?.();
    });
  });

  describe("Pill Tabs", () => {
    it("모든 탭이 렌더링되어야 한다.", () => {
      render(<Pill />);
      expect(screen.getByText("Tab 1")).toBeInTheDocument();
      expect(screen.getByText("Tab 2")).toBeInTheDocument();
      expect(screen.getByText("Tab 3")).toBeInTheDocument();
    });

    it("활성 탭에 올바른 스타일이 적용되어야 한다.", () => {
      render(<Pill />);
      const activeTab = screen.getByText("Tab 1");
      expect(activeTab).toHaveClass("bg-blue-800");
      expect(activeTab).toHaveClass("text-white");
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await Pill.play?.();
    });
  });
});
