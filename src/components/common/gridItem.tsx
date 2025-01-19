import React from "react";

interface GridItemProps {
  children: React.ReactNode;
  className?: string;
}

const GridItem: React.FC<GridItemProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`flex h-16 items-center justify-center bg-red-200 ${className}`}
    >
      {children}
    </div>
  );
};

export default GridItem;
