import React from "react";
import arrow from "../../assets/home/arrow.svg";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Hero = ({ setShowLoginDialog }) => {
  const navigate = useNavigate();
  const nino = sessionStorage.getItem("nino") || "";

  return (
    <div className="home-hero-wrap">
      <div>
        <h1>Tax Made Simple.</h1>
      </div>
      <div className="home-hero-btn-wrap">
        <div
          className="learn-more-btn"
        >
          <p className="pointer">Learn more</p>
        </div>
        <div
          className="free-btn"
          onClick={() => {
            if (nino) {
              navigate("/start");
            } else {
              toast.error("Please Login to proceed further");
            }
          }}
        >
          <p className="pointer">Start for free</p>
          <div>
            <img src={arrow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
