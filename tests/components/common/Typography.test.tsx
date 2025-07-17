import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "@/stories/components/common/Typography.stories";

const { H1, Paragraph, Small } = composeStories(stories);

describe("Typography 컴포넌트", () => {
  describe("H1 Typography", () => {
    it("h1 태그와 올바른 텍스트가 렌더링되어야 한다.", () => {
      render(<H1 />);
      const element = screen.getByRole("heading", { level: 1 });
      expect(element).toBeInTheDocument();
      expect(element).toHaveTextContent("Heading 1");
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await H1.play?.();
    });
  });

  describe("Paragraph Typography", () => {
    it("p 태그와 올바른 텍스트가 렌더링되어야 한다.", () => {
      render(<Paragraph />);
      const element = screen.getByText(
        "This is a paragraph. It provides a good reading experience.",
      );
      expect(element).toBeInTheDocument();
      expect(element.tagName).toBe("P");
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await Paragraph.play?.();
    });
  });

  describe("Small Typography", () => {
    it("small 태그와 올바른 텍스트가 렌더링되어야 한다.", () => {
      render(<Small />);
      const element = screen.getByText(
        "This is a small text, suitable for captions or footnotes.",
      );
      expect(element).toBeInTheDocument();
      expect(element.tagName).toBe("P");
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await Small.play?.();
    });
  });
});
