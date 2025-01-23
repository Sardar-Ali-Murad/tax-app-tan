import React from "react";
import arrowRight from "../../assets/user-info/arrow-right.png";
import buttonArrow from "../../assets/user-info/button-arrow.png";
import progress from "../../assets/form/progress.png";
import "./index.css";

const ReviewCard = ({ routes, setCount }) => {
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
          <h1 className="form-title">Review</h1>
          <p className="form-sub-title">
            Based on your entries, here are the profits and losses that you are
            going to report to the HMRC for the period of April 1, 2024 to June
            30, 2024
          </p>
        </div>

        <div className="total-card-wrap">
          <h1 className="main-title">Total</h1>
          <div className="boxes-wrap">
            <div className="net-earning-wrap">
              <div>
                <h1>Your net earnings</h1>
              </div>
              <div className="img-wrap">
                <img src={progress} />
                <h1>£ 45,543 </h1>
              </div>
            </div>
            <div className="tax-due-wrap">
              <h1> Total tax due</h1>
              <h1>£ 0.00</h1>
              <div className="para-wrap">
                <p>Learn how to reduce this tax liability</p>
                <img />
              </div>
            </div>
          </div>
        </div>

        <div className="review-grid-wrap">
          <div className="grid-header">
            <h1>By service</h1>
            <p>total income</p>
            <p>total expenses</p>
            <p>tax due</p>
          </div>
          <div className="grid-body-wrap">
            <div className="single-grid-body">
              <p>Delivery Driver</p>
              <p>£30,000.00</p>
              <p>£5,000.00</p>
              <p>£1,000.00</p>
            </div>
            <div className="single-grid-body">
              <p>Delivery Driver</p>
              <p>£30,000.00</p>
              <p>£5,000.00</p>
              <p>£1,000.00</p>
            </div>
          </div>
        </div>

        <div className="card-button-wrap mt-40">
          <button
            className="back form-back-button not-allowed"
            onClick={() => setCount(9)}
          >
            Back
          </button>
          <button
            className="next-btn active-color form-next-button"
            onClick={() => setCount(11)}
          >
            <p>Next</p>
            <img src={buttonArrow} />
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
