import React from "react";

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}
