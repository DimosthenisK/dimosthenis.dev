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
      url: "https://www.instagram.com/dimosthenisk12/",
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
    <div className="self-center mx-auto bg-white xl2:w-5/12 xl2:h-2/5 xl:w-1/2 xl:h-1/2 l2:w-8/12 l2:h-3/6 l:w-8/12 l:h-1/2 m:w-10/12 m:h-1/2 sm:w-11/12 sm:h-4/6 antialiased shadow-ld">
      <div className="h-5/6 xs:h-full w-full py-10 px-5 flex flex-row xs:flex-col">
        {children}
      </div>
      <div className="h-1/6 w-full bg-yellow-700">
        <CardFooter links={links}></CardFooter>
      </div>
    </div>
  );
};
