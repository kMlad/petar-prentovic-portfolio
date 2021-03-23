import React from "react";
import "./pop-up.styles.scss";

const PopUp = ({ props }) => {
  return (
    <div className="popup-flex-wrapper">
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
              {" "}
              Name*
              <br />
              <input type="text" id="name" className="popup-input" />
            </label>
            <label htmlFor="email">
              {" "}
              Email*
              <br />
              <input type="email" id="email" className="popup-input" />
            </label>
            <label htmlFor="subject">
              Subject*
              <br />
              <input type="subject" id="subject" className="popup-input" />
            </label>
            Message*
            <br />
            <label htmlFor="message">
              <textarea
                name="message"
                id="message"
                cols="10"
                rows="4"
                className="popup-input popup-textarea"
              ></textarea>
            </label>
          </form>
          <div className="popup-btn-container">
            <div className="popup-btn">Send request</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
