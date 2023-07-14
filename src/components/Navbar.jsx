import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Badge, Grid, Row, Switch, Text } from "@nextui-org/react";
import { CartIcon } from './CartIcon';
import "../index.css";
import "./Navbar.css";

const Navbar = () => {

  const [isInvisible, setIsInvisible] = React.useState(false);
  let location = useLocation();
  //   console.log(location);

  const [key, setKey] = useState(location.key);
  const [home, setHome] = useState(true),
        [beats, setBeats] = useState(false),
        [about, setAbout] = useState(false),
        [contact, setContact] = useState(false),
        [cart, setCart] = useState(false);

  if (location.key !== key) {
    setKey(location.key);

    // console.log(location.pathname);

    if (location.pathname === "/") {
      setHome(true);
      setBeats(false);
      setAbout(false);
      setContact(false);
      setCart(false);
    } else if (location.pathname === "/Beats") {
      setHome(false);
      setBeats(true);
      setAbout(false);
      setContact(false);
      setCart(false);
    } else if (location.pathname === "/About") {
      setHome(false);
      setBeats(false);
      setAbout(true);
      setContact(false);
      setCart(false);
    } else if (location.pathname === "/Contact") {
      setHome(false);
      setBeats(false);
      setAbout(false);
      setContact(true);
      setCart(false);
    } else if (location.pathname === "/Cart") {
      setHome(false);
      setBeats(false);
      setAbout(false);
      setContact(false);
      setCart(true);
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
          <li key={"0"}>
            <Link className={home ? "active" : ""} to="/">
              HOME
            </Link>
          </li>
          <li key={"1"}>
            <Link className={beats ? "active" : ""} to="/Beats">
              BEATS
            </Link>
          </li>
          <li key={"2"}>
            <Link className={about ? "active" : ""} to="/About">
              ABOUT
            </Link>
          </li>
          <li key={"3"}>
            <Link className={contact ? "active" : ""} to="/Contact">
              CONTACT
            </Link>
          </li>
          <li key={"4"}>
            <Link className={cart ? "active" : ""} to="/Cart">
              <Badge
                color="error"
                content="0"
                isInvisible={isInvisible}
                shape="circle"
              >
                <CartIcon fill="currentColor" size={28} />
              </Badge>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
