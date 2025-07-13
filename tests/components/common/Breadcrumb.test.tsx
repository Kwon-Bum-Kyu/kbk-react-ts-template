import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "@/stories/components/common/Breadcrumb.stories";

const { Default } = composeStories(stories);

describe("Breadcrumb 컴포넌트", () => {
  describe("Default Breadcrumb", () => {
    it("모든 Breadcrumb 항목이 렌더링되어야 한다.", () => {
      render(<Default />);
      expect(screen.getByText("Home")).toBeInTheDocument();
      expect(screen.getByText("Docs")).toBeInTheDocument();
      expect(screen.getByText("Components")).toBeInTheDocument();
      expect(screen.getByText("Breadcrumb")).toBeInTheDocument();
    });

    it("마지막 항목을 제외한 모든 항목에 링크가 있어야 한다.", () => {
      render(<Default />);
      expect(screen.getByText("Home").closest("a")).toHaveAttribute("href", "/");
      expect(screen.getByText("Docs").closest("a")).toHaveAttribute("href", "/docs");
      expect(screen.getByText("Components").closest("a")).toHaveAttribute("href", "/docs/components");
      expect(screen.getByText("Breadcrumb").closest("a")).not.toBeInTheDocument();
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await Default.play?.();
    });
  });
});