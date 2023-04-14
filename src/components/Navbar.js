import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <Link to="/" className="navbar__link">
          <span className="navbar__title">Shallow Dives</span>
        </Link>
      </div>
      <ul className="navbar__links">
        <li>
          <Link to="/dives" className="navbar__link">
            Dives
          </Link>
        </li>
          <li>
          <Link to="/library" className="navbar__link">
            Log
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
