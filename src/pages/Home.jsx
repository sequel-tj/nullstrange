import React from "react";
import Intro from "../components/Intro";
import Footer from "./Footer";
import Carousels from "../components/Carousels";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Intro />
      <Carousels />
      <Footer />
    </>
  );
};

export default Home;
