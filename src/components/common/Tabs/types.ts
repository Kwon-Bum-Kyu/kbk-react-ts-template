export interface TabsProps {
  tabs: string[];
  activeTab: string;
  onChange: (tab: string) => void;
  variant?: "underline" | "pill";
}
