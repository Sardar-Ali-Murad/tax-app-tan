import React from "react";

const Failure = () => {
  return (
    <div className="failure-container">
      <div className="failure-box">
        <div className="icon">&#10060;</div>
        <h1>Payment Failed!</h1>
        <p>Oops! Something went wrong with your payment. Please try again.</p>
        <button
          className="buton"
          onClick={() => (window.location.href = "/checkout")}
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default Failure;
