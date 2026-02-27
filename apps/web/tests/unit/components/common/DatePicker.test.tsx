import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { DatePicker } from "@repo/ui";

describe("DatePicker 컴포넌트", () => {
  it("기본 DatePicker가 렌더링되어야 한다.", () => {
    render(
      <DatePicker mode="single" value={undefined} onChange={() => {}} />
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("달력이 열리고 닫힐 수 있어야 한다.", () => {
    render(
      <DatePicker mode="single" value={undefined} onChange={() => {}} />
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);
    // 달력이 열리면 날짜 선택 요소가 표시됨
    expect(screen.getByRole("grid")).toBeInTheDocument();
  });

  it("Range 모드로 렌더링될 수 있다.", () => {
    render(
      <DatePicker mode="range" value={undefined} onChange={() => {}} />
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
