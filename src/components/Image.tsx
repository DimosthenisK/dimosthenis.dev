import React from "react";

interface props {
  url: string;
  alt: string;
  additionalClasses: string;
}

export const Image: React.FC<props> = ({ url, alt, additionalClasses }) => {
  return <img src={url} alt={alt} className={additionalClasses}></img>;
};
