import React from "react";
import Beat from "../components/Beat";
const Beats = () => {
  const container: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    height: "100vh",
    justifyContent: "center",
  };
  const name = [
    "bewafa",
    "bewafa",
    "bewafa",
    "bewafa",
    "bewafa",
    "bewafa",
    "bewafa",
    "bewafa",
    "bewafa",
    "bewafa",
    "bewafa",
    "bewafa",
  ];
  return (
    <div>
      <h3>BEATS</h3>
      <div style={container}>
        {name.map((value) => (
          <Beat name={value}></Beat>
        ))}
      </div>
    </div>
  );
};
export default Beats;
