import React from "react";

import "./Home.css";
import "../components/Explainer.css"

import Dives from "./Dives.js";
import Logs from "./Logs.js";
import TopicsData from "../data/topics.json";
import DivesData from "../data/dives.json";

function Home() {

  return (
    <div className="home__container">
      <div className="explainer">
        <h1>Shallow Dives</h1>
        <h3>What is this place?</h3>
        <p>Shallow Dives is a library of interactive learning materials enabling exciting project builds, where
        developers can dive into technical topics presented in a range educational experience formats. This project
        combines explorations into new development spaces with research into presenting educational content in creative
        and effective ways.</p>

        <a className="home__button" href="/dives" role="button">Dive In &nbsp; &#8702;</a>

        <h3>Dive Design</h3>
        <p>Each dive is presented as a development experience for new learners. The full
        library is designed to cover an array of classic and novel online learning content formats, providing a
        single strong illustration of each type.  Takeaways and best practices for each format are presented as Logs.
        The current list of dive formats includes</p>

        <div className="tags">
          {DivesData.dives.map((item) => (
                  <div className="explainer__tag">
                    {item}
                  </div>
          ))}
        </div>

        <h3>Topics</h3>
        <p>The chosen technical topics focus on skills that enable creating project scale implementations.  The
        current list of project tags includes</p>

        <div className="tags">
          {TopicsData.topics.map((item) => (
                  <div className="explainer__tag">
                    {item}
                  </div>
          ))}
        </div>

        <h3>Motivations</h3>
        <ul>
          <li>Provide an external push to finish projects to 100% presentability.</li>
          <li>Build quality educational materials to practice content presentation and formalize new knowledge.</li>
          <li>Present shallow dives into technical topics to create demonstrations of formats for online learning .</li>
          <li>Evaluate these learning materials against similar work.</li>
          <li>Explore innovative ways to present technical educational materials online.</li>
        </ul>
      </div>
      <Dives />
      <Logs />
    </div>
  );
}

export default Home;
