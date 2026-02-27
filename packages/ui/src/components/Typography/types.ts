export interface TypographyProps {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "large"
    | "paragraph"
    | "small"
    | "xsmall";
  className?: string;
  children: React.ReactNode;
}
