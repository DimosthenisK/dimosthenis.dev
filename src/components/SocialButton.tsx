import { mdiLinkedin } from "@mdi/js";
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
      <a type="button" href={link.url} className="">
        <Icon path={mdiLinkedin} size={1.5} color="white"></Icon>
      </a>
    </li>
  );
};
