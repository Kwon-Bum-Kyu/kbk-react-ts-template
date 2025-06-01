import { TypographyProps } from "@/components/common/Typography/types.ts";
import React from "react";

const variantStyles: Record<string, string> = {
  h1: "text-4xl font-normal leading-[72px]",
  h2: "text-3xl font-normal leading-[64px]",
  h3: "text-2xl font-normal leading-[48px]",
  h4: "text-xl font-normal leading-[40px]",
  h5: "text-lg font-normal leading-[32px]",
  h6: "text-base font-normal leading-[32px]",
  large: "text-[18px] font-normal leading-[24px]",
  paragraph: "text-base font-normal leading-[24px]",
  small: "text-sm font-normal leading-[24px]",
  xsmall: "text-xs font-normal leading-[16px]",
};

const Typography: React.FC<TypographyProps> = ({
  variant = "paragraph",
  className = "",
  children,
}) => {
  // HTML 태그 매핑
  const Tag: keyof JSX.IntrinsicElements = [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
  ].includes(variant)
    ? (variant as keyof JSX.IntrinsicElements) // h1~h6는 그대로 사용
    : "p"; // 나머지는 p 태그 사용

  return (
    <Tag className={`${variantStyles[variant]} ${className}`}>{children}</Tag>
  );
};

export default Typography;
