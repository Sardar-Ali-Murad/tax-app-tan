import React from "react";
import apple from "../../assets/form/apple.svg";
import google from "../../assets/form/google.svg";
import facebook from "../../assets/form/facebook.svg";
import close from "../../assets/close.svg";

import "../form/index.css";

const LoginDialog = ({ setShowLoginDialog, setRegisterDialog }) => {
  return (
    <div className="login-dialog-wrap">
      <div className="flex items-center gap-[10px] justify-end">
        <img
          src={close}
          className="cursor-pointer"
          onClick={() => setRegisterDialog(false)}
        />
      </div>
      <div>
        <h1 className="form-title">Create Account</h1>
        <p className="form-sub-title">
          Please create an account to access this and future returns.
        </p>
      </div>

      <div className="flex flex-col gap-[30px]">
        <div className="already-user-text">
          <p>Already have an account?</p>
          <span
            className="pointer"
            onClick={() => {
              setRegisterDialog(false);
              setShowLoginDialog(true);
            }}
          >
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
        <div className="flex items-center gap-[13px]">
          <input
            type="chechbox"
            className="h-[21px] w-[21px] rounded-[2px] border border-[2px] border-[#E1E1E1]"
          />
          <p className="jaldi text-[22px] leading-[38px] text-[#0030499C]">
            I’d like to receive marketing email updates from TaxReady.uk
          </p>
        </div>
        <div className="flex items-center gap-[13px]">
          <input
            type="chechbox"
            className="h-[21px] w-[21px] rounded-[2px] border border-[2px] border-[#E1E1E1]"
          />
          <p className="jaldi text-[22px] leading-[38px] text-[#0030499C]">
            I agree to the Terms & Conditions, Find out how we use and protect
            your data in our Privacy Policy.{" "}
          </p>
        </div>
        <div className="login-dialog-btn-wrap">
          <div className="login-btn-first-wrap">
            <div className="l-btn pointer">
              <p>Register</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginDialog;
