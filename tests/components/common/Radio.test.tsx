import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "@/stories/components/common/Radio.stories";

const { Default, Checked, Disabled, RadioGroup } = composeStories(stories);

describe("Radio 컴포넌트", () => {
  describe("Default Radio", () => {
    it("기본 라디오 버튼이 렌더링되어야 한다.", () => {
      render(<Default />);
      expect(screen.getByLabelText("Radio Label")).toBeInTheDocument();
      expect(screen.getByLabelText("Radio Label")).not.toBeChecked();
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await Default.play?.();
    });
  });

  describe("Checked Radio", () => {
    it("선택된 라디오 버튼이 렌더링되어야 한다.", () => {
      render(<Checked />);
      expect(screen.getByLabelText("Radio Label")).toBeInTheDocument();
      expect(screen.getByLabelText("Radio Label")).toBeChecked();
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await Checked.play?.();
    });
  });

  describe("Disabled Radio", () => {
    it("비활성화된 라디오 버튼이 렌더링되어야 한다.", () => {
      render(<Disabled />);
      expect(screen.getByLabelText("Radio Label")).toBeInTheDocument();
      expect(screen.getByLabelText("Radio Label")).toBeDisabled();
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await Disabled.play?.();
    });
  });

  describe("RadioGroup", () => {
    it("라디오 그룹 내에서 올바른 항목이 선택되어야 한다.", () => {
      render(<RadioGroup />);
      expect(screen.getByLabelText("Option 1")).not.toBeChecked();
      expect(screen.getByLabelText("Option 2")).toBeChecked();
      expect(screen.getByLabelText("Option 3")).not.toBeChecked();
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await RadioGroup.play?.();
    });
  });
});
