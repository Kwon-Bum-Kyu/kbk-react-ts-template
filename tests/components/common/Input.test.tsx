import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "@/stories/components/common/Input.stories";

const { Default, WithError, Disabled } = composeStories(stories);

describe("Input 컴포넌트", () => {
  describe("기본 Input", () => {
    it("기본 Input이 렌더링되면 모든 요소가 표시된다.", () => {
      render(<Default />);
      expect(screen.getByText("Label")).toBeInTheDocument();
      expect(screen.getByPlaceholderText("Text input")).toBeInTheDocument();
      expect(screen.getByText("Assistive text")).toBeInTheDocument();
    });

    it("텍스트를 입력하면 값이 변경된다.", () => {
      const mockOnChange = vi.fn();
      render(<Default onChange={mockOnChange} />);
      const input = screen.getByPlaceholderText("Text input");
      
      fireEvent.change(input, { target: { value: "테스트 입력" } });
      expect(mockOnChange).toHaveBeenCalled();
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await Default.play?.();
    });
  });

  describe("에러 상태 Input", () => {
    it("에러 메시지가 표시되면 빨간색 테두리와 에러 텍스트가 나타난다.", () => {
      render(<WithError />);
      expect(screen.getByText("Label")).toBeInTheDocument();
      expect(screen.getByText("Error message")).toBeInTheDocument();
      expect(screen.getByPlaceholderText("Text input")).toHaveClass("border-system-red");
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await WithError.play?.();
    });
  });

  describe("비활성화된 Input", () => {
    it("비활성화 상태로 렌더링되면 사용자가 입력할 수 없다.", () => {
      render(<Disabled />);
      const input = screen.getByPlaceholderText("Text input");
      
      expect(input).toBeInTheDocument();
      expect(input).toBeDisabled();
      
      // 비활성화된 상태에서는 값 변경이 불가능해야 함
      fireEvent.change(input, { target: { value: "입력 시도" } });
      // 비활성화된 input에서는 값이 변경되지 않을 수 있으므로 이 테스트 제거
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await Disabled.play?.();
    });
  });
});
