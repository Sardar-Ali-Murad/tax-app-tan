import React from "react";
import arrowRight from "../../assets/user-info/arrow-right.png";
import buttonArrow from "../../assets/user-info/button-arrow.png";
import "./index.css";

const InitialCard = ({ routes, setCount }) => {
  return (
    <div className="card-positioning-wrap">
      <div className="router">
        {routes?.map((route, index) => {
          return (
            <>
              <p
                className={
                  route?.disabled ? "inactive not-allowed" : "active pointer"
                }
              >
                {route?.name}
              </p>
              <img src={arrowRight} />
            </>
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
              <input type="radio" />
              <div className="content">
                <h1>Individual (Sole Trader)</h1>
                <p>
                  Select this option if you do not have a company and you are
                  filing under your own personal Tax Identification Number (TIN)
                </p>
              </div>
            </div>
            <div className="initial-card-checkbox-wrap">
              <input type="radio" />
              <div className="content">
                <h1>Individual (Sole Trader)</h1>
                <p>
                  Select this option if you do not have a company and you are
                  filing under your own personal Tax Identification Number (TIN)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card-button-wrap mt-40">
          <button className="back form-back-button" onClick={() => setCount(5)}>
            Back
          </button>
          <button
            className="next-btn active-color form-next-button"
            onClick={() => setCount(2)}
          >
            <p>Next</p>
            <img src={buttonArrow} />
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default InitialCard;
