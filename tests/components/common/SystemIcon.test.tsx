import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "@/stories/components/common/SystemIcon.stories";

const { Default, Colored } = composeStories(stories);

describe("SystemIcon 컴포넌트", () => {
  describe("Default SystemIcon", () => {
    it("기본 아이콘이 렌더링되어야 한다.", () => {
      render(<Default />);
      expect(screen.getByLabelText("github")).toBeInTheDocument();
    });

    it("아이콘의 크기가 올바르게 적용되어야 한다.", () => {
      render(<Default />);
      expect(screen.getByLabelText("github")).toHaveAttribute("width", "24");
      expect(screen.getByLabelText("github")).toHaveAttribute("height", "24");
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await Default.play?.();
    });
  });

  describe("Colored SystemIcon", () => {
    it("색상이 적용된 아이콘이 렌더링되어야 한다.", () => {
      render(<Colored />);
      expect(screen.getByLabelText("check-circle")).toBeInTheDocument();
    });

    it("아이콘의 크기와 클래스 이름이 올바르게 적용되어야 한다.", () => {
      render(<Colored />);
      const icon = screen.getByLabelText("check-circle");
      expect(icon).toHaveAttribute("width", "32");
      expect(icon).toHaveAttribute("height", "32");
      expect(icon).toHaveClass("text-system-green");
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await Colored.play?.();
    });
  });
});
