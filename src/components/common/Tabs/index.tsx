import React from "react";
import clsx from "clsx";
import { TabsProps } from "@/components/common/Tabs/types.ts";

const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onChange,
  variant = "underline",
}) => {
  return (
    <div className="flex space-x-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={clsx(
            "rounded px-4 py-1 text-sm font-medium transition",
            variant === "pill"
              ? clsx(
                  tab === activeTab
                    ? "bg-blue-800 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200",
                )
              : clsx(
                  tab === activeTab
                    ? "border-b-2 border-blue-800 text-blue-800"
                    : "text-gray-600 hover:text-blue-800",
                ),
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
