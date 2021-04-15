import React from "react";
import { CardFooter } from "./";
import "./Card.css";

export const Card: React.FC<{}> = ({ children }) => {
  const links = [
    {
      url: "https://linkedin.com",
      slug: "linkedin",
      title: "LinkedIn",
      icon: "",
    },
    {
      url: "https://linkedin.com",
      slug: "linkedin",
      title: "LinkedIn",
      icon: "",
    },
    {
      url: "https://linkedin.com",
      slug: "linkedin",
      title: "LinkedIn",
      icon: "",
    },
  ];

  return (
    <div className="self-center mx-auto bg-white w-1/2 h-3/6 m-10 antialiased">
      <div className="h-5/6 w-full bg-yellow-400 py-10 px-5 flex">
        {children}
      </div>
      <div className="h-1/6 w-full bg-yellow-800">
        <CardFooter links={links}></CardFooter>
      </div>
    </div>
  );
};
