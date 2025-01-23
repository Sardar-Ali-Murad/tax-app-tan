import React from "react";
import arrowRight from "../../assets/user-info/arrow-right.png";
import buttonArrow from "../../assets/user-info/button-arrow.png";
import LoginDialog from "./login-dialog";
import "./index.css";

const RegisterCard = ({ routes, setCount }) => {
  const [showLoginDialog, setShowLoginDialog] = React.useState(false);
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
      {showLoginDialog && (
        <div className="model-parent">
          <div className="model-wrap">
            <LoginDialog setShowLoginDialog={setShowLoginDialog} />
          </div>
        </div>
      )}
      <div className="main-card-wrap">
        <div>
          <h1 className="form-title">Create Account</h1>
          <p className="form-sub-title">
            Would you like to create an account to access this and future
            returns.
          </p>
        </div>

        <div className="register-form-wrap">
          <div className="register-single-text-field">
            <label>Full name</label>
            <input />
          </div>
          <div className="register-single-text-field">
            <label>Email</label>
            <input />
          </div>
          <div className="register-single-text-field">
            <label>Password</label>
            <input />
          </div>
          <div className="register-single-text-field">
            <label>Confirm Password</label>
            <input />
          </div>

          <div className="already-user-text">
            <p>Already have an account?</p>
            <span className="pointer" onClick={() => setShowLoginDialog(true)}>
              Login
            </span>
          </div>

          <div className="create-account-btn">
            <p>Create Account</p>
          </div>
          <div className="skip-step-btn">
            <p>Skip this step</p>
          </div>
        </div>

        <div className="card-button-wrap mt-40">
          <button
            className="back form-back-button"
            onClick={() => setCount(11)}
          >
            Back
          </button>
          <button
            className="next-btn active-color form-next-button"
            onClick={() => setCount(13)}
          >
            <p>Next</p>
            <img src={buttonArrow} />
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default RegisterCard;
