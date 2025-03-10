import React from "react";
import buttonArrow from "../../assets/user-info/button-arrow.png";
import Progress from "../common/progress";
import add from "../../assets/user-info/add.png";
import { BASE_URL } from "../../config/constants";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Card = () => {
  const navigate = useNavigate();

  const token = sessionStorage.getItem("token") || "";
  const nino = sessionStorage.getItem("nino") || "";

  const handleNext = async () => {
    try {
      const firstResponse = await axios.get(
        `${BASE_URL}/api/external/individualCalculationsGetId?nino=${nino}&token=${token}&taxYear=2024-25&calculationType=in-year`,
        {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        }
      );
      console.log(firstResponse);

      if (firstResponse.status === 200 || firstResponse.status === 201) {
        const secondResponse = await axios.get(
          `${BASE_URL}/api/external/individualCalculations?nino=${nino}&token=${token}&taxYear=2024-25&calculationId=${firstResponse?.data?.calculationId}`,
          {
            headers: {
              "ngrok-skip-browser-warning": "true",
            },
          }
        );

        if (secondResponse.status === 200) {
          navigate("/review");
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="card-positioning-wrap">
      <Progress title="55% complete" width="55%" />
      <div className="main-card-wrap">
        <div>
          <p className="jaldi text-[30px] leading-[50px] text-[#0030499C]">
            For your{" "}
            <span className="text-[rgb(196, 196, 196)]">Delivery Driver</span>{" "}
            services, enter the income and expense totals only for period: April
            1, 2024 to June 30, 2024
          </p>
        </div>
        <div>
          <div className="final-form-input-main-wrap">
            <label className="archivo text-[24px] leading-[26px] text-[#06263E]">
              Total Income
            </label>
            <div className="final-form-input-wrap">
              <input />
              <p className="medium">£</p>
            </div>
          </div>
          <p className="archivo text-[24px] leading-[26px] text-[#06263E]">
            Expenses
          </p>
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
            onClick={handleNext}
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
