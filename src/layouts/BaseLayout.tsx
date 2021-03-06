import React from "react";
import "./BaseLayout.css";

export const BaseLayout: React.FC<{}> = ({ children }) => {
  return (
    <div className="container mx-auto sm:h-screen m:h-screen l:h-screen l2:h-screen xl:h-screen xl2:h-screen xs:min-h-screen flex ">
      {children}
    </div>
  );
};
