import React from "react";
import Intro from "../components/Intro";
import Carousels from "../components/Carousels";
import Services from "../components/Services";
import "./Home.css";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Intro />
      <Carousels />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
