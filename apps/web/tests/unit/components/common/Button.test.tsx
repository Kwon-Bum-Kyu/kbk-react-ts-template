import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "@/components/common/Button";

describe("Button 컴포넌트", () => {
  it("기본 버튼이 렌더링되면 텍스트가 표시된다.", () => {
    render(<Button>Primary Button</Button>);
    expect(screen.getByRole("button")).toHaveTextContent("Primary Button");
  });

  it("secondary 버튼이 올바르게 렌더링된다.", () => {
    render(<Button variant="secondary">Secondary Button</Button>);
    expect(screen.getByRole("button")).toHaveTextContent("Secondary Button");
  });

  it("비활성화된 상태로 렌더링되면 클릭할 수 없다.", () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });
});
