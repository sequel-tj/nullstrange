import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../index.css";
import "./Navbar.css";
const Navbar = () => {
  let location = useLocation();
  //   console.log(location);
  const [key, setKey] = useState(location.key);
  const [home, setHome] = useState(true),
    [beats, setBeats] = useState(false),
    [about, setAbout] = useState(false),
    [contact, setContact] = useState(false);
  if (location.key != key) {
    setKey(location.key);
    if (location.pathname === "/") {
      setHome(true);
      setBeats(false);
      setAbout(false);
      setContact(false);
    } else if (location.pathname === "/Beats") {
      setHome(false);
      setBeats(true);
      setAbout(false);
      setContact(false);
    } else if (location.pathname === "/About") {
      setHome(false);
      setBeats(false);
      setAbout(true);
      setContact(false);
    } else if (location.pathname === "/Contact") {
      setHome(false);
      setBeats(false);
      setAbout(false);
      setContact(true);
    }
  }
  return (
    <div className="navbar-container">
      <div className="navbar">
        {/* <h1>NullStrange</h1> */}
        <img
          width={"180px"}
          height={"auto"}
          src={require("../images/nullstrange_logo.png")}
          alt="NullStrange"
        />
        <ul>
          <li>
            <Link className={home ? "active" : ""} to="/">
              HOME
            </Link>
          </li>
          <li>
            <Link className={beats ? "active" : ""} to="/Beats">
              BEATS
            </Link>
          </li>
          <li>
            <Link className={about ? "active" : ""} to="/About">
              ABOUT
            </Link>
          </li>
          <li>
            <Link className={contact ? "active" : ""} to="/Contact">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
