import React from "react";
import Header from "../components/home/header";
import Hero from "../components/home/hero";
import Body from "../components/home/body";
import LoginDialog from "../components/home/login-dialog";
import MyProfileDialog from "../components/home/my-profile-dialog";

const Home = () => {
  const [showLoginDialog, setShowLoginDialog] = React.useState(false);
  const [showMyProfileDialog, setShowMyProfileDialog] = React.useState(false);
  return (
    <div>
      {showLoginDialog && (
        <div className="model-parent">
          <div className="absolute top-[0px] left-[0px] botton-[0px] right-[0px] bg-[#40B7B0] min-h-[100vh] w-[100%] opacity-[0.14]"></div>
          <div className="model-wrap">
            <LoginDialog
              setShowLoginDialog={setShowLoginDialog}
              setShowMyProfileDialog={setShowMyProfileDialog}
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
      <Header setShowLoginDialog={setShowLoginDialog} />
      <Hero setShowMyProfileDialog={setShowMyProfileDialog} />
      <Body />
    </div>
  );
};

export default Home;
