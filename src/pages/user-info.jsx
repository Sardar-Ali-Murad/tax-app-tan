import React from "react";
import Header from "../components/common/header";
import bars from "../assets/user-info/bars.svg";
import CompanyNameCard from "../components/user-info/company-name-card";
import CompanyDetailsCard from "../components/user-info/company-details-card";
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
            { name: "start", step: 0, disabled: true },
            { name: "company", step: 1, disabled: false },
            { name: "verify", step: 2, disabled: false },
          ]}
        />
      )}
    </div>
  );
};

export default UserInfo;
