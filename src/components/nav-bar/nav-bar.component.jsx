import React from "react";
import PPLogo from "../../images/pplogo.png";
import "./nav-bar.styles.scss";
import Cross from "../../images/cross.png";
import BurgerMenu from "../../images/burger-menu.png";
import HamburgerMenuOverlay from "../hamburger-menu-overlay/hamburger-menu-overlay.component";
import { Link, withRouter, useLocation } from "react-router-dom";

const NavBar = (props) => {
  const location = useLocation();

  return (
    <div className="nav-bar-full">
      <img className="logo-image" src={PPLogo} alt="petar prentovic logo" />
      <div className="nav-buttons-container">
        <Link
          exact
          className={`nav-btn ${
            location.pathname === "/home" ? "nav-btn-active" : ""
          }`}
          to="/home"
        >
          Home
        </Link>
        <Link
          exact
          className={`nav-btn ${
            location.pathname === "/about" ? "nav-btn-active" : ""
          }`}
          to="/about"
        >
          About me
        </Link>
        <Link
          exact
          className={`nav-btn ${
            location.pathname === "/projects" ? "nav-btn-active" : ""
          }`}
          to="/projects"
        >
          Projects
        </Link>
        <Link
          exact
          className={`nav-btn ${
            location.pathname === "/contact" ? "nav-btn-active" : ""
          }`}
          to="/contact"
        >
          Contact
        </Link>
      </div>
      <div className="mobile-images">
        <img
          onClick={props.handleBurgerMenu}
          src={Cross}
          alt="iksce"
          className={`cross nav-btn-mobile ${
            props.burgerMenuIsOpen ? "" : "no-show"
          }`}
        />
        <img
          onClick={props.handleBurgerMenu}
          src={BurgerMenu}
          alt="7ca"
          className={`burger-menu nav-btn-mobile ${
            props.burgerMenuIsOpen ? "no-show" : ""
          }`}
        />
      </div>
      <div className="ham-menu-overlay-container">
        {props.burgerMenuIsOpen === true ? (
          <HamburgerMenuOverlay hideOverlay={props.handleBurgerMenu} />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default withRouter(NavBar);
