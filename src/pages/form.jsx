import React from "react";
import Header from "../components/common/header";
import bars from "../assets/user-info/bars.svg";
import InitialCard from "../components/form/initial-card";

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
    </div>
  );
};

export default Form;
