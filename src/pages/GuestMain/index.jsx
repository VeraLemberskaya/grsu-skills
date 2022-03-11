import React from "react";
import "./index.css";
import MainGuestHeader from "./components/Header";
import GuestMainSection from "./components/MainSection";
import MainFooter from "./components/Footer";
import FooterImage from "../../assets/images/FooterMain.svg";

const MainGuest = () => {
  return (
    <div className="page-main">
      <MainGuestHeader />
      <GuestMainSection />
      <MainFooter circlesImage={FooterImage} />
    </div>
  );
};

export default MainGuest;
