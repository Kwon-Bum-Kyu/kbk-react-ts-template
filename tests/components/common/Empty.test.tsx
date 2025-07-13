import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "@/stories/components/common/Empty.stories";

const { Blank, Image, Text } = composeStories(stories);

describe("Empty 컴포넌트", () => {
  describe("Blank Empty", () => {
    it("기본 Empty 컴포넌트가 렌더링되어야 한다.", () => {
      render(<Blank />);
      expect(screen.getByTestId("empty-component")).toBeInTheDocument();
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await Blank.play?.();
    });
  });

  describe("Image Empty", () => {
    it("이미지 Empty 컴포넌트가 렌더링되어야 한다.", () => {
      render(<Image />);
      expect(screen.getByTestId("empty-component")).toBeInTheDocument();
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await Image.play?.();
    });
  });

  describe("Text Empty", () => {
    it("텍스트 Empty 컴포넌트가 렌더링되어야 한다.", () => {
      render(<Text />);
      expect(screen.getByTestId("empty-component")).toBeInTheDocument();
    });

    it("play 함수가 실행되어도 예외 없이 동작해야 한다.", async () => {
      await Text.play?.();
    });
  });
});
