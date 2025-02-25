import React from "react";
import buttonArrow from "../../assets/user-info/button-arrow.png";
import Progress from "../common/progress";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const navigate=useNavigate()
  return (
    <div className="card-positioning-wrap">
      <Progress title="18% complete" width="18%" />
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
            <p>jamie@.com</p>
          </div>
          <div className="single-collected-data">
            <h1>National Insurance Number (NINO)</h1>
            <p>12345678</p>
          </div>
        </div>

        <div className="card-button-wrap mt-40">
          <button
            className="back form-back-button not-allowed"
            onClick={() => navigate("/access-detail")}
          >
            Back
          </button>
          <button
            className="next-btn active-color form-next-button"
            onClick={() => navigate("/reporting-period")}
          >
            <p>Next</p>
            <img src={buttonArrow} />
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Card;
