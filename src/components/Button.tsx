import Icon from "@mdi/react";
import React from "react";

interface props {
  icon?: string;
  label: string;
  url: string;
}

export const Button: React.FC<props> = ({ icon, label, url }) => {
  return (
    <a
      className="bg-yellow-700 hover:bg-yellow-600 text-white font-bold py-2 px-4 border-b-4 border-yellow-800 hover:border-yellow-700 rounded block w-full text-center transition duration-500 ease-in-out "
      href={url}
    >
      {(icon && typeof icon == "string") ?? (
        <Icon path={icon as string} size={1.3} className="inline pr-2"></Icon>
      )}
      {label}
    </a>
  );
};
