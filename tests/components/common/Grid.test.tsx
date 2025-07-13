import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "@/stories/components/common/Grid.stories";

const { Default } = composeStories(stories);

describe("Grid 컴포넌트", () => {
  describe("Default Grid", () => {
    it("그리드 아이템들이 올바르게 렌더링되어야 한다.", () => {
      render(<Default />);
      for (let i = 1; i <= 12; i++) {
        expect(screen.getByText(String(i))).toBeInTheDocument();
      }
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await Default.play?.();
    });
  });
});
