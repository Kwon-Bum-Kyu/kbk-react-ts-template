import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "@/stories/components/common/Dropdown.stories";

const { Default, WithValue, Searchable, WithError, Disabled } = composeStories(stories);

describe("Dropdown 컴포넌트", () => {
  describe("Default Dropdown", () => {
    it("플레이스홀더와 함께 렌더링되어야 한다.", () => {
      render(<Default />);
      expect(screen.getByText("Select an option")).toBeInTheDocument();
    });

    it("드롭다운을 열고 닫을 수 있어야 한다.", () => {
      render(<Default />);
      const dropdownButton = screen.getByText("Select an option");
      fireEvent.click(dropdownButton);
      expect(screen.getByText("Option 1")).toBeInTheDocument();
      fireEvent.click(dropdownButton);
      expect(screen.queryByText("Option 1")).not.toBeInTheDocument();
    });

    it("옵션 선택 시 onChange 핸들러가 호출되어야 한다.", () => {
      const onChange = vi.fn();
      render(<Default onChange={onChange} />);
      fireEvent.click(screen.getByText("Select an option"));
      fireEvent.click(screen.getByText("Option 2"));
      expect(onChange).toHaveBeenCalledWith("2");
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await Default.play?.();
    });
  });

  describe("WithValue Dropdown", () => {
    it("선택된 값이 올바르게 표시되어야 한다.", () => {
      render(<WithValue />);
      expect(screen.getByText("Option 2")).toBeInTheDocument();
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await WithValue.play?.();
    });
  });

  describe("Searchable Dropdown", () => {
    it("검색 입력 필드가 렌더링되어야 한다.", () => {
      render(<Searchable />);
      fireEvent.click(screen.getByText("Select an option"));
      expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
    });

    it("검색을 통해 옵션을 필터링할 수 있어야 한다.", () => {
      render(<Searchable />);
      fireEvent.click(screen.getByText("Select an option"));
      fireEvent.change(screen.getByPlaceholderText("Search..."), { target: { value: "Option 3" } });
      expect(screen.getByText("Option 3")).toBeInTheDocument();
      expect(screen.queryByText("Option 1")).not.toBeInTheDocument();
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await Searchable.play?.();
    });
  });

  describe("WithError Dropdown", () => {
    it("오류 메시지가 렌더링되어야 한다.", () => {
      render(<WithError />);
      expect(screen.getByText("This field is required.")).toBeInTheDocument();
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await WithError.play?.();
    });
  });

  describe("Disabled Dropdown", () => {
    it("드롭다운이 비활성화되어야 한다.", () => {
      render(<Disabled />);
      expect(screen.getByText("Option 1")).toBeInTheDocument();
      expect(screen.getByText("Option 1").closest("button")).toBeDisabled();
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await Disabled.play?.();
    });
  });
});
