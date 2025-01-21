import React from "react";
import Header from "../components/common/header";
import bars from "../assets/user-info/bars.svg";
import InitialCard from "../components/form/initial-card";
import EmployPeopleCard from "../components/form/employ-people-card";
import CorporationTaxCard from "../components/form/corporation-taxes-card";
import AccessDetailsCard from "../components/form/access-details-card";
import ConfirmDetailsCard from "../components/form/confirm-details-card";
import ReportingPeriodCard from "../components/form/reporting-period-carrd";
import BusinessTypeCard from "../components/form/business-type-card";
import ExpensesCard from "../components/form/expenses-card";
import FinishedCard from "../components/form/finishes-card";

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
      {count === 5 && (
        <ConfirmDetailsCard
          setCount={setCount}
          routes={[
            { name: "start", step: 1, disabled: true },
            { name: "HMRC", step: 2, disabled: true },
            { name: "verify", step: 3, disabled: false },
          ]}
        />
      )}
      {count === 6 && (
        <ReportingPeriodCard
          setCount={setCount}
          routes={[
            { name: "start", step: 1, disabled: true },
            { name: "HMRC", step: 2, disabled: true },
            { name: "verify", step: 3, disabled: true },
            { name: "reporting period", step: 4, disabled: false },
          ]}
        />
      )}
      {count === 7 && (
        <BusinessTypeCard
          setCount={setCount}
          routes={[
            { name: "start", step: 1, disabled: true },
            { name: "HMRC", step: 2, disabled: true },
            { name: "verify", step: 3, disabled: true },
            { name: "reporting period", step: 4, disabled: true },
            { name: "type", step: 5, disabled: false },
          ]}
        />
      )}
      {count === 8 && (
        <ExpensesCard
          setCount={setCount}
          routes={[
            { name: "start", step: 1, disabled: true },
            { name: "HMRC", step: 2, disabled: true },
            { name: "verify", step: 3, disabled: true },
            { name: "reporting period", step: 4, disabled: true },
            { name: "type", step: 5, disabled: true },
            { name: "income/ expenses", step: 6, disabled: false },
          ]}
        />
      )}
      {count === 9 && (
        <FinishedCard
          setCount={setCount}
          routes={[
            { name: "start", step: 1, disabled: true },
            { name: "HMRC", step: 2, disabled: true },
            { name: "verify", step: 3, disabled: true },
            { name: "reporting period", step: 4, disabled: true },
            { name: "type", step: 5, disabled: true },
            { name: "income/ expenses", step: 6, disabled: true },
            { name: "review", step: 7, disabled: true },
            { name: "pay", step: 8, disabled: true },
            { name: "login", step: 9, disabled: true },
            { name: "done", step: 10, disabled: false },
          ]}
        />
      )}
    </div>
  );
};

export default Form;
