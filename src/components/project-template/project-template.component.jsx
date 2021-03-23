import React from "react";
import "./project-template.styles.scss";
import DesktopPic from "../../images/project-template-pc.png";
import MediumPic from "../../images/project-template-medium.png";
import MobilePic from "../../images/project-template-mobile.png";

const ProjectTemplate = () => {
  return (
    <div className="project-template-container">
      <img
        src={DesktopPic}
        alt="desktop-pic of project"
        className="template-pic-pc"
      />
      <img
        src={MediumPic}
        alt="medium-pic of project"
        className="template-pic-medium"
      />
      <img
        src={MobilePic}
        alt="mobile-pic of project"
        className="template-pic-mobile"
      />
    </div>
  );
};

export default ProjectTemplate;
