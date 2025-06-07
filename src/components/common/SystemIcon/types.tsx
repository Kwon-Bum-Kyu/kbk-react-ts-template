export type SystemIconName =
  | "bars"
  | "search"
  | "info"
  | "close"
  | "circle"
  | "circle-filled"
  | "eye"
  | "eye-slash"
  | "chevron-right"
  | "chevron-left"
  | "chevron-up"
  | "chevron-down"
  | "toggle-on"
  | "toggle-off"
  | "user"
  | "user-circle"
  | "user-outline"
  | "envelope"
  | "envelope-outline"
  | "caret-up"
  | "caret-down"
  | "arrow-up"
  | "arrow-down"
  | "arrow-left"
  | "arrow-right"
  | "check-square"
  | "check-square-outline"
  | "check-circle"
  | "check-circle-outline"
  | "square"
  | "square-outline";

export interface SystemIconProps {
  name: SystemIconName;
  size?: number | string;
  className?: string;
}
