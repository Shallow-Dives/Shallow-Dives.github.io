import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import "./Footer.css";

function Footer() {
  return (
    <div className="footer__wrapper">
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__info">
          <span className="footer__info-title">Shallow Dives</span>
          <span className="footer__info-c">&#169; Shallow Dives - No rights reserved, have at</span>
        </div>

        <div class="footer__links">
          <div className="icon">
            <a href="https://github.com/Shallow-Dives" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} color="#1a202c" size="lg" />
            </a>
          </div>
          <div className="icon">
            <a href="mailto:kghite@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} color="#1a202c" size="lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Footer;
