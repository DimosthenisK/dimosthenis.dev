import React from "react";
import { SocialButton } from "./";

interface props {
  links: Array<{
    slug: string;
    title: string;
    icon: string;
    url: string;
  }>;
}

export const CardFooter: React.FC<props> = ({ links, children }) => {
  return (
    <div className="flex grid-flow-col justify-center items-center h-full">
      <ul
        className="list-none m-0 p-0 text-center"
        style={{ verticalAlign: "baseline" }}
      >
        {links.map((link) => (
          <SocialButton link={link}></SocialButton>
        ))}
      </ul>
    </div>
  );
};
