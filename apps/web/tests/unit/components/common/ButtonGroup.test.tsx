import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ButtonGroup, SystemIcon } from "@repo/ui";

describe("ButtonGroup 컴포넌트", () => {
  it("모든 버튼이 렌더링되어야 한다.", () => {
    const buttons = [
      { label: "First", onClick: () => {} },
      { label: "Second", onClick: () => {} },
      { label: "Third", onClick: () => {} },
    ];
    render(<ButtonGroup buttons={buttons} />);
    expect(screen.getByText("First")).toBeInTheDocument();
    expect(screen.getByText("Second")).toBeInTheDocument();
    expect(screen.getByText("Third")).toBeInTheDocument();
  });

  it("모든 아이콘 버튼이 렌더링되어야 한다.", () => {
    const buttons = [
      { label: <SystemIcon name="chevron-left" />, onClick: () => {} },
      { label: <SystemIcon name="chevron-right" />, onClick: () => {} },
      { label: <SystemIcon name="close" />, onClick: () => {} },
    ];
    render(<ButtonGroup buttons={buttons} />);
    const buttonElements = screen.getAllByRole("button");
    expect(buttonElements).toHaveLength(3);
  });

  it("disabled 버튼이 올바르게 렌더링된다.", () => {
    const buttons = [
      { label: "Enabled", onClick: () => {} },
      { label: "Disabled", onClick: () => {}, disabled: true },
    ];
    render(<ButtonGroup buttons={buttons} />);
    expect(screen.getByText("Disabled").closest("button")).toBeDisabled();
  });
});
