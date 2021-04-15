import React from "react";
import "./BaseLayout.css";

export const BaseLayout: React.FC<{}> = ({ children }) => {
  return <div className="mx-auto w-screen h-screen flex ">{children}</div>;
};
