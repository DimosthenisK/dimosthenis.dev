import {
  mdiFacebook,
  mdiGithub,
  mdiInstagram,
  mdiLinkedin,
  mdiTwitter,
} from "@mdi/js";
import React from "react";
import { CardFooter } from "./";
import "./Card.css";

export const Card: React.FC<{}> = ({ children }) => {
  const links = [
    {
      url: "https://www.linkedin.com/in/dimostheniskalaitzis/",
      slug: "linkedin",
      title: "LinkedIn",
      icon: mdiLinkedin,
    },
    {
      url: "https://github.com/dimosthenisk",
      slug: "github",
      title: "Github",
      icon: mdiGithub,
    },
    {
      url: "https://www.instagram.com/__dimosthenis__/",
      slug: "instagram",
      title: "Instagram",
      icon: mdiInstagram,
    },
    {
      url: "https://www.facebook.com/Zhmos12",
      slug: "facebook",
      title: "Facebook",
      icon: mdiFacebook,
    },
    {
      url: "https://twitter.com/DimosthenisK12",
      slug: "twitter",
      title: "Twitter",
      icon: mdiTwitter,
    },
  ];

  return (
    <div className="self-center mx-auto bg-white w-1/2 h-3/6 m-10 antialiased shadow-ld">
      <div className="h-5/6 w-full py-10 px-5 flex">{children}</div>
      <div className="h-1/6 w-full bg-yellow-700">
        <CardFooter links={links}></CardFooter>
      </div>
    </div>
  );
};
