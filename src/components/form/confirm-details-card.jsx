import React from "react";
import arrowRight from "../../assets/user-info/arrow-right.png";
import buttonArrow from "../../assets/user-info/button-arrow.png";
import "./index.css";

const ConfirmDetailsCard = ({ routes, setCount }) => {
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
          <h1 className="form-title">Confirm details</h1>
          <p className="form-sub-title">
            Are the details listed below correct? If not, please click the back
            button and try logging in again, or contact the HMRC.{" "}
          </p>
        </div>

        <div className="form-collected-data">
          <div className="single-collected-data">
            <h1>Individual name</h1>
            <p>Jamie Lannister</p>
          </div>
          <div className="single-collected-data">
            <h1>Email</h1>
            <p>jamie@sevenkingdoms.com</p>
          </div>
          <div className="single-collected-data">
            <h1>National Insurance Number (NINO)</h1>
            <p>12345678</p>
          </div>
        </div>

        <div className="card-button-wrap mt-40">
          <button
            className="back form-back-button not-allowed"
            onClick={() => setCount(4)}
          >
            Back
          </button>
          <button
            className="next-btn active-color form-next-button"
            onClick={() => setCount(6)}
          >
            <p>Next</p>
            <img src={buttonArrow} />
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default ConfirmDetailsCard;
