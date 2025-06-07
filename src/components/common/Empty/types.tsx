export type EmptyType = "blank" | "image" | "text";
export interface EmptyProps {
  type?: EmptyType;
  size?: number; // width/height (e.g. 64)
  className?: string;
}
