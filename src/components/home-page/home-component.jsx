import React from "react";
import Cactus from "../../images/cactus.png";
import "./home-styles.scss";

const HomePage = (props) => {
  return (
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
        <button className="home-btn">Let's talk!</button>
      </div>
      <div className="image-container">
        <img src={Cactus} alt="kaktufce" className="kaktusce" />
      </div>
    </div>
  );
};

export default HomePage;
