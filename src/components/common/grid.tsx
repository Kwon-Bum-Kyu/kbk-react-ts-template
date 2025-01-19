import React from "react";

interface GridProps {
  children: React.ReactNode;
}

const Grid: React.FC<GridProps> = ({ children }) => {
  return (
    <div className="mobile:grid-cols-4 tablet:grid-cols-6 desktop:grid-cols-12 tablet:px-8 desktop:px-16 grid gap-4 px-4">
      {children}
    </div>
  );
};

export default Grid;
