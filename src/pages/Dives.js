import React from "react";
import { Link } from "react-router-dom";

import "../components/Library.css";
import "../components/Explainer.css";

function Dives() {

  return (
    <div className="library__container">
      <div className="explainer">
        <h1>Dives</h1>
        <h3>A collection of shallow dives into development topics to enable tech project builds, each presented in a
        different online educational experience format</h3>
      </div>
      <div className="library__grid">

        <Link
          to={`/`}
          className="library__card">
          <div className="library__card-content">
            <div className="library__card-icon"
              style={{
                backgroundImage: `url(${require(`../assets/images/test.png`)})`,
              }}>
            </div>
            <h3>AI Zero-to-Hero</h3>
            <p>Translating Karpathy's videos into an active learning experience</p>
            <div className="explainer__tag">The Interactive Notebook</div>
          </div>
        </Link>

        <Link
          to={`/`}
          className="library__card">
          <div className="library__card-content">
            <div className="library__card-icon"
              style={{
                backgroundImage: `url(${require(`../assets/images/test.png`)})`,
              }}>
            </div>
            <h3>MBTA Lite Map</h3>
            <p>Displaying informative art with a Raspberry Pi</p>
            <div className="explainer__tag">The Project Guide</div>
          </div>
        </Link>

        <Link
          to={`/`}
          className="library__card">
          <div className="library__card-content">
            <div className="library__card-icon"
              style={{
                backgroundImage: `url(${require(`../assets/images/test.png`)})`,
              }}>
            </div>
            <h3>Game Dev Wizardry</h3>
            <p>Exploring software magic inspired by extreme console constraints</p>
            <div className="explainer__tag">The Local Learning Platform</div>
          </div>
        </Link>

        <Link
          to={`/`}
          className="library__card">
          <div className="library__card-content">
            <div className="library__card-icon"
              style={{
                backgroundImage: `url(${require(`../assets/images/test.png`)})`,
              }}>
            </div>
            <h3>Shallow Dives</h3>
            <p>Marking this React MVP complete using learning goals</p>
            <div className="explainer__tag">The Motivation Map</div>
          </div>
        </Link>

        <Link
          to={`/`}
          className="library__card">
          <div className="library__card-content">
            <div className="library__card-icon"
              style={{
                backgroundImage: `url(${require(`../assets/images/test.png`)})`,
              }}>
            </div>
            <h3>Project-scale Flask API</h3>
            <p>Enabling API features beyond the basics</p>
            <div className="explainer__tag">The Tech Blog Tutorial</div>
          </div>
        </Link>

        <Link
          to={`/`}
          className="library__card">
          <div className="library__card-content">
            <div className="library__card-icon"
              style={{
                backgroundImage: `url(${require(`../assets/images/test.png`)})`,
              }}>
            </div>
            <h3>PySpice VGA Video Card</h3>
            <p>Engineering low-level electronics without the oscilloscope</p>
            <div className="explainer__tag">The Simulated Build</div>
          </div>
        </Link>

        <Link
          to={`/`}
          className="library__card">
          <div className="library__card-content">
            <div className="library__card-icon"
              style={{
                backgroundImage: `url(${require(`../assets/images/test.png`)})`,
              }}>
            </div>
            <h3>RoboForDevs</h3>
            <p>Building advanced robots with personality</p>
            <div className="explainer__tag">The Live Workshop</div>
          </div>
        </Link>

        <Link
          to={`/`}
          className="library__card">
          <div className="library__card-content">
            <div className="library__card-icon"
              style={{
                backgroundImage: `url(${require(`../assets/images/test.png`)})`,
              }}>
            </div>
            <h3>Future Project</h3>
            <p></p>
            <div className="explainer__tag">The AI Coach</div>
          </div>
        </Link>

        <Link
          to={`/`}
          className="library__card">
          <div className="library__card-content">
            <div className="library__card-icon"
              style={{
                backgroundImage: `url(${require(`../assets/images/test.png`)})`,
              }}>
            </div>
            <h3>Future Project</h3>
            <p></p>
            <div className="explainer__tag">The Data Exploration Dashboard</div>
          </div>
        </Link>

        <Link
          to={`/`}
          className="library__card">
          <div className="library__card-content">
            <div className="library__card-icon"
              style={{
                backgroundImage: `url(${require(`../assets/images/test.png`)})`,
              }}>
            </div>
            <h3>Future Project</h3>
            <p></p>
            <div className="explainer__tag">The Novel Interface</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Dives;
