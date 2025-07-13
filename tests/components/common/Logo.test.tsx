import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "@/stories/components/common/Logo.stories";

const { Default } = composeStories(stories);

describe("Logo 컴포넌트", () => {
  describe("Default Logo", () => {
    it("로고 이미지가 렌더링되어야 한다.", () => {
      render(<Default />);
      expect(screen.getByAltText("Logo")).toBeInTheDocument();
    });

    it("로고가 홈페이지로 연결되는 링크를 포함해야 한다.", () => {
      render(<Default />);
      expect(screen.getByAltText("Logo").closest("a")).toHaveAttribute("href", "/");
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await Default.play?.();
    });
  });
});
