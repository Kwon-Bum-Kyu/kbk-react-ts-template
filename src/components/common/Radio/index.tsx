import React from "react";
import clsx from "clsx";
import { RadioProps } from "@/components/common/Radio/types.ts";

const Radio: React.FC<RadioProps> = ({
  label,
  name,
  disabled,
  className,
  ...props
}) => {
  return (
    <label className="inline-flex cursor-pointer items-center space-x-2 text-sm">
      <input
        type="radio"
        name={name}
        disabled={disabled}
        className={clsx(
          "h-4 w-4 rounded-full border border-gray-300 transition",
          "checked:border-transparent checked:bg-blue-600",
          "focus:ring-2 focus:ring-blue-500 focus:ring-offset-1",
          disabled && "cursor-not-allowed bg-gray-100 text-gray-400",
          className,
        )}
        {...props}
      />
      <span className={clsx(disabled ? "text-gray-400" : "text-gray-800")}>
        {label}
      </span>
    </label>
  );
};

export default Radio;
