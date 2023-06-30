import React from "react";
const About = () => {
  const container: react.CSSProperties = {
    fontFamily: "Montserrat, sansSerif",
    textAlign: "front",
    letterSpacing: ".1em",
    height: "100vh",
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
  };
  const about1: react.CSSProperties = {
    margin: "20vh 0 0 30vh",
    alignSelf: "flex-start",
    color: "white",
    padding: "10px",
    width: "500px",
    // height: "500px",
    background: "rgb(20 20 20 / 70%)",
    // border: "1px solid white",
    overflow: "hidden",
    boxShadow: "#ffffff3a 5px 5px 15px",
    // boxShadow: "#000000aa 5px 5px 20px 2px",
    borderRadius: "12px",
  };
  const about2: react.CSSProperties = {
    alignSelf: "flex-end",
    margin: "0 30vh 15vh 0",
    padding: "10px",
    color: "white",
    width: "500px",
    // height: "500px",
    background: "rgb(20 20 20 / 70%)",
    // border: "1px solid white",
    overflow: "hidden",
    boxShadow: "#ffffff3a 5px 5px 15px",
    // boxShadow: "#000000aa 5px 5px 20px 2px",
    borderRadius: "12px",
  };
  const heading1: react.CSSProperties = {
    fontSize: "33px",
  };
  const content1: react.CSSProperties = {
    fontSize: "17px",
  };
  const heading2: react.CSSProperties = {
    fontSize: "33px",
  };
  const content2: react.CSSProperties = {
    fontSize: "17px",
  };
  return (
    <div style={container}>
      <div style={about1}>
        <h1 style={heading1}>NULLSTRANGE</h1>
        <p style={content1}>
          NullStrange is a Music Producer/Composer and Beat maker from BHARAT
          who specializes in Dubstep EDMs, Party music, Hip-hop, Drill and R&D
          beats.
        </p>
      </div>
      <div style={about2}>
        <h1 style={heading2}>THE JOURNEY</h1>
        <p style={content2}>
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
