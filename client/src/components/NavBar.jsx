import React from "react";
import { Link } from "react-router-dom";

export default function Brewery() {
  return (
    <div className="navContainer">
      <img src="https://i.imgur.com/cgRrzDX.png" alt="logo" />
      <ul className="navbar">
        <Link to="/Home">
          <li>Home</li>
        </Link>
        <Link to="/AboutUs">
          <li>About Us</li>
        </Link>
        <Link to="/Brewery">
          <li>Brewery</li>
        </Link>
      </ul>
    </div>
  );
}
