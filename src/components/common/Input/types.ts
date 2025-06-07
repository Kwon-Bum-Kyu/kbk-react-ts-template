export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  assistiveText?: string;
  errorMessage?: string;
}
