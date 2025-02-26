import React from "react";
import apple from "../../assets/form/apple.svg";
import google from "../../assets/form/google.svg";
import facebook from "../../assets/form/facebook.svg";
import close from "../../assets/close.svg";
import flag from "../../assets/common/flag.svg";

import "../form/index.css";

const LoginDialog = ({
  setShowLoginDialog,
  setInCorrectLoginDialog,
  setShowForgotPasswordDialog,
}) => {
  return (
    <div className="login-dialog-wrap">
      <div className="flex items-center gap-[10px] justify-end">
        <img src={flag} />
        <img
          src={close}
          className="cursor-pointer"
          onClick={() => setShowLoginDialog(false)}
        />
      </div>
      <div className="login-header">
        <h1 className="form-title">Login</h1>
        <p className="form-sub-title">Enter your login details below. </p>
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
            <div
              className="l-btn pointer"
              onClick={() => setInCorrectLoginDialog(true)}
            >
              <p>Login</p>
            </div>
            <div className="remember-me-wrap">
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
          </div>

          <div
            className="pointer"
            onClick={() => setShowForgotPasswordDialog(true)}
          >
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
          <span
            onClick={() => {
              setShowLoginDialog(false);
            }}
            className="pointer"
          >
            Sign up for free
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginDialog;
