import React from "react";

interface ButtonProps {
  variant?: "primary" | "secondary"; // 버튼 타입
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  onClick,
  disabled = false,
}) => {
  const baseStyles = "px-4 py-2 rounded-md font-semibold focus:outline-none";
  const variants = {
    primary: {
      default: "bg-primary text-white",
      hover: "hover:bg-primary-hover",
      active: "active:bg-primary-active",
      disabled: "bg-primary-disabled text-gray-400 cursor-not-allowed",
    },
    secondary: {
      default: "bg-secondary text-gray-800",
      hover: "hover:bg-secondary-hover",
      active: "active:bg-secondary-active",
      disabled: "bg-secondary-disabled text-gray-400 cursor-not-allowed",
    },
  };

  const variantStyles = variants[variant];
  const stateStyles = disabled
    ? variantStyles.disabled
    : `${variantStyles.default} ${variantStyles.hover} ${variantStyles.active}`;

  return (
    <button
      className={`${baseStyles} ${stateStyles}`}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
