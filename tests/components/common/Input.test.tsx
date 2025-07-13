import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "@/stories/components/common/Input.stories";

const { Default, WithError, Disabled } = composeStories(stories);

describe("Input 컴포넌트", () => {
  describe("Default Input", () => {
    it("기본 Input이 렌더링되어야 한다.", () => {
      render(<Default />);
      expect(screen.getByLabelText("Label")).toBeInTheDocument();
      expect(screen.getByPlaceholderText("Text input")).toBeInTheDocument();
      expect(screen.getByText("Assistive text")).toBeInTheDocument();
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await Default.play?.();
    });
  });

  describe("WithError Input", () => {
    it("오류 메시지와 함께 Input이 렌더링되어야 한다.", () => {
      render(<WithError />);
      expect(screen.getByLabelText("Label")).toBeInTheDocument();
      expect(screen.getByText("Error message")).toBeInTheDocument();
      expect(screen.getByLabelText("Label")).toHaveClass("border-system-red");
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await WithError.play?.();
    });
  });

  describe("Disabled Input", () => {
    it("비활성화된 Input이 렌더링되어야 한다.", () => {
      render(<Disabled />);
      const input = screen.getByLabelText("Label");
      expect(input).toBeInTheDocument();
      expect(input).toBeDisabled();
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await Disabled.play?.();
    });
  });
});
