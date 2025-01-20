import React from "react";
import arrow from "../../assets/home/arrow.svg";
import "./index.css";

const Hero = () => {
  return (
    <div className="home-hero-wrap">
      <div>
        <h1>Tax Made Simple.</h1>
      </div>
      <div className="home-hero-btn-wrap">
        <div className="learn-more-btn">
          <p>learn more</p>
        </div>
        <div className="free-btn">
          <p>Start for free</p>
          <div>
            <img src={arrow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
