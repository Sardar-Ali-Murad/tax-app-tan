import React, { useState } from "react";
import arrowRight from "../../assets/user-info/arrow-right.png";
import buttonArrow from "../../assets/user-info/button-arrow.png";
import "./index.css";

const InitialCard = ({
  routes,
  setCount,
  selectedOption,
  setSelectedOption,
}) => {
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="card-positioning-wrap">
      <div className="router">
        {routes?.map((route, index) => {
          return (
            <React.Fragment key={index}>
              <p
                className={
                  route?.disabled ? "inactive not-allowed" : "active pointer"
                }
              >
                {route?.name}
              </p>
              <img src={arrowRight} />
            </React.Fragment>
          );
        })}
      </div>
      <div className="main-card-wrap">
        <div>
          <h1 className="form-title">Let’s Begin!</h1>
          <p className="form-sub-title">
            What type of return would you like to complete?
          </p>
          <div className="initial-card-content-wrap">
            <div className="initial-card-checkbox-wrap">
              <input
                type="radio"
                value="Individual"
                checked={selectedOption === "Individual"}
                onChange={handleRadioChange}
              />
              <div className="content">
                <h1>Individual (Self-Assessment)</h1>
                <p>
                  Select this option if you do not have a company and you are
                  filing under your own Unique Tax Reference Number (UTR).
                </p>
              </div>
            </div>
            <div className="initial-card-checkbox-wrap">
              <input
                type="radio"
                value="Corporation"
                checked={selectedOption === "Corporation"}
                onChange={handleRadioChange}
              />
              <div className="content">
                <h1>Corporation</h1>
                <p>
                  Select this option if you are filing under your company number
                  that you have registered with the HMRC.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card-button-wrap mt-40">
          <button className="back form-back-button not-allowed">Back</button>
          <button
            className={`next-btn  ${
              selectedOption && "form-next-button active-color"
            }`}
            onClick={() => {
              if (selectedOption) {
                if (selectedOption === "Individual") {
                  setCount(4);
                } else {
                  setCount(3);
                }
              }
            }}
            style={{ cursor: selectedOption ? "pointer" : "not-allowed" }}
          >
            <p>Next</p>
            <img src={buttonArrow} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InitialCard;
