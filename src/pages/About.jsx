import React, { useState, useEffect } from "react";

const About = () => {
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 800px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 800px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  const [match, setMatch] = useState(
    window.matchMedia("(max-width: 1400px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 1400px)")
      .addEventListener("change", (e) => setMatch(e.matches));
  }, []);

  const container: react.CSSProperties = {
    fontFamily: "Montserrat, sansSerif",
    textAlign: "front",
    letterSpacing: ".1em",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  };
  const containermin: react.CSSProperties = {
    fontFamily: "Montserrat, sansSerif",
    textAlign: "front",
    letterSpacing: ".1em",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
  };
  const about1: react.CSSProperties = {
    margin: "0vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    padding: "30px",
    width: "600px",
    // height: "500px",
    background: "rgb(20 20 20 / 50%)",
    // border: "1px solid white",
    overflow: "hidden",
    boxShadow: "#ffffff3a 5px 5px 15px",
    // boxShadow: "#000000aa 5px 5px 20px 2px",
    borderRadius: "12px",
  };
  const about1min: react.CSSProperties = {
    margin: "15vh 5vh 5vh 5vh",
    // alignSelf: "flex-start",
    color: "white",
    padding: "10px",
    width: "70%",
    height: "fit-content",
    background: "rgb(20 20 20 / 70%)",
    // border: "1px solid white",
    // overflow: "hidden",
    boxShadow: "#ffffff3a 5px 5px 15px",
    // boxShadow: "#000000aa 5px 5px 20px 2px",
    borderRadius: "12px",
  };
  // const about2: react.CSSProperties = {
  //   alignSelf: "flex-end",
  //   margin: "0 30vh 15vh 0",
  //   padding: "10px",
  //   color: "white",
  //   width: "500px",
  //   // height: "fit-content",
  //   background: "rgb(20 20 20 / 70%)",
  //   // border: "1px solid white",
  //   overflow: "hidden",
  //   boxShadow: "#ffffff3a 5px 5px 15px",
  //   // boxShadow: "#000000aa 5px 5px 20px 2px",
  //   borderRadius: "12px",
  // };
  // const about2min: react.CSSProperties = {
  //   // alignSelf: "flex-end",
  //   margin: "5vh 5vh 5vh 5vh",
  //   padding: "10px",
  //   color: "white",
  //   width: "fit-content",
  //   height: "fit-content",
  //   background: "rgb(20 20 20 / 70%)",
  //   // border: "1px solid white",
  //   // overflow: "hidden",
  //   boxShadow: "#ffffff3a 5px 5px 15px",
  //   // boxShadow: "#000000aa 5px 5px 20px 2px",
  //   borderRadius: "12px",
  // };
  const heading1: react.CSSProperties = {
    fontSize: "33px",
  };
  const content1: react.CSSProperties = {
    fontSize: "17px",
  };
  // const heading2: react.CSSProperties = {
  //   fontSize: "33px",
  // };
  // const content2: react.CSSProperties = {
  //   fontSize: "17px",
  // };
  const heading1min: react.CSSProperties = {
    fontSize: "22px",
  };
  const content1min: react.CSSProperties = {
    fontSize: "15px",
  };
  // const heading2min: react.CSSProperties = {
  //   fontSize: "22px",
  // };
  // const content2min: react.CSSProperties = {
  //   fontSize: "15px",
  // };
  return (
    <div style={match ? containermin : container}>
      <div style={match ? about1min : about1}>
        <h1 style={matches ? heading1min : heading1}>Our Story</h1>
        <p style={matches ? content1min : content1}>
          NullStrange is a Music Producer/Composer and Beat maker from BHARAT
          who specializes in Dubstep EDMs, Party music, Hip-hop, Drill and R&D
          beats.
        </p>
        <br />
        <p style={matches ? content1min : content1}>
          The start of the music journey occurred when NullStrange got selected
          as a trumpet player for the school band and this continued for 5
          years. During his college days in 2020 NullStrange discovered about
          DAWs and came to know about its possibilities, his inner instincts
          guided him along to his discovery of how the music is made in the
          industry. This compelled him to learn about all the different
          techniques of making music and make a community catering to all the
          ORIGINAL and CREATIVE people out there.
        </p>
      </div>
    </div>
  );
};
export default About;
