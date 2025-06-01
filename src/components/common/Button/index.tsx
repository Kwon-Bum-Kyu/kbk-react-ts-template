import { ButtonProps } from "@/components/common/Button/types.ts";
import React from "react";

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  onClick,
  disabled = false,
}) => {
  const baseStyles =
    "px-4 py-2 rounded-md font-semibold focus:outline-none transition-colors duration-150";

  const variantStyles = {
    primary: disabled
      ? "bg-blue-100 text-white cursor-not-allowed"
      : "bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-800",
    secondary: disabled
      ? "bg-gray-50 text-gray-400 cursor-not-allowed"
      : "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-300",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]}`}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
