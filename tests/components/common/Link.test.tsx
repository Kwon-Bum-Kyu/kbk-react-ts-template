import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "@/stories/components/common/Link.stories";

const { Default, Disabled } = composeStories(stories);

describe("Link 컴포넌트", () => {
  describe("Default Link", () => {
    it("링크 텍스트와 올바른 href 속성이 렌더링되어야 한다.", () => {
      render(<Default />);
      const link = screen.getByText("Go to Home");
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", "/");
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await Default.play?.();
    });
  });

  describe("Disabled Link", () => {
    it("비활성화된 링크 텍스트가 렌더링되어야 한다.", () => {
      render(<Disabled />);
      const link = screen.getByText("Disabled Link");
      expect(link).toBeInTheDocument();
      expect(link).toHaveClass("text-gray-300");
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await Disabled.play?.();
    });
  });
});
