import React from "react";
import Header from "../components/home/header";
import Hero from "../components/home/hero";
import Body from "../components/home/body";
import LoginDialog from "../components/home/login-dialog";
import MyProfileDialog from "../components/home/my-profile-dialog";
import IncorrectLoginDialog from "../components/register-account/incorrect-login-dialog";
import ForgotPasswordDialog from "../components/register-account/forgot-password-dialog";
import PasswordResetDialog from "../components/register-account/password-reset-dialog";
import NewPasswordDialog from "../components/register-account/new-password-dialog";
import RegisterDialog from "../components/home/register-dialog";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../config/constants";

const Home = () => {
  const location = useLocation();
  const [showLoginDialog, setShowLoginDialog] = React.useState(false);
  const [showMyProfileDialog, setShowMyProfileDialog] = React.useState(false);
  const [inCorrectLoginDialog, setInCorrectLoginDialog] = React.useState(false);
  const [forgotPasswordDialog, setShowForgotPasswordDialog] =
    React.useState(false);
  const [passwordResetDialog, setPasswordResetDialog] = React.useState(false);
  const [newPasswordDialog, setNewPasswordDialog] = React.useState(false);
  const [registerDialog, setRegisterDialog] = React.useState(false);

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
        console.log(response)
      };
      getToken();
    }
  }, [location]);
  return (
    <div>
      {showLoginDialog && (
        <div className="model-parent">
          <div className="absolute top-[0px] left-[0px] botton-[0px] right-[0px] bg-[#40B7B0] min-h-[100vh] w-[100%] opacity-[0.14]"></div>
          <div className="model-wrap">
            <LoginDialog
              setShowLoginDialog={setShowLoginDialog}
              setInCorrectLoginDialog={setInCorrectLoginDialog}
              setShowForgotPasswordDialog={setShowForgotPasswordDialog}
              setRegisterDialog={setRegisterDialog}
            />
          </div>
        </div>
      )}
      {showMyProfileDialog && (
        <div className="model-parent">
          <div className="absolute top-[0px] left-[0px] bottom-[0px] right-[0px] bg-[#40B7B0] min-h-[100vh] w-[100%] opacity-[0.14]"></div>
          <div className="model-wrap">
            <MyProfileDialog setShowMyProfileDialog={setShowMyProfileDialog} />
          </div>
        </div>
      )}
      {inCorrectLoginDialog && (
        <div className="model-parent">
          <div className="absolute top-[0px] left-[0px] botton-[0px] right-[0px] bg-[#40B7B0] min-h-[100vh] w-[100%] opacity-[0.14]"></div>
          <div className="model-wrap">
            <IncorrectLoginDialog
              setInCorrectLoginDialog={setInCorrectLoginDialog}
            />
          </div>
        </div>
      )}
      {forgotPasswordDialog && (
        <div className="model-parent">
          <div className="absolute top-[0px] left-[0px] botton-[0px] right-[0px] bg-[#40B7B0] min-h-[100vh] w-[100%] opacity-[0.14]"></div>
          <div className="model-wrap">
            <ForgotPasswordDialog
              setShowForgotPasswordDialog={setShowForgotPasswordDialog}
              setPasswordResetDialog={setPasswordResetDialog}
            />
          </div>
        </div>
      )}
      {passwordResetDialog && (
        <div className="model-parent">
          <div className="absolute top-[0px] left-[0px] botton-[0px] right-[0px] bg-[#40B7B0] min-h-[100vh] w-[100%] opacity-[0.14]"></div>
          <div className="model-wrap">
            <PasswordResetDialog
              setPasswordResetDialog={setPasswordResetDialog}
              setNewPasswordDialog={setNewPasswordDialog}
            />
          </div>
        </div>
      )}
      {newPasswordDialog && (
        <div className="model-parent">
          <div className="absolute top-[0px] left-[0px] botton-[0px] right-[0px] bg-[#40B7B0] min-h-[100vh] w-[100%] opacity-[0.14]"></div>
          <div className="model-wrap">
            <NewPasswordDialog setNewPasswordDialog={setNewPasswordDialog} />
          </div>
        </div>
      )}
      {registerDialog && (
        <div className="model-parent">
          <div className="absolute top-[0px] left-[0px] botton-[0px] right-[0px] bg-[#40B7B0] min-h-[100vh] w-[100%] opacity-[0.14]"></div>
          <div className="model-wrap">
            <RegisterDialog
              setRegisterDialog={setRegisterDialog}
              setShowLoginDialog={setShowLoginDialog}
            />
          </div>
        </div>
      )}
      <Header
        setShowLoginDialog={setShowLoginDialog}
        setShowMyProfileDialog={setShowMyProfileDialog}
      />
      <Hero setShowLoginDialog={setShowLoginDialog} />
      <Body />
    </div>
  );
};

export default Home;
