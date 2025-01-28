import React from "react";
import arrow from "../../assets/home/arrow.svg";
import "./index.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const handleCheckout = async () => {
    try {
      const response = await fetch(
        "https://stripe-back-end-chi.vercel.app/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { url } = await response.json();
      window.location.href = url;
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className="home-hero-wrap">
      <div>
        <h1>Tax Made Simple.</h1>
      </div>
      <div className="home-hero-btn-wrap">
        <div className="learn-more-btn">
          <p className="pointer" onClick={handleCheckout}>
            stripe checkout
          </p>
        </div>
        <div className="free-btn">
          <p className="pointer" onClick={() => navigate("/form")}>
            Start for free
          </p>
          <div>
            <img src={arrow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
