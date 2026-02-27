import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Dropdown } from "@repo/ui";

const mockOptions = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
  { label: "Option 3", value: "3" },
];

describe("Dropdown 컴포넌트", () => {
  it("플레이스홀더와 함께 렌더링되어야 한다.", () => {
    render(
      <Dropdown
        options={mockOptions}
        placeholder="Select an option"
        onChange={() => {}}
      />
    );
    expect(screen.getByText("Select an option")).toBeInTheDocument();
  });

  it("드롭다운을 열고 닫을 수 있어야 한다.", () => {
    render(
      <Dropdown
        options={mockOptions}
        placeholder="Select an option"
        onChange={() => {}}
      />
    );
    const dropdownButton = screen.getByText("Select an option");
    fireEvent.click(dropdownButton);
    expect(screen.getByText("Option 1")).toBeInTheDocument();
  });

  it("옵션을 선택할 수 있어야 한다.", () => {
    const handleChange = vi.fn();
    render(
      <Dropdown
        options={mockOptions}
        placeholder="Select an option"
        onChange={handleChange}
      />
    );
    fireEvent.click(screen.getByText("Select an option"));
    fireEvent.click(screen.getByText("Option 1"));
    expect(handleChange).toHaveBeenCalledWith("1");
  });
});
