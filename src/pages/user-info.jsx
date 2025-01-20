import React from "react";
import Header from "../components/common/header";
import bars from "../assets/user-info/bars.svg";
import CompanyNameCard from "../components/user-info/company-name-card";
import CompanyDetailsCard from "../components/user-info/company-details-card";
import BankUploadCard from "../components/user-info/bank-upload-card";
import OfficeDeduction from "../components/user-info/office-deduction";
import "./index.css";

const UserInfo = () => {
  const [count, setCount] = React.useState(1);
  return (
    <div>
      <Header />
      <div className="user-info-body-wrap">
        <img src={bars} />
      </div>
      {count === 1 && (
        <CompanyNameCard
          setCount={setCount}
          routes={[
            { name: "start", step: 1, disabled: true },
            { name: "HMRC", step: 2, disabled: false },
          ]}
        />
      )}
      {count === 2 && (
        <CompanyDetailsCard
          setCount={setCount}
          routes={[
            { name: "start", step: 1, disabled: true },
            { name: "company", step: 2, disabled: true },
            { name: "verify", step: 3, disabled: false },
          ]}
        />
      )}
      {count === 3 && (
        <BankUploadCard
          setCount={setCount}
          routes={[
            { name: "start", step: 1, disabled: true },
            { name: "company", step: 2, disabled: true },
            { name: "verify", step: 3, disabled: true },
            { name: "reporting period", step: 4, disabled: true },
            { name: "enter preference", step: 5, disabled: false },
          ]}
        />
      )}
      {count === 5 && (
        <OfficeDeduction
          setCount={setCount}
          routes={[
            { name: "start", step: 1, disabled: true },
            { name: "company", step: 2, disabled: true },
            { name: "verify", step: 3, disabled: true },
            { name: "reporting period", step: 4, disabled: true },
            { name: "type", step: 5, disabled: true },
            { name: "home office", step: 6, disabled: false },
          ]}
        />
      )}
    </div>
  );
};

export default UserInfo;
