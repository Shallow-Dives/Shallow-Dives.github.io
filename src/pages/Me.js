import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import "./Me.css";
import "../components/Explainer.css"

function Me() {
  return (
    <div className="page-container">
      <div className="explainer">
        <h1>Hello!</h1>
        <h3>I'm Kathryn Hite</h3>
        <p>I'm a software developer - usually focused on some combination of NLP, assistive technology, robotics, and
        edtech.
        </p>

        <p>Right now I'm excited about exploring cool ways to present online learning materials,
        building accessible technology to enable music therapists in the classroom, and researching semantic mapping
        for autonomous vehicles.
        </p>

        <p>I'm working on Shallow Dives as external motivation to finish projects beyond the 95% mark that they tend to
        stick at, but I'm also working with a group of friends, who provide editing and are creating the parallel orgs
        linked below.</p>

        <div className="page__icons">
          <a className="page__button" href="https://example.com" role="button" target="_blank" rel="noreferrer">
            assist.dev
          </a>
          <a className="page__button" href="https://example.com" role="button" target="_blank" rel="noreferrer">
            Rapid Ramp
          </a>
          <a className="page__button" href="https://example.com" role="button" target="_blank" rel="noreferrer">
            makemoremidi
          </a>
        </div>

        <p>If you want to chat or contribute to this project, reach out through one of the
        links below</p>

        <div className="page__icons">
          <a className="page__button" href="https://github.com/kghite" role="button" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} color="#1a202c" size="lg" /> My GitHub
          </a>
          <a className="page__button" href="https://github.com/Shallow-Dives" role="button" target="_blank"
          rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} color="#1a202c" size="lg" /> Project GitHub
          </a>
          <a className="page__button" href="mailto:kghite@gmail.com" role="button">
            <FontAwesomeIcon icon={faEnvelope} color="#1a202c" size="lg" /> My Email
          </a>
        </div>

        <p>You'll notice web dev was not in my list of specialties. If you have feedback about this site (besides
        changing the green and purple theme, that's non-negotiable), let me know!</p>
      </div>
    </div>
  );
}

export default Me;
