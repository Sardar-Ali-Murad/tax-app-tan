import React from "react";
import Header from "../components/common/header";
import bars from "../assets/user-info/bars.svg";
import Card from "../components/confirm-details/card";
import { useSelector } from "react-redux";
import "./index.css";

const ConfirmDetails = () => {
  const { hmrc } = useSelector((state) => state?.auth);
  console.log(hmrc);
  return (
    <div>
      <Header />
      <div className="user-info-body-wrap">
        <img src={bars} />
      </div>
      <Card />
    </div>
  );
};

export default ConfirmDetails;
