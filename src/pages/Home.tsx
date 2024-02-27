import { Showcase } from "../fragments/Showcase";
import ScrollTop from "../components/ScrollTop";
import HomeTopContainer from "../fragments/HomeTopContainer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Home = () => {
  // a hack for react build full url nav issues
  const navigate = useNavigate();
  useEffect(() => {
    const forwardPage = (window as any).page?.trim();
    (window as any).page = undefined;

    if (forwardPage === "contact") {
      navigate("/contact");
    }
  }, [navigate]);

  return (
    <>
      <HomeTopContainer />
      <Showcase />
      <ScrollTop />
    </>
  );
};
