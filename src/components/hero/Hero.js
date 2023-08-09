import React from "react";
import { images } from "../../assets";

const Hero = ({ heroClass = "defaultHero", bgImg = images.defaultBg , children }) => {
  return (
    <header
      className={heroClass}
      style={{ backgroundImage:`url(${bgImg})`}}
    >
      {children}
    </header>
  );
};

export default Hero;

