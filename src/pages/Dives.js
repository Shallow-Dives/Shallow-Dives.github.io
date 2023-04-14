import React from "react";
import "./Dives.css";

function Dives() {

  return (
    <div className="library-container">
      <h1 className="library-title">Selected posts</h1>
      <div className="library-grid">
        <div className="library-card">
          <div className="library-card-content">
            <h2 className="library-card-title">Title 1</h2>
          </div>
        </div>
        <div className="library-card">
          <div className="library-card-content">
            <h2 className="library-card-title">Title 1</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dives;
