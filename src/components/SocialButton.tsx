import Icon from "@mdi/react";
import React from "react";

interface props {
  link: {
    slug: string;
    title: string;
    icon: string;
    url: string;
  };
}

export const SocialButton: React.FC<props> = ({ link }) => {
  return (
    <li className="inline-block mx-5 my-15">
      <a
        type="button"
        href={link.url}
        className="transition duration-500 ease-in-out rounded-full hover:bg-yellow-600 transform p-3 mx-auto mt-2"
        target="_blank"
      >
        <Icon path={link.icon} size={1.5} color="white"></Icon>
      </a>
    </li>
  );
};
