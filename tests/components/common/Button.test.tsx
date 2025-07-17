import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "@/stories/components/common/Button.stories";

const { Primary, Secondary } = composeStories(stories);

describe("Button 컴포넌트", () => {
  describe("Primary 버튼", () => {
    it("기본 버튼이 렌더링되면 'Primary Button' 텍스트가 표시된다.", async () => {
      render(<Primary />);
      expect(screen.getByRole("button")).toHaveTextContent("Primary Button"); // 버튼의 텍스트
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await Primary.play?.(); // play 함수가 있을 경우 실행
    });
  });

  describe("Secondary 버튼", () => {
    it("비활성화된 상태로 렌더링되면 클릭할 수 없다.", () => {
      render(<Secondary disabled />);
      const button = screen.getByRole("button");
      expect(button).toBeDisabled();
    });
  });
});
