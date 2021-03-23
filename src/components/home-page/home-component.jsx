import React from "react";
import CactusPC from "../../images/cactus-pc.png";
import CactusMobile from "../../images/cactuses-mobile-mirror.png";
import CactusMedium from "../../images/cactus-medium.png";

import "./home-styles.scss";

const HomePage = (props) => {
  return (
    <div className="home-page-outer">
      <div className="home-page">
        <div className="introduction-container">
          <h3 className="hello-heading">Hello I am Petar</h3>
          <h1 className="job-title">
            UX/UI & <br />
            Graphic
            <br />
            Designer
          </h1>
          <p className="what-i-like">
            I like to solve problems and create designs
          </p>
          <button className="home-btn" onClick={props.handlePopup}>
            Let's talk!
          </button>
        </div>
        <div className="image-container">
          <img src={CactusPC} alt="kaktufce" className="kaktusce-pc" />
          <img src={CactusMobile} alt="kaktufce" className="kaktusce-mobile" />
          <img src={CactusMedium} alt="kaktufce" className="kaktusce-medium" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
