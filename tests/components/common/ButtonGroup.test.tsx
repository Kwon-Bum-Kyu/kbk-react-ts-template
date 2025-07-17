import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "@/stories/components/common/ButtonGroup.stories";

const { TextButtons, IconButtons } = composeStories(stories);

describe("ButtonGroup 컴포넌트", () => {
  describe("TextButtons", () => {
    it("모든 버튼이 렌더링되어야 한다.", () => {
      render(<TextButtons />);
      expect(screen.getByText("First")).toBeInTheDocument();
      expect(screen.getByText("Second")).toBeInTheDocument();
      expect(screen.getByText("Third")).toBeInTheDocument();
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await TextButtons.play?.();
    });
  });

  describe("IconButtons", () => {
    it("모든 아이콘 버튼이 렌더링되어야 한다.", () => {
      render(<IconButtons />);
      const buttons = screen.getAllByRole("button");
      expect(buttons).toHaveLength(3);
    });

    it("비활성화된 아이콘 버튼은 클릭할 수 없어야 한다.", () => {
      render(<IconButtons />);
      const buttons = screen.getAllByRole("button");
      expect(buttons[2]).toBeDisabled(); // 세 번째 버튼이 비활성화됨
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await IconButtons.play?.();
    });
  });
});
