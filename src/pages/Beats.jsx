import React from "react";
import Beat from "../components/Beat";
import frost from "../audio/Frost.mp3";
import gunman from "../audio/Gunman.mp3";
import rahasya from "../audio/Rahasya.mp3";
import frostimg from "../images/Frost.png";
import gunmanimg from "../images/Gunman.png";
import rahasyaimg from "../images/Rahasya.png";
const Beats = () => {
  const container: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    height: "100vh",
    justifyContent: "center",
  };
  const nam = [
    "Frost","Gunman","Rahasya"
  ];
  const audioSrc = [
    frost,gunman,rahasya
  ];
  const albumCover = [
    frostimg, gunmanimg, rahasyaimg
  ];
  const ct = [0,1,2];
  return (
    <div>
      <h3>BEATS</h3>
      <div style={container}>
        {ct.map((i) => (
          <Beat name = {nam[i]} src = {audioSrc[i]} img = {albumCover[i]}></Beat>
        ))}
      </div>
    </div>
  );
};
export default Beats;
