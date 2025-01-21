import React from "react";
import arrowRight from "../../assets/user-info/arrow-right.png";
import buttonArrow from "../../assets/user-info/button-arrow.png";
import "./index.css";

const CorporationTaxesCard = ({ routes, setCount }) => {
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
              {index !== routes.length - 1 && <img src={arrowRight} />}
            </React.Fragment>
          );
        })}
      </div>
      <div className="main-card-wrap">
        <div>
          <h1 className="form-title">Corporation Taxes</h1>
          <p className="form-sub-title">
            TaxReady.co.uk does not currently support corporation tax filing.
            However, we are actively working on adding this feature, and it will
            be available soon.
          </p>
        </div>
        <div>
          <p className="form-second-sub-title">
            Please enter your email below to be notified when we start
            supporting corporate tax filing.
          </p>
        </div>
        <div className="form-input-wrap">
          <label>Your email address</label>
          <input />
        </div>

        <div className="card-button-wrap mt-40">
          <button className="back form-back-button" onClick={() => setCount(2)}>
            Back
          </button>
          <button
            className="next-btn active-color form-next-button"
            onClick={() => setCount(3)}
          >
            <p>Next</p>
            <img src={buttonArrow} />
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default CorporationTaxesCard;
