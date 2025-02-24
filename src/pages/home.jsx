import React from "react";
import Header from "../components/home/header";
import Hero from "../components/home/hero";
import Body from "../components/home/body";
import LoginDialog from "../components/form/login-dialog";

const Home = () => {
  const [showLoginDialog, setShowLoginDialog] = React.useState(false);
  return (
    <div>
      {showLoginDialog && (
        <div className="model-parent">
          <div className="model-wrap">
            <LoginDialog setShowLoginDialog={setShowLoginDialog} />
          </div>
        </div>
      )}
      <Header setShowLoginDialog={setShowLoginDialog} />
      <Hero />
      <Body />
    </div>
  );
};

export default Home;
