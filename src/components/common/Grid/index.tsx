import { GridItemProps, GridProps } from "@/components/common/Grid/types.ts";
import React from "react";

const Grid: React.FC<GridProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-4 gap-4 px-4 tablet:grid-cols-6 tablet:px-8 desktop:grid-cols-12 desktop:px-16">
      {children}
    </div>
  );
};

const GridItem: React.FC<GridItemProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`flex h-16 items-center justify-center font-medium ${className}`}
    >
      {children}
    </div>
  );
};

export { Grid, GridItem };
