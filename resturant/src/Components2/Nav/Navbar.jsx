import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <div className="nav">
        <h1>🍔 Burger</h1>

        <div className="vv">
          <a href="#">USer</a>
          <a href="#">Cart</a>
        </div>
        <div className="link">
          <ul>
            <a href="#">home</a>
            <a href="#">about</a>
            <a href="#">contact</a>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
