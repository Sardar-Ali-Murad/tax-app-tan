import React from "react";
import Header from "../components/common/header";
import bars from "../assets/user-info/bars.svg";
import CompanyNameCard from "../components/user-info/company-name-card";
import "./index.css";

const UserInfo = () => {
  return (
    <div>
      <Header />
      <div className="user-info-body-wrap">
        <img src={bars} />
      </div>
        <CompanyNameCard />
    </div>
  );
};

export default UserInfo;
