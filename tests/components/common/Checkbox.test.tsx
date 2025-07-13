import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "@/stories/components/common/Checkbox.stories";

const { Default, Checked, Disabled, DisabledChecked } = composeStories(stories);

describe("Checkbox 컴포넌트", () => {
  describe("Default Checkbox", () => {
    it("기본 체크박스가 렌더링되어야 한다.", () => {
      render(<Default />);
      expect(screen.getByLabelText("Checkbox Label")).toBeInTheDocument();
      expect(screen.getByLabelText("Checkbox Label")).not.toBeChecked();
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await Default.play?.();
    });
  });

  describe("Checked Checkbox", () => {
    it("선택된 체크박스가 렌더링되어야 한다.", () => {
      render(<Checked />);
      expect(screen.getByLabelText("Checkbox Label")).toBeInTheDocument();
      expect(screen.getByLabelText("Checkbox Label")).toBeChecked();
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await Checked.play?.();
    });
  });

  describe("Disabled Checkbox", () => {
    it("비활성화된 체크박스가 렌더링되어야 한다.", () => {
      render(<Disabled />);
      expect(screen.getByLabelText("Checkbox Label")).toBeInTheDocument();
      expect(screen.getByLabelText("Checkbox Label")).toBeDisabled();
      expect(screen.getByLabelText("Checkbox Label")).not.toBeChecked();
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await Disabled.play?.();
    });
  });

  describe("DisabledChecked Checkbox", () => {
    it("비활성화되고 선택된 체크박스가 렌더링되어야 한다.", () => {
      render(<DisabledChecked />);
      expect(screen.getByLabelText("Checkbox Label")).toBeInTheDocument();
      expect(screen.getByLabelText("Checkbox Label")).toBeDisabled();
      expect(screen.getByLabelText("Checkbox Label")).toBeChecked();
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await DisabledChecked.play?.();
    });
  });
});
