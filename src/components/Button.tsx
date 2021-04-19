import Icon from "@mdi/react";
import React from "react";
import ReactGA from "react-ga";

interface props {
  icon?: string;
  label: string;
  url: string;
}

export const Button: React.FC<props> = ({ icon, label, url }) => {
  return (
    <ReactGA.OutboundLink
      className="bg-yellow-700 hover:bg-yellow-600 text-white font-bold py-2 px-4 border-b-4 border-yellow-800 hover:border-yellow-700 rounded block w-full text-center transition duration-500 ease-in-out "
      eventLabel="Click"
      to={url}
      target="_blank"
    >
      {icon ? (
        <Icon
          path={(icon as unknown) as string}
          size={1.3}
          className="inline pr-2"
        ></Icon>
      ) : (
        <></>
      )}
      {label}
    </ReactGA.OutboundLink>
  );
};
