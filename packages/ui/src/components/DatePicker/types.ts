import { DateRange } from "react-day-picker";

export interface DatePickerProps {
  mode?: "single" | "range";
  value: Date | DateRange | undefined;
  onChange: (val: Date | DateRange | undefined) => void;
}
