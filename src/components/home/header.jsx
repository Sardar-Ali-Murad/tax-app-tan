import React from "react";
import logo from "../../assets/home/home-logo.svg";
import flag from "../../assets/home/flag.svg";
import "./index.css";

const header = () => {
  return (
    <div className="home-header-wrap">
      <div className="home-logo-text-wrap">
        <div className="home-logo-wrap">
          <img src={logo} />
        </div>
      </div>
      <div className="home-links">
        <div className="home-single-link-wrap">
          <p>About</p>
        </div>
        <div className="home-single-link-wrap">
          <p>Pricing</p>
        </div>
        <div className="home-single-link-wrap">
          <p>Contact</p>
        </div>
        <div className="home-single-link-wrap">
          <p>FAQ</p>
        </div>
      </div>
      <div className="home-login-btn-wrap">
        <img src={flag} />
        <div className="home-header-button">
          <p>Login</p>
        </div>
      </div>
    </div>
  );
};

export default header;
