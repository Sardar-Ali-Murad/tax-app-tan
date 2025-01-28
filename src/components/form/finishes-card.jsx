import React from "react";
import arrowRight from "../../assets/user-info/arrow-right.png";
import buttonArrow from "../../assets/user-info/button-arrow.png";
import action from "../../assets/common/action.png";
import "./index.css";

const FinishedCard = ({ routes, setCount }) => {
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
          <h1 className="form-title">You’re Finished!</h1>
          <p className="form-sub-title">
            Your return for period April 1, 2024 to June 30, 2024. has
            successfully been submitted to the the HMRC
            <span>Confirmation code 2QWE-4067534A</span>
          </p>
        </div>
        <div>
          <p className="form-second-sub-title">
            You can click on the link below to download the tax report and
            confirmation.Both of these documents have also been sent to you via
            email.
          </p>
        </div>

        <div className="form-login-download-btn">
          <p>Click here to download</p>
        </div>

        <div className="form-collected-data">
          <div className="finished-last-wrap">
            <img src={action} />
            <div className="finished-card-last-content">
              <p>
                Remember you owe £8,653.00 in corporation taxes to the HMRC,
                they are{" "}
              </p>
              <p>
                due by August 30, 2024. You can pay at at the HMRC payment
                portal
              </p>
            </div>
          </div>
        </div>

        <div className="card-button-wrap mt-40">
          <button
            className="back form-back-button"
            onClick={() => setCount(13)}
          >
            Back
          </button>
          <button
            className="next-btn active-color form-next-button"
            onClick={() => setCount(1)}
          >
            <p>Next</p>
            <img src={buttonArrow} />
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default FinishedCard;
