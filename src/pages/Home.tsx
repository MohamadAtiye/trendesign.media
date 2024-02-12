import { Showcase } from "../fragments/Showcase";
import ScrollTop from "../components/ScrollTop";
import HomeTopContainer from "../fragments/HomeTopContainer";

export const Home = () => {
  return (
    <>
      <HomeTopContainer />
      <Showcase />
      <ScrollTop />
    </>
  );
};
