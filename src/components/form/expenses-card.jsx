import React from "react";
import "./index.css";
import arrowRight from "../../assets/user-info/arrow-right.png";
import buttonArrow from "../../assets/user-info/button-arrow.png";
import add from "../../assets/user-info/add.png";

const ExpensesCard = ({ routes, setCount }) => {
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
              >
                {route?.name}
              </p>
              {index !== routes.length - 1 && <img src={arrowRight} />}
            </>
          );
        })}
      </div>
      <div className="main-card-wrap" style={{ background: "#C4C4C4" }}>
        <div className="final-form-header">
          <p>Enter your income and expense totals for period: </p>
          <p>April 1, 2024 to June 30, 2024</p>
        </div>
        <div>
          <div className="final-form-input-main-wrap">
            <label>Total Income</label>
            <div className="final-form-input-wrap">
              <input />
              <p className="medium">£</p>
            </div>
          </div>
          <p className="expenses-label">Expenses</p>
          <div className="expense-input-wrap">
            <div className="expense-item">
              <label className="light-label">Directors salaries</label>
              <div className="final-form-input-wrap">
                <input />
                <p className="medium">£</p>
              </div>
            </div>
            <div className="expense-item">
              <label className="light-label">Dividends</label>
              <div className="final-form-input-wrap">
                <input />
                <p className="medium">£</p>
              </div>
            </div>
            <div className="expense-item">
              <label className="light-label">Employers NI</label>
              <div className="final-form-input-wrap">
                <input />
                <p className="medium">£</p>
              </div>
            </div>
            <div className="expense-item">
              <label className="light-label">Employee’s NI</label>
              <div className="final-form-input-wrap">
                <input />
                <p className="medium">£</p>
              </div>
            </div>
            <div className="expense-item">
              <label className="light-label">Software</label>
              <div className="final-form-input-wrap">
                <input />
                <p className="medium">£</p>
              </div>
            </div>
            <div className="expense-item">
              <label className="light-label">Stationary and printing</label>
              <div className="final-form-input-wrap">
                <input />
                <p className="medium">£</p>
              </div>
            </div>
            <div className="expense-item">
              <label className="light-label">Equipment expensed </label>
              <div className="final-form-input-wrap">
                <input />
                <p className="medium">£</p>
              </div>
            </div>
            <div className="expense-item">
              <label className="light-label">Telephone/ Internet bills </label>
              <div className="final-form-input-wrap">
                <input />
                <p className="medium">£</p>
              </div>
            </div>
            <div className="add-expense-wrap">
              <img src={add} />
              <p>add/ remove expense category</p>
            </div>
          </div>
        </div>
        <div className="card-button-wrap mt-40">
          <button className="back form-back-button" onClick={() => setCount(7)}>
            Back
          </button>
          <button
            className="next-btn active-color form-next-button"
            onClick={() => setCount(9)}
          >
            <p>Next</p>
            <img src={buttonArrow} />
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default ExpensesCard;
