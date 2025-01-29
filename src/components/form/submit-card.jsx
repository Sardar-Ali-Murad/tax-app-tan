import React from "react";
import arrowRight from "../../assets/user-info/arrow-right.png";
import buttonArrow from "../../assets/user-info/button-arrow.png";
import card from "../../assets/form/card.png";
import "./index.css";

const SubmitCard = ({ routes, setCount }) => {
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
          <h1 className="form-title">Pay & Submit</h1>
          <p className="form-sub-title">
            Once you have paid for TaxReady.co.uk services you will be able to
            download and submit your return to the HMRC.
          </p>
        </div>

        <div className="payment-details-wrap">
          <div className="payment-left-overlay">
            <div className="one-time-payment">
              <h6>£ 20</h6>
              <p>One time payment</p>
            </div>
            <div className="total-wrap">
              <div className="sub-total-wrap">
                <p>Subtotal</p>
                <p>16.00</p>
              </div>
              <div className="sub-total-wrap">
                <p>VAT</p>
                <p> 4.00</p>
              </div>
              <div className="amount-bar"></div>
              <div className="sub-total-wrap">
                <p>Total</p>
                <p>£ 20.00</p>
              </div>
            </div>
          </div>
          <div className="payment-right-overlay">
            <div>
              <h1>Payment details</h1>
            </div>
            <div className="payment-input-overlay">
              <p>Cardholder name</p>
              <input placeholder="name on credit/ debit card" />
            </div>
            <div className="payment-input-overlay">
              <p>Credit/ debit card number</p>
              <div className="card-number-wrap">
                <img src={card} />
                <input placeholder="xxxx   xxx   xxx" />
              </div>
            </div>
            <div className="payment-input-overlay">
              <p>Expiry date</p>
              <div className="expiry-date-wrap">
                <input placeholder="MM" />
                <input placeholder="YYYY" />
                <input placeholder="123" />
              </div>
            </div>
            <div className="payment-input-overlay">
              <p>Email</p>
              <input />
            </div>
            <div className="payment-input-overlay">
              <p className="visibility-none">No Visibility</p>
              <div className="payment-terms">
                <input type="checkbox" />
                <p>
                  I agree to the <span>Agreement & Terms</span> , Find out how
                  we use and protect your data in our{" "}
                  <span> Privacy Policy.</span>
                </p>
              </div>
            </div>
            <div className="payment-input-overlay">
              <p className="visibility-none">No Visibility</p>
              <div className="payment-terms">
                <input type="checkbox" />
                <p>I’d like to receive direct marketing email updates.</p>
              </div>{" "}
            </div>
            <div
              className="card-button-wrap mt-40"
              style={{
                display: "flex",
                justifyContent: "end",
                cursor: "pointer",
              }}
            >
              <button
                className="back form-back-button"
                onClick={() => setCount(10)}
              >
                Pay
              </button>
            </div>
          </div>
        </div>

        <div className="card-button-wrap mt-40">
          <button
            className="back form-back-button"
            onClick={() => setCount(10)}
          >
            Back
          </button>
          <button
            className="next-btn active-color form-next-button"
            onClick={() => setCount(12)}
          >
            <p>Next</p>
            <img src={buttonArrow} />
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default SubmitCard;
