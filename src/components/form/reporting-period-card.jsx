import React from "react";
import arrowRight from "../../assets/user-info/arrow-right.png";
import buttonArrow from "../../assets/user-info/button-arrow.png";
import "./index.css";

const ReportingPeriodCard = ({ routes, setCount }) => {
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
          <h1 className="form-title">Reporting Period </h1>
          <p className="form-sub-title">
            Per the HMRC, your next tax filing reporting period due is:
          </p>
        </div>

        <div className="form-collected-data">
          <div className="single-collected-data">
            <h1>Type of obligation</h1>
            <p>Income Tax</p>
          </div>
          <div className="single-collected-data">
            <h1>Period start and end dates</h1>
            <p>April 1, 2024 - June 30, 2024</p>
          </div>
          <div className="single-collected-data">
            <h1>Due date</h1>
            <p>2024</p>
          </div>
        </div>
        <p className="reporting-period-sub-text">
          If the reporting period is incorrect, please
          <span
            style={{ fontWeight: "600", marginLeft: "5px", cursor: "pointer" }}
            onClick={() =>
              window.open("https://www.gov.uk/contact-hmrc", "__blank")
            }
          >
            contact
          </span>{" "}
          the HMRC
        </p>

        <div className="card-button-wrap mt-40">
          <button
            className="back form-back-button not-allowed"
            onClick={() => setCount(5)}
          >
            Back
          </button>
          <button
            className="next-btn active-color form-next-button"
            onClick={() => setCount(7)}
          >
            <p>Next</p>
            <img src={buttonArrow} />
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default ReportingPeriodCard;
