import React from "react";
import arrowRight from "../../assets/user-info/arrow-right.png";
import buttonArrow from "../../assets/user-info/button-arrow.png";
import "./index.css";

const EmployPeopleCard = ({ routes, setCount, selectedOption }) => {
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
          <h1 className="form-title">Do you employ people?</h1>
          <p className="form-sub-title">
            Select yes if you have employee’s working under the sole trader
            company.{" "}
          </p>
          <div className="initial-card-content-wrap">
            <div className="initial-card-checkbox-wrap">
              <input type="radio" />
              <div className="content">
                <h1>No</h1>
                <p>No you do not currently employ people</p>
              </div>
            </div>
            <div className="initial-card-checkbox-wrap">
              <input type="radio" />
              <div className="content">
                <h1>Yes</h1>
                <p>Yes you currently employ people.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card-button-wrap mt-40">
          <button
            className="back form-back-button"
            onClick={() => {
              if (selectedOption === "Individual") {
                setCount(7);
              } else {
                setCount(7);
              }
            }}
          >
            Back
          </button>
          <button
            className="next-btn active-color form-next-button"
            onClick={() => setCount(8)}
          >
            <p>Next</p>
            <img src={buttonArrow} />
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default EmployPeopleCard;
