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
        <div
          className="d-flex flex-column company-radio-option-wrap"
          style={{ marginBottom: "0px", marginTop: "30px" }}
        >
          <label className="company-label">
            <input type="radio" name="example" value="Option 1" />
            Standard deduction £312.00 (recommended){" "}
          </label>
          <label className="company-label" style={{ marginBottom: "0px" }}>
            <input type="radio" name="example" value="Option 1" />
            Percentage{" "}
          </label>
        </div>

        <div className="overflow-details">
          <p className="medium">
            For the percentage option, you must attach invoices for all claimed
            expenses using the attach button below.
          </p>
          <div className="grid-text-fields">
            <div className="three-col-grid">
              <div className="single-grid">
                <label>Your home’s total size </label>
                <div className="single-grid-input-wrap">
                  <input />
                  <p className="medium">m2</p>
                </div>
              </div>
              <div className="single-grid">
                <label>Your office total size </label>
                <div className="single-grid-input-wrap">
                  <input />
                  <p className="medium">m2</p>
                </div>
              </div>
              <div className="single-grid">
                <label>Avg.percentage of time </label>
                <div className="single-grid-input-wrap">
                  <input />
                  <p className="medium">%</p>
                </div>
              </div>
            </div>
            <div className="three-col-grid">
              <div className="single-grid">
                <label>Total electricity </label>
                <div className="single-grid-input-wrap">
                  <input />
                  <p className="medium">£</p>
                </div>
              </div>
              <div className="single-grid">
                <label>Total gas </label>
                <div className="single-grid-input-wrap">
                  <input />
                  <p className="medium">£</p>
                </div>
              </div>
              <div className="single-grid">
                <label>Total water </label>
                <div className="single-grid-input-wrap">
                  <input />
                  <p className="medium">£</p>
                </div>
              </div>
            </div>
            <div className="three-col-grid">
              <div className="single-grid">
                <label>Total internet & phone </label>
                <div className="single-grid-input-wrap">
                  <input />
                  <p className="medium">£</p>
                </div>
              </div>
              <div className="single-grid">
                <label>Total rent </label>
                <div className="single-grid-input-wrap">
                  <input />
                  <p className="medium">£</p>
                </div>
              </div>
              <div className="single-grid">
                <label>Total mortgage interest </label>
                <div className="single-grid-input-wrap">
                  <input />
                  <p className="medium">£</p>
                </div>
              </div>
            </div>
            <div className="grid-container">
              <div className="grid-item">
                <label>Total council tax </label>
                <div className="single-grid-input-wrap">
                  <input />
                  <p className="medium">£</p>
                </div>
              </div>
              <div className="grid-item">
                <label>Total repairs and maintenance </label>
                <div className="single-grid-input-wrap">
                  <input className="w-94" />
                  <p className="medium">£</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-button-wrap mt-40">
          <button className="back" onClick={() => setCount(3)}>
            Back
          </button>
          <button className="next-btn active-color" onClick={() => setCount(5)}>
            <p>Next</p>
            <img src={buttonArrow} />
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default OfficeDeduction;
