import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "@/stories/components/common/DatePicker.stories";

const { Single, Range } = composeStories(stories);

describe("DatePicker 컴포넌트", () => {
  describe("Single DatePicker", () => {
    it("기본 DatePicker가 렌더링되어야 한다.", () => {
      render(<Single />);
      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("달력이 열리고 닫힐 수 있어야 한다.", () => {
      render(<Single />);
      const button = screen.getByRole("button");
      fireEvent.click(button);
      expect(screen.getByRole("grid")).toBeInTheDocument(); // Calendar grid
      fireEvent.click(button);
      expect(screen.queryByRole("grid")).not.toBeInTheDocument();
    });

    it("날짜 선택 시 캘린더가 열린다.", () => {
      render(<Single />);
      const button = screen.getByRole("button");
      fireEvent.click(button);
      expect(screen.getByRole("grid")).toBeInTheDocument();
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await Single.play?.();
    });
  });

  describe("Range DatePicker", () => {
    it("날짜 범위 DatePicker가 렌더링되어야 한다.", () => {
      render(<Range />);
      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("날짜 범위 선택 시 캘린더가 열린다.", () => {
      render(<Range />);
      const button = screen.getByRole("button");
      fireEvent.click(button);
      expect(screen.getAllByRole("grid")).toHaveLength(2); // 범위 선택기는 두 개의 달력이 있음
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await Range.play?.();
    });
  });
});
