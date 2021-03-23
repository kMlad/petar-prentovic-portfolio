import React from "react";
import "./hamburger-menu-overlay.styles.scss";

import { Link, withRouter, useLocation } from "react-router-dom";

const HamburgerMenuOverlay = ({ hideOverlay }) => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div id="overlay-container-wrapper">
      <div className="transparent-burger-div" onClick={hideOverlay}></div>
      <div className="burger-buttons-container">
        <hr
          className={`hr1 ${
            location.pathname === "/home" ? "burger-overlay-hr-active" : ""
          }`}
        />
        <Link
          onClick={hideOverlay}
          exact
          className={`burger-overlay-btn ${
            location.pathname === "/home" ? "burger-overlay-btn-active" : ""
          }`}
          to="/home"
        >
          Home
        </Link>
        <hr
          className={`hr2 ${
            location.pathname === "/home" || location.pathname === "/about"
              ? "burger-overlay-hr-active"
              : ""
          }`}
        />
        <Link
          onClick={hideOverlay}
          exact
          className={`burger-overlay-btn ${
            location.pathname === "/about" ? "burger-overlay-btn-active" : ""
          }`}
          to="/about"
        >
          About me
        </Link>
        <hr
          className={`hr3 ${
            location.pathname === "/projects" || location.pathname === "/about"
              ? "burger-overlay-hr-active"
              : ""
          }`}
        />
        <Link
          onClick={hideOverlay}
          exact
          className={`burger-overlay-btn ${
            location.pathname === "/projects" ? "burger-overlay-btn-active" : ""
          }`}
          to="/projects"
        >
          Projects
        </Link>
        <hr
          className={`hr4 ${
            location.pathname === "/projects" ||
            location.pathname === "/contact"
              ? "burger-overlay-hr-active"
              : ""
          }`}
        />
        <Link
          onClick={hideOverlay}
          exact
          className={`burger-overlay-btn ${
            location.pathname === "/contact" ? "burger-overlay-btn-active" : ""
          }`}
          to="/contact"
        >
          Contact
        </Link>
        <hr
          className={`hr5 ${
            location.pathname === "/contact" ? "burger-overlay-hr-active" : ""
          }`}
        />
        <svg
          className="burger-envelope"
          xmlns="http://www.w3.org/2000/svg"
          width="106"
          height="68"
          viewBox="0 0 106 68"
        >
          <path
            id="Subtraction_4"
            data-name="Subtraction 4"
            d="M95-1012H11a10.928,10.928,0,0,1-7.778-3.222A10.929,10.929,0,0,1,0-1023v-46a10.928,10.928,0,0,1,3.222-7.778A10.928,10.928,0,0,1,11-1080H95a10.928,10.928,0,0,1,7.778,3.222A10.928,10.928,0,0,1,106-1069v46a10.929,10.929,0,0,1-3.222,7.779A10.928,10.928,0,0,1,95-1012Zm-87.058-56.83,25.363,21.656-22.827,19.119,26.338-16.778,16.388,12.1,17.558-12.1h0l26.924,16.778-23.8-19.119,24.777-21.656L53.2-1038.2Z"
            transform="translate(0 1080)"
            fill="#aed533"
          />
        </svg>
      </div>
    </div>
  );
};

export default withRouter(HamburgerMenuOverlay);
