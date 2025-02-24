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
        <p onClick={() => navigate("/form")}>About</p>
        <div className="line"></div>
        <p onClick={() => navigate("/form")}>Pricing</p>
        <div className="line"></div>

        <p onClick={() => navigate("/form")}>Contact</p>
        <div className="line"></div>

        <p onClick={() => navigate("/form")}>FAQ</p>
        <div className="line"></div>
      </div>
      <div className="home-login-btn-wrap">
        <img src={flag} />
        <div className="home-header-button pointer">
          <p onClick={() => setShowLoginDialog(true)} className="pointer">
            Login
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
