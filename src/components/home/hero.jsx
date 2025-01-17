import React from "react";
import "./index.css";

const hero = () => {
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
        </div>
      </div>
    </div>
  );
};

export default hero;
