import React, { useState } from "react";
import PPLogo from "../../images/pplogo.png";
import "./nav-bar.styles.scss";
import Cross from "../../images/cross.png";
import BurgerMenu from "../../images/burger-menu.png";
import HamburgerMenuOverlay from "../hamburger-menu-overlay/hamburger-menu-overlay.component";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
  useLocation,
} from "react-router-dom";

const NavBar = (props) => {
  const location = useLocation();
  console.log(location.pathname);

  const [state, setState] = useState({
    burgerMenuIsClicked: false,
  });

  const handleBurgerClick = () => {
    if (state.burgerMenuIsClicked) {
      return () => setState({ burgerMenuIsClicked: false });
    } else {
      return () => setState({ burgerMenuIsClicked: true });
    }
  };

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
          onClick={handleBurgerClick()}
          src={Cross}
          alt="iksce"
          className={`cross nav-btn-mobile ${
            state.burgerMenuIsClicked ? "" : "no-show"
          }`}
        />
        <img
          onClick={handleBurgerClick()}
          src={BurgerMenu}
          alt="7ca"
          className={`burger-menu nav-btn-mobile ${
            state.burgerMenuIsClicked ? "no-show" : ""
          }`}
        />
      </div>
      <div className="ham-menu-overlay-container">
        {state.burgerMenuIsClicked === true ? (
          <HamburgerMenuOverlay hideOverlay={handleBurgerClick} />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default withRouter(NavBar);
