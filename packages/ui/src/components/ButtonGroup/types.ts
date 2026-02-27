import React from "react";

export interface ButtonItem {
  label: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}
export interface ButtonGroupProps {
  buttons: ButtonItem[];
  className?: string;
}
