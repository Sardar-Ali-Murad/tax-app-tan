import React from "react";
import "./index.css";
import arrowRight from "../../assets/user-info/arrow-right.png";
import buttonArrow from "../../assets/user-info/button-arrow.png";

const BankUploadCard = ({ routes, setCount }) => {
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
          <p className="medium">
            How would you like to enter your income and expenses
          </p>
        </div>
        <div className="d-flex flex-column company-radio-option-wrap">
          <label className="company-label">
            <input type="radio" name="example" value="Option 1" />
            Enter manually{" "}
          </label>
          <label className="company-label">
            <input type="radio" name="example" value="Option 1" />
            Bank file upload{" "}
          </label>
        </div>

        <div className="card-button-wrap mt-40">
          <button className="back" onClick={() => setCount(2)}>Back</button>
          <button className="next-btn active-color" onClick={() => setCount(3)}>
            <p>Next</p>
            <img src={buttonArrow} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BankUploadCard;
