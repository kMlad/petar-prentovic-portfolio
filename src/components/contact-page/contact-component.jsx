import React from "react";
import LinkedInLogo from "../../images/linkedinlogo.png";
import Cactuses from "../../images/gas.png";

import "./contact-styles.scss";

const ContactPage = (props) => {
  return (
    <div className="contact-container">
      <div className="content-container">
        <h2 className="interested-heading">Interested in working with me?</h2>
        <div className="blur">
          <button className="contact-btn" onClick={props.handlePopup}>
            Let's talk!
          </button>
        </div>

        <div className="linked-in-container">
          <a
            className="a-tag"
            href="https://www.linkedin.com/in/petar-prentovic-802b54201/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={LinkedInLogo}
              alt="linked in logo"
              className="linked-in-logo"
            />
          </a>
        </div>
      </div>
      <div className="contact-image-container">
        <img src={Cactuses} alt="kaktusi" className="kaktusi" />
      </div>
    </div>
  );
};

export default ContactPage;
