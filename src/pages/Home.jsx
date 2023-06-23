import React from "react";
import Intro from "../components/Intro";
import Carousels from "../components/Carousels";
import Services from "../components/Services";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Intro />
      <Carousels />
      <Services />
    </>
  );
};

export default Home;
