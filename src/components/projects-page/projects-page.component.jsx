import React from "react";
import "./projects-page.styles.scss";
import PcPic from "../../images/projects-page-pic.png";
import MobilePic from "../../images/projects-page-pic-mobile.png";
import { Link, withRouter } from "react-router-dom";

const ProjectsPage = () => {
  return (
    <div className="projects-page-container-wrapper">
      <Link exact to="/project-template" className="projects-page-container">
        <img
          src={PcPic}
          alt="slika za pc view od proekt"
          id="projects-page-pic-pc"
        />
        <img
          src={MobilePic}
          alt="slika za mobile view od proekt"
          id="projects-page-pic-mobile"
        />
      </Link>
    </div>
  );
};

export default withRouter(ProjectsPage);
