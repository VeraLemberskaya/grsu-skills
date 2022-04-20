import React from "react";
import MainGuestHeader from "./components/Header";
import GuestMainSection from "./components/MainSection";
import MainFooter from "./components/Footer";
import Page from "../../components/Page";

const MainGuest = () => {
  return (
    <Page>
      <div className="page-main">
        <MainGuestHeader />
        <GuestMainSection />
        <MainFooter />
      </div>
    </Page>
  );
};

export default MainGuest;
