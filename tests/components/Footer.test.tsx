import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "@/stories/components/Footer.stories";

const { Default } = composeStories(stories);

describe("Footer 컴포넌트", () => {
  describe("기본 Footer", () => {
    it("Footer가 렌더링되면 필요한 요소들이 표시된다.", () => {
      render(<Default />);
      // contentinfo 역할을 가진 footer 요소가 존재하는지 확인
      expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    });

    it("Footer가 레이아웃에 올바르게 표시된다.", () => {
      render(<Default />);
      const footer = screen.getByRole("contentinfo");
      expect(footer).toBeInTheDocument();
      expect(footer).toBeVisible();
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await Default.play?.();
    });
  });
});