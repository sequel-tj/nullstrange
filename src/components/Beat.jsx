import React, { useState } from "react";
import audioSrc from "../audio/bewafa.mp3";
const Beat = (props) => {
  const [play, setPlay] = useState(false);
  const [cartadd, setcartadd] = useState("Add To Cart");
  const [isHovering, setIsHovering] = useState(false);
  const [isHovering1, setIsHovering1] = useState(false);
  const container: React.CSSProperties = {
    margin: "10vh",
    color: "white",
    padding: "10px 10px 0 10px",
    width: "200px",
    height: "300px",
    background: "rgb(20 20 20 / 70%)",
    border: "1px solid white",
    overflow: "hidden",
    boxShadow: "#ffffff3a 5px 5px 15px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "12px",
  };
  const audio: React.CSSProperties = {
    width: "70px",
  };
  const image: React.CSSProperties = {
    marginTop: "20px",
    height: "80px",
    width: "80px",
    cursor: `${isHovering ? "pointer" : "default"}`,
  };
  const onClickHandler = () => {
    const music = document.querySelector("#music");
    if (play === false) {
      music.load();
      music.play();
      setPlay(true);
    } else {
      music.pause();
      setPlay(false);
    }
  };
  const songName: React.CSSProperties = {
    margin: "5px",
    fontSize: "25px",
    fontFamily: "Lucida Handwriting, cursive",
    textAlign: "front",
    letterSpacing: ".05em",
  };
  const cart: React.CSSProperties = {
    marginTop: "auto",
    color: "white",
    width: "200px",
    height: "50px",
    border: "1px solid white",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    borderRadius: "0  0 12px 12px",
    cursor: `${isHovering1 ? "pointer" : "default"}`,
  };
  const cartText: React.CSSProperties = {
    padding: "8px",
    fontSize: "17px",
    fontFamily: "Lucida Handwriting, cursive",
    textAlign: "front",
    letterSpacing: ".05em",
  };
  const hoverin = () => {
    setIsHovering(true);
  };
  const hoverout = () => {
    setIsHovering(false);
  };
  const hoverin1 = () => {
    setIsHovering1(true);
  };
  const hoverout1 = () => {
    setIsHovering1(false);
  };
  const onClickHandler1 = () => {
    if (cartadd === "Add To Cart") setcartadd("Remove");
    else setcartadd("Add To Cart");
  };
  return (
    <div style={container}>
      <h2 style={songName}>{props.name}</h2>
      <img
        src={require("../images/play.png")}
        style={image}
        onClick={onClickHandler}
        onMouseEnter={hoverin}
        onMouseLeave={hoverout}
      />
      <audio src={audioSrc} id="music" style={audio}>
        Your browser does not support the audio element.
      </audio>
      <div
        style={cart}
        onClick={onClickHandler1}
        onMouseEnter={hoverin1}
        onMouseLeave={hoverout1}
      >
        <h2 style={cartText}>{cartadd}</h2>
      </div>
    </div>
  );
};
export default Beat;
