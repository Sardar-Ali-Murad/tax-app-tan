import React from "react";
import "./index.css";
import arrowRight from "../../assets/user-info/arrow-right.png";
import buttonArrow from "../../assets/user-info/button-arrow.png";

const OfficeDeduction = ({ routes, setCount }) => {
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
                onClick={() => {
                  if (route?.disabled) {
                    return;
                  }
                  setCount(route?.step);
                }}
              >
                {route?.name}
              </p>
              {index !== routes.length - 1 && <img src={arrowRight} />}
            </>
          );
        })}
      </div>
      <div className="main-card-wrap">
        <div>
          <h1 className="heading">Home office deduction</h1>
          <p className="medium">
            Do you operate from a home office? If yes, would you prefer to opt
            for the standard deduction of £312.00 annually (£6/ week), or
            calculate the applicable percentage of your utility bills?
          </p>
        </div>
        <div className="d-flex flex-column company-radio-option-wrap">
          <label className="company-label">
            <input type="radio" name="example" value="Option 1" />
            Standard deduction £312.00 (recommended){" "}
          </label>
          <label className="company-label">
            <input type="radio" name="example" value="Option 1" />
            Percentage{" "}
          </label>
        </div>

        <div className="card-button-wrap mt-40">
          <button className="back" onClick={() => setCount(3)}>
            Back
          </button>
          <button className="next-btn active-color" onClick={() => setCount(6)}>
            <p>Next</p>
            <img src={buttonArrow} />
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default OfficeDeduction;
