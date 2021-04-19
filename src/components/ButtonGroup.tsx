import React from "react";

interface props {
  label: string;
}

export const ButtonGroup: React.FC<props> = ({ label, children }) => {
  return (
    <div className="w-1/2 xs:w-full xs:mb-2 sm:w-full sm:mb-2 border border-yellow-700 border-solid rounded-xl p-3 mx-1">
      <h3 className="font-semibold rounded-2xl border border-solid border-yellow-700 inline px-2 bg-yellow-700 text-white">
        {label}
      </h3>
      <div className="flex flex-row mt-2">{children}</div>
    </div>
  );
};
