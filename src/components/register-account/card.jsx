import React from "react";
import arrowRight from "../../assets/user-info/arrow-right.png";
import buttonArrow from "../../assets/user-info/button-arrow.png";
// import LoginDialog from "./login-dialog";
import apple from "../../assets/form/apple.svg";
import google from "../../assets/form/google.svg";
import facebook from "../../assets/form/facebook.svg";
import Progress from "../common/progress";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const navigate = useNavigate();
  return (
    <div className="card-positioning-wrap">
      <Progress title="82% complete" width="82%" />
      <div className="main-card-wrap">
        <div>
          <h1 className="form-title">Create Account</h1>
          <p className="form-sub-title">
            Please create an account to access this and future returns.
          </p>
        </div>

        <div className="register-form-wrap">
          <div className="already-user-text">
            <p>Already have an account?</p>
            <span className="pointer" onClick={() => setShowLoginDialog(true)}>
              Login
            </span>
          </div>
          <div className="register-single-text-field">
            <div className="register-first-label">
              <label>Full name</label>
              <div className="login-options-wrap">
                <p>or login with</p>
                <img src={google} />
                <img src={apple} />
                <img src={facebook} />
              </div>
            </div>
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
        </div>

        <div className="card-button-wrap mt-40">
          <button
            className="back form-back-button"
            onClick={() => navigate("/checkout")}
          >
            Back
          </button>
          <button
            className="next-btn active-color form-next-button"
            onClick={() => navigate("/verify-account")}
          >
            <p>Next</p>
            <img src={buttonArrow} />
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Card;
