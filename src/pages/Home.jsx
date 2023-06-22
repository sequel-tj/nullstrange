import React from "react";
import Intro from "../components/Intro";
import Carousels from "../components/Carousels";
import Services from "../components/Services";
import Footer from "./Footer";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Intro />
      <Carousels />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
