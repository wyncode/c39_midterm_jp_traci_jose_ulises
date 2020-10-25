import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navContainer">
      <img src="#" alt="logo" />
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

