import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <Link to="/" className="navbar__link">
          <span className="navbar__title">~\~~ <span className="navbar__title-text">Shallow Dives</span></span>
        </Link>
      </div>
      <ul className="navbar__links">
        <li>
          <Link to="/about" className="navbar__link">
            About
          </Link>
        </li>
        <li>
          <Link to="/dives" className="navbar__link">
            Dives
          </Link>
        </li>
          <li>
          <Link to="/logs" className="navbar__link">
            Logs
          </Link>
        </li>
        <li>
          <Link to="/me" className="navbar__link">
            Me
          </Link>
        </li>
      </ul>
      <button class="toggle">&#8702;</button>
    </nav>
  );
}

export default Navbar;
