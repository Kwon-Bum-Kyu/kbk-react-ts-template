import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "@/stories/components/common/Slider.stories";

const { Default, Stepped, Disabled, NoValueLabel } = composeStories(stories);

describe("Slider 컴포넌트", () => {
  describe("Default Slider", () => {
    it("기본 슬라이더가 렌더링되어야 한다.", () => {
      render(<Default />);
      expect(screen.getByRole("slider")).toBeInTheDocument();
      expect(screen.getByText("50")).toBeInTheDocument();
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await Default.play?.();
    });
  });

  describe("Stepped Slider", () => {
    it("스텝 슬라이더가 렌더링되어야 한다.", () => {
      render(<Stepped />);
      expect(screen.getByRole("slider")).toBeInTheDocument();
      expect(screen.getByText("30")).toBeInTheDocument();
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await Stepped.play?.();
    });
  });

  describe("Disabled Slider", () => {
    it("비활성화된 슬라이더가 렌더링되어야 한다.", () => {
      render(<Disabled />);
      const slider = screen.getByRole("slider");
      expect(slider).toBeInTheDocument();
      expect(slider).toBeDisabled();
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await Disabled.play?.();
    });
  });

  describe("NoValueLabel Slider", () => {
    it("값이 표시되지 않는 슬라이더가 렌더링되어야 한다.", () => {
      render(<NoValueLabel />);
      expect(screen.getByRole("slider")).toBeInTheDocument();
      expect(screen.queryByText("50")).not.toBeInTheDocument();
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await NoValueLabel.play?.();
    });
  });
});
