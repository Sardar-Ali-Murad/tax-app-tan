import React from "react";
import arrowRight from "../../assets/user-info/arrow-right.png";
import buttonArrow from "../../assets/user-info/button-arrow.png";
import search from "../../assets/common/search.png";
import "./index.css";

const BusinessTypeCard = ({ routes, setCount }) => {
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
          <h1 className="form-title">Select business types</h1>
          <p className="form-sub-title">
            To assist in identifying the most common business expenses you may
            incur, please select all the types of services you provide.
          </p>
        </div>

        <div className="business-type-search-wrap">
          <div className="business-type-input-wrap">
            <img src={search} />
            <input />
          </div>
        </div>

        <div className="business-check-items-wrap">
          <div className="single-check-item">
            <input type="checkbox" />
            <p>Artist</p>
          </div>
          <div className="single-check-item">
            <input type="checkbox" />
            <p>Beauty and personal care technician</p>
          </div>
          <div className="single-check-item">
            <input type="checkbox" />
            <p>Childcare provider</p>
          </div>
          <div className="single-check-item">
            <input type="checkbox" />
            <p>Creative professional</p>
          </div>
          <div className="single-check-item">
            <input type="checkbox" />
            <p>Delivery driver</p>
          </div>
          <div className="single-check-item">
            <input type="checkbox" />
            <p>E-commerce and online seller</p>
          </div>
          <div className="single-check-item">
            <input type="checkbox" />
            <p>Entertainer</p>
          </div>
          <div className="single-check-item">
            <input type="checkbox" />
            <p>Farmers and agricultural</p>
          </div>
          <div className="single-check-item">
            <input type="checkbox" />
            <p>Freelance/ Consultant</p>
          </div>
        </div>

        <div className="card-button-wrap mt-40">
          <button className="back form-back-button" onClick={() => setCount(6)}>
            Back
          </button>
          <button
            className="next-btn active-color form-next-button"
            onClick={() => setCount(8)}
          >
            <p>Next</p>
            <img src={buttonArrow} />
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default BusinessTypeCard;
