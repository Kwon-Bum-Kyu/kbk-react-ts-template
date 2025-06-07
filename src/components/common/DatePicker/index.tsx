import React, { useState } from "react";
import { format } from "date-fns";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import clsx from "clsx";
import { DatePickerProps } from "@/components/common/DatePicker/types.ts";

const DatePicker: React.FC<DatePickerProps> = ({
  mode = "single",
  value,
  onChange,
}) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (date: Date | DateRange | undefined) => {
    onChange(date);
    if (mode === "single") setOpen(false);
  };

  const displayValue =
    mode === "single"
      ? value instanceof Date
        ? format(value, "yyyy-MM-dd")
        : "Select date"
      : value && "from" in value && value.from
        ? value.to
          ? `${format(value.from, "MM/dd")} - ${format(value.to, "MM/dd")}`
          : format(value.from, "MM/dd")
        : "Select range";

  return (
    <div className="relative inline-block w-[240px] text-left">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={clsx(
          "w-full rounded border px-3 py-2 text-left text-sm",
          "border-gray-300 hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500",
        )}
      >
        {displayValue}
      </button>

      {open && (
        <div className="absolute z-10 mt-2 rounded border border-gray-200 bg-white shadow-lg">
          {mode === "range" ? (
            <DayPicker
              mode="range"
              selected={value as DateRange}
              onSelect={handleSelect}
              numberOfMonths={2}
              pagedNavigation
              required={false}
            />
          ) : (
            <DayPicker
              mode="single"
              selected={value as Date}
              onSelect={handleSelect}
              numberOfMonths={1}
              pagedNavigation
            />
          )}
        </div>
      )}
    </div>
  );
};

export default DatePicker;
