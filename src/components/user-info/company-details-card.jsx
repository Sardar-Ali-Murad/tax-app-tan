import React from "react";
import "./index.css";
import arrowRight from "../../assets/user-info/arrow-right.png";
import buttonArrow from "../../assets/user-info/button-arrow.png";


const CompanyDetailsCard = ({ setCount, routes }) => {
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
          <h1 className="heading">Confirm details</h1>
          <p className="medium">
            Are the details listed below correct? If not, please click the back
            button and try logging in again, or contact the HMRC.
          </p>
        </div>

        <div className="company-details">
          <div className="company-single-detail-wrap">
            <h1>Company name</h1>
            <p>Hawkins & Co Consulting Ltd</p>
          </div>
          <div className="company-single-detail-wrap">
            <h1>Company address</h1>
            <p>3 Sharrow Lane, Sheffield, England, S11 8AE</p>
          </div>
          <div className="d-flex space-between">
            <div className="company-single-detail-wrap">
              <h1>Company registration no.</h1>
              <p>12345678</p>
            </div>
            <div className="company-single-detail-wrap">
              <h1>Tax reference no.</h1>
              <p>1234567890</p>
            </div>
          </div>
          <div className="company-single-detail-wrap">
            <h1>Nature of business</h1>
            <p>
              70229 - Management consultancy activities other than financial
              management
            </p>
          </div>
        </div>

        <div className="card-button-wrap mt-40">
          <button className="back" onClick={() => setCount(1)}>Back</button>
          <button className="next-btn active-color" onClick={() => setCount(3)}>
            <p>Next</p>
            <img src={buttonArrow} />
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default CompanyDetailsCard;
