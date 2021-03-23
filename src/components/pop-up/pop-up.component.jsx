import React from "react";
import "./pop-up.styles.css";

const PopUp = ({ props }) => {
  return (
    <div className="popup-container">
      <div className="popup-text-container">
        <h2 className="popup-heading">Let's Talk!</h2>
        <p className="popup-paragraph">
          I will get back to you within one to two days through email. Also
          please don't forget to check your spam account, just in case!
        </p>
      </div>
      <div className="popup-form-container">
        <form action="POST">
          <label htmlFor="name">
            <input type="text" id="name" className="popup-input" />
          </label>
          <label htmlFor="email">
            <input type="email" id="email" className="popup-input" />
          </label>
          <label htmlFor="subject">
            <input type="subject" id="subject" className="popup-input" />
          </label>
          <label htmlFor="message">
            <textarea
              name="message"
              id="message"
              cols="3"
              rows="10"
              className="popup-input"
            ></textarea>
          </label>
        </form>
      </div>
      <div className="popup-btn-container"></div>
    </div>
  );
};

export default PopUp;
