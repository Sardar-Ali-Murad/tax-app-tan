import React from "react";
import "./index.css";
import logo from "../../assets/user-info/logo.svg";
import flag from "../../assets/common/flag.svg";

const header = () => {
  return (
    <div className="common-header-wrap">
      <div>
        <img src={logo} />
      </div>
      <div className="common-header-right-wrap">
        <p>Login</p>
        <img src={flag} />
      </div>
    </div>
  );
};

export default header;
