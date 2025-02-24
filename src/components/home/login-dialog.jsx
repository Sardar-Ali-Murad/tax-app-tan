import React from "react";
import apple from "../../assets/form/apple.svg";
import google from "../../assets/form/google.svg";
import facebook from "../../assets/form/facebook.svg";
import "../form/index.css";

const LoginDialog = ({ setShowLoginDialog }) => {
  return (
    <div className="login-dialog-wrap">
      <div className="login-header">
        <h1 className="form-title">Create Account</h1>
        <p className="form-sub-title">
          Would you like to create an account to access this and future returns.
        </p>
      </div>

      <div className="login-dialog-text-fields-wrap">
        <div className="login-single-text-field-wrap">
          <label>Email</label>
          <input />
        </div>
        <div className="login-single-text-field-wrap">
          <label>Password</label>
          <input />
        </div>
        <div className="login-dialog-btn-wrap">
          <div className="login-btn-first-wrap">
            <div className="l-btn">
              <p>Login</p>
            </div>
            <div className="remember-me-wrap">
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
          </div>

          <div>
            <p className="login-dialog-forget-password-text">
              Forgot Password?
            </p>
          </div>
        </div>
        <div className="login-options-wrap">
          <p>or login with</p>
          <img src={google} />
          <img src={apple} />
          <img src={facebook} />
        </div>
        <div className="logn-register-option">
          <p>Don’t have an account? </p>
          <span onClick={() => setShowLoginDialog(false)} className="pointer">
            Sign up for free
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginDialog;
