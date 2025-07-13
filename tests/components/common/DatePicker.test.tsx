import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "@/stories/components/common/DatePicker.stories";

const { Single, Range } = composeStories(stories);

describe("DatePicker 컴포넌트", () => {
  describe("Single DatePicker", () => {
    it("기본 DatePicker가 렌더링되어야 한다.", () => {
      render(<Single />);
      expect(screen.getByPlaceholderText("Select date")).toBeInTheDocument();
    });

    it("달력이 열리고 닫힐 수 있어야 한다.", () => {
      render(<Single />);
      const input = screen.getByPlaceholderText("Select date");
      fireEvent.click(input);
      expect(screen.getByRole("grid")).toBeInTheDocument(); // Calendar grid
      fireEvent.click(input);
      expect(screen.queryByRole("grid")).not.toBeInTheDocument();
    });

    it("날짜 선택 시 onChange 핸들러가 호출되어야 한다.", () => {
      const onChange = vi.fn();
      render(<Single onChange={onChange} />);
      const input = screen.getByPlaceholderText("Select date");
      fireEvent.click(input);
      fireEvent.click(screen.getByText("15")); // Assuming 15 is a valid day in the current month
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith(expect.any(Date));
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await Single.play?.();
    });
  });

  describe("Range DatePicker", () => {
    it("날짜 범위 DatePicker가 렌더링되어야 한다.", () => {
      render(<Range />);
      expect(screen.getByPlaceholderText("Select date range")).toBeInTheDocument();
    });

    it("날짜 범위 선택 시 onChange 핸들러가 호출되어야 한다.", () => {
      const onChange = vi.fn();
      render(<Range onChange={onChange} />);
      const input = screen.getByPlaceholderText("Select date range");
      fireEvent.click(input);
      fireEvent.click(screen.getByText("10")); // Select start date
      fireEvent.click(screen.getByText("20")); // Select end date
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith(expect.objectContaining({
        from: expect.any(Date),
        to: expect.any(Date),
      }));
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await Range.play?.();
    });
  });
});
