import React from "react";
import "./index.css";
import MainGuestHeader from "./components/Header";
import GuestMainSection from "./components/MainSection";
import MainFooter from "./components/Footer";
import { useLocation } from "react-router-dom";

const MainGuest = () => {
  const animation = useLocation().state?.animation;

  return (
    <div className="page-main" style={{ animationName: animation }}>
      <MainGuestHeader />
      <GuestMainSection />
      <MainFooter />
    </div>
  );
};

export default MainGuest;
