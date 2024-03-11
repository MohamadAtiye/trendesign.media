"use client";
import HomeTopContainer from "./components/HomeTopContainer";
import ScrollTop from "./components/ScrollTop";
import { Showcase } from "./components/Showcase";

const Home = () => {
  return (
    <>
      <HomeTopContainer />
      <Showcase />
      <ScrollTop />
    </>
  );
};

export default Home;
