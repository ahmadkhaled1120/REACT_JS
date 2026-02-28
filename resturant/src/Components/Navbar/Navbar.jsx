import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <h2 className="logo">🍔 Burger</h2>
      <div>
        <ul className="link">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Gallery</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
