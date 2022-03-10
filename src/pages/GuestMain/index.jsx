import React from "react";
import "./index.css";
import MainGuestHeader from "./components/Header";
import GuestMainSection from "./components/MainSection";
import MainFooter from "./components/Footer";

const MainGuest = () => {
  return (
    <div className="page-main">
      <MainGuestHeader />
      <GuestMainSection />
      <MainFooter />
    </div>
  );
};

export default MainGuest;
