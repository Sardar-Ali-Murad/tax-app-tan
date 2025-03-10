import React from "react";
import Header from "../components/common/header";
import bars from "../assets/user-info/bars.svg";
import Card from "../components/access-detail/card";
import axios from "axios";
import { BASE_URL } from "../config/constants";
import { useLocation } from "react-router-dom";
import "./index.css";

const AccessDetails = () => {
  const location = useLocation();

  React.useEffect(() => {
    if (location?.search) {
      sessionStorage.setItem("code", location?.search?.split("=")[1]);
      const getToken = async () => {
        const response = await axios.get(
          `${BASE_URL}/api/external/redirect?code=${
            location?.search?.split("=")[1]
          }`,
          {
            headers: {
              "ngrok-skip-browser-warning": "true",
            },
          }
        );
        sessionStorage.setItem("token", response?.data);
      };
      getToken();
    }
  }, [location]);
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

export default AccessDetails;
