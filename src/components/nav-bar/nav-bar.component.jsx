import React from "react";
import PPLogo from "../../images/pplogo.png";
import "./nav-bar.styles.scss";
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
    </div>
  );
};

export default withRouter(NavBar);
