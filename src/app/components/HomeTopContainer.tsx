import React from "react";
import Hero from "./Hero";
import { IMG_SRC } from "../utils/constants";
const HomeTopContainer = () => {
  return (
    <Hero
      // image={"./imgs/hero2.jpg"}
      image={IMG_SRC + "/imgs/hero2.jpg"}
      text={["Print", "Craft", "Personalize"]}
      subtext={
        <>
          <b>“Unleashing Creativity Through Precision Printing“</b> - At our
          company, we bring your ideas to life with our state-of-the-art digital
          printing technology. From concept to print, we ensure every pixel is
          perfect. Your vision, our expertise, together we create tangible
          masterpieces.
        </>
      }
    />
  );
};
export default HomeTopContainer;
