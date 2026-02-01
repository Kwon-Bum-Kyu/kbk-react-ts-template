export interface SliderProps {
  label?: string;
  min?: number;
  max?: number;
  step?: number;
  value: number;
  onChange: (val: number) => void;
  disabled?: boolean;
  showValue?: boolean;
}
