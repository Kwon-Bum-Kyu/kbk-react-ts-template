import React from "react";

export interface LinkProps {
  to: string;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}
