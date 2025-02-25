import React from "react";
import logo from "../../assets/home/home-logo.svg";
import flag from "../../assets/common/flag.svg";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Header = ({ setShowLoginDialog }) => {
  const navigate = useNavigate();
  return (
    <div className="home-header-wrap">
      <div className="home-logo-text-wrap">
        <div className="home-logo-wrap">
          <img src={logo} />
        </div>
      </div>
      <div className="home-links">
        <p onClick={() => navigate("/start")}>About</p>
        <div className="line"></div>
        <p onClick={() => navigate("/start")}>Pricing</p>
        <div className="line"></div>

        <p onClick={() => navigate("/start")}>Contact</p>
        <div className="line"></div>

        <p onClick={() => navigate("/start")}>FAQ</p>
        <div className="line"></div>
      </div>
      <div className="home-login-btn-wrap">
        <img src={flag} />
        <div
          className="home-header-button pointer"
          onClick={() => setShowLoginDialog(true)}
        >
          <p className="pointer">Login</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
