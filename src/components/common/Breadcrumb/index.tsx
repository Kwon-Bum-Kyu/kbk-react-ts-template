import { BreadcrumbProps } from "@/components/common/Breadcrumb/types.ts";
import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="space-x-1 text-sm text-gray-600">
      {items.map((item, index) => (
        <span key={index} className="inline">
          {item.href ? (
            <Link to={item.href} className="text-blue-700 hover:underline">
              {item.label}
            </Link>
          ) : (
            <span>{item.label}</span>
          )}
          {index < items.length - 1 && <span className="mx-1">/</span>}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
