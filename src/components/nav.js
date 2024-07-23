import React from "react";
import logo from "../images/logo.svg";
import "../styles/nav.css";
function Navbar() {
  return (
    <div className="nav">
      <img src={logo} alt="reat logo"></img>
      <h3 className="nav-logo">ReactFacts</h3>
      <h4 className="title">React Course - Project 1</h4>
    </div>
  );
}

export default Navbar;
