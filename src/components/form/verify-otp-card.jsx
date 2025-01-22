import React from "react";
import arrowRight from "../../assets/user-info/arrow-right.png";
import buttonArrow from "../../assets/user-info/button-arrow.png";
import "./index.css";

const VerifyOTPCard = ({ routes, setCount }) => {
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
          <h1 className="form-title">Verify your account</h1>
          <p className="form-sub-title">
            You have been sent a verification code to hils.hawkins@gmail.com.
            Please enter the code below. If you have not received, check your
            spam folder.
          </p>
        </div>

        <div className="otp-form-wrap">
          <div className="otp-input-wrap">
            <input />
            <input />
            <input />
            <input />
            <input />
          </div>
          <p className="remaining-time">1:30</p>

          <div className="verify-btn">
            <p>Verify</p>
          </div>
          <div className="go-back-btn">
            <p>Go Back</p>
          </div>
          <div className="resend-code-btn">
            <p>Resend code</p>
          </div>
        </div>

        <div className="card-button-wrap mt-40">
          <button
            className="back form-back-button"
            onClick={() => setCount(12)}
          >
            Back
          </button>
          <button
            className="next-btn active-color form-next-button"
            onClick={() => setCount(1)}
          >
            <p>Next</p>
            <img src={buttonArrow} />
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default VerifyOTPCard;
