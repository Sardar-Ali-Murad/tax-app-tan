import React from "react";
import "./index.css";
import arrowRight from "../../assets/user-info/arrow-right.png";
import buttonArrow from "../../assets/user-info/button-arrow.png";

const CompanyNameCard = ({ setCount, routes }) => {
  return (
    <div className="card-positioning-wrap">
      <div className="router">
        {routes?.map((route, index) => {
          return (
            <>
              <p
                className={
                  route?.disabled ? "inactive not-allowed" : "active pointer"
                }
                onClick={() => {
                  if (route?.disabled) {
                    return;
                  }
                  setCount(route?.step);
                }}
              >
                {route?.name}
              </p>
              {index !== routes.length - 1 && <img src={arrowRight} />}
            </>
          );
        })}
      </div>
      <div className="main-card-wrap">
        <div>
          <h1 className="heading">Access your details</h1>
          <p className="medium">
            HMRC requires you to log in to your Government Gateway through an
            external link to grant the application access to your filing
            information.
            <span className="dark">
              {" "}
              Rest assured, HMRC prioritizes your privacy and will not share
              your login credentials with this app.
            </span>
          </p>
        </div>
        <div>
          <p className="medium mt-40">
            Click the button below to login to link to your HMRC account:
          </p>
        </div>
        <div className="d-flex justify-center">
          <div className="login mt-25">
            <p>Login to HMRC Gateway</p>
          </div>
        </div>
        <div>
          <p className="light mt-25">
            If you do not have a HMRC login, please set one up by clicking here.
          </p>
        </div>
        <div className="card-button-wrap mt-40">
          <button className="back">Back</button>
          <button className="next-btn active-color" onClick={() => setCount(2)}>
            <p>Next</p>
            <img src={buttonArrow} />
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default CompanyNameCard;
