import React from "react";
import "./BaseLayout.css";

export const BaseLayout: React.FC<{}> = ({ children }) => {
  return (
    <div className="mx-auto bg-black w-screen h-screen flex ">{children}</div>
  );
};
