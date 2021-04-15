import React from "react";
import "./BaseLayout.css";

export const BaseLayout: React.FC<{}> = ({ children }) => {
  return <div className="container mx-auto">{children}</div>;
};
