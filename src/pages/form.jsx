import React from "react";
import Header from "../components/common/header";
import bars from "../assets/user-info/bars.svg";
import InitialCard from "../components/form/initial-card";
import EmployPeopleCard from "../components/form/employ-people-card";
import CorporationTaxCard from "../components/form/corporation-taxes-card";
import AccessDetailsCard from "../components/form/access-details-card";

import "./index.css";

const Form = () => {
  const [count, setCount] = React.useState(1);
  return (
    <div>
      <Header />
      <div className="user-info-body-wrap">
        <img src={bars} />
      </div>
      {count === 1 && (
        <InitialCard
          setCount={setCount}
          routes={[{ name: "start", step: 1, disabled: false }]}
        />
      )}
      {count === 2 && (
        <EmployPeopleCard
          setCount={setCount}
          routes={[{ name: "start", step: 1, disabled: false }]}
        />
      )}
      {count === 3 && (
        <CorporationTaxCard
          setCount={setCount}
          routes={[
            { name: "start", step: 1, disabled: true },
            { name: "corporation", step: 2, disabled: false },
          ]}
        />
      )}
      {count === 4 && (
        <AccessDetailsCard
          setCount={setCount}
          routes={[
            { name: "start", step: 1, disabled: true },
            { name: "HMRC", step: 2, disabled: false },
          ]}
        />
      )}
    </div>
  );
};

export default Form;
