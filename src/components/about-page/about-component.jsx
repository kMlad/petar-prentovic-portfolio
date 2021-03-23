import React from "react";
import Peki from "../../images/petareubavodete.png";
import "./about-styles.scss";

const AboutMe = (props) => {
  return (
    <div className="about-flex-wrapper">
      <div className="about-container">
        <div className="image-container">
          <img src={Peki} alt="Peki" className="peki" />
        </div>
        <div className="paragraph-container">
          <p className="bio-text">
            Entrepreneurial and hardworking UX/UI Designer, looking for a design
            related opportunities. After completing an extensive graphic design
            program, found my new passion for UX/UI. What really fires me up is
            building great products and being engaged with people who want to
            unlock their potential.
            <br />
            <br />
            I enjoy solving complex problems and turning them into simple and
            beautiful interface designs.
            <br />
            <br />
            When I'm not designing you will find me going for long walks or
            shooting some hoops.
          </p>
        </div>
        <svg
          className="envelope-about-me"
          onClick={props.handlePopup}
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

export default AboutMe;
