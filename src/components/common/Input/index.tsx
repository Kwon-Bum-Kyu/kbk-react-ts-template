import React from "react";
import clsx from "clsx";
import { InputProps } from "@/components/common/Input/types.ts";

const Input: React.FC<InputProps> = ({
  label,
  assistiveText,
  errorMessage,
  disabled,
  className,
  ...props
}) => {
  const hasError = !!errorMessage;

  return (
    <div className="flex flex-col space-y-1">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}

      <input
        disabled={disabled}
        className={clsx(
          "rounded border px-3 py-2 text-sm outline-none transition-colors",
          "placeholder-gray-400",
          disabled
            ? "cursor-not-allowed border-gray-100 bg-gray-100 text-gray-400"
            : hasError
              ? "border-system-red focus:border-system-red"
              : "border-gray-200 hover:border-gray-400 focus:border-blue-500",
          className,
        )}
        {...props}
      />

      {/* 보조 텍스트 or 에러 메시지 */}
      {hasError ? (
        <p className="text-xs text-system-red">{errorMessage}</p>
      ) : assistiveText ? (
        <p className="text-xs text-gray-400">{assistiveText}</p>
      ) : null}
    </div>
  );
};

export default Input;
