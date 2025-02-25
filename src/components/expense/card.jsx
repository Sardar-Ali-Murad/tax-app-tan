import React from "react";
import buttonArrow from "../../assets/user-info/button-arrow.png";
import Progress from "../common/progress";
import add from "../../assets/user-info/add.png";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const navigate = useNavigate();
  return (
    <div className="card-positioning-wrap">
      <Progress title="55% complete" width="55%" />
      <div className="main-card-wrap" >
        <div>
          <p className="jaldi text-[30px] leading-[50px] text-[#0030499C]">
            For your <span className="text-[rgb(196, 196, 196)]">Delivery Driver</span> services, enter the income and expense
            totals only for period: April 1, 2024 to June 30, 2024
          </p>
        </div>
        <div>
          <div className="final-form-input-main-wrap">
            <label className="archivo text-[24px] leading-[26px] text-[#06263E]">Total Income</label>
            <div className="final-form-input-wrap">
              <input />
              <p className="medium">£</p>
            </div>
          </div>
          <p className="archivo text-[24px] leading-[26px] text-[#06263E]">Expenses</p>
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
          <button
            className="back form-back-button"
            onClick={() => navigate("/employ-people")}
          >
            Back
          </button>
          <button
            className="next-btn active-color form-next-button"
            onClick={() => navigate("/review")}
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
