import React from "react";
import arrowRight from "../../assets/user-info/arrow-right.png";
import buttonArrow from "../../assets/user-info/button-arrow.png";
import "./index.css";

const AccessDetailsCard = ({ routes, setCount }) => {
  return (
    <div className="card-positioning-wrap">
      <div className="router">
        {routes?.map((route, index) => {
          return (
            <React.Fragment key={index}>
              <p
                className={
                  route?.disabled ? "inactive not-allowed" : "active pointer"
                }
              >
                {route?.name}
              </p>
              {index !== routes.length - 1 && <img src={arrowRight} />}
            </React.Fragment>
          );
        })}
      </div>
      <div className="main-card-wrap">
        <div>
          <h1 className="form-title">Access your details</h1>
          <p className="form-sub-title">
            HMRC requires you to log in to your Government Gateway through an
            external link to grant the application access to your filing
            information.{" "}
            <span>
              Rest assured, HMRC prioritizes your privacy and will not share
              your login credentials with this app.
            </span>
          </p>
        </div>
        <div>
          <p className="form-second-sub-title">
            Click the button below to login to link to your HMRC account:
          </p>
        </div>

        <div className="form-login-hmrc-btn">
          <p>Login to HMRC Gateway</p>
        </div>

        <div>
          <p className="form-light-sub-title">
            If you do not have a HMRC login, please set one up by
            <span
              style={{
                color: "rgba(158, 176, 185, 1)",
                fontWeight: "600",
                cursor: "pointer",
              }}
              onClick={() =>
                window.open(
                  "https://www.gov.uk/log-in-register-hmrc-online-services",
                  "__blank"
                )
              }
            >
              {" "}
              clicking here.
            </span>
          </p>
        </div>

        <div className="card-button-wrap mt-40">
          <button className="back form-back-button" onClick={() => setCount(1)}>
            Back
          </button>
          <button
            className="next-btn active-color form-next-button"
            onClick={() => setCount(5)}
          >
            <p>Next</p>
            <img src={buttonArrow} />
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default AccessDetailsCard;
