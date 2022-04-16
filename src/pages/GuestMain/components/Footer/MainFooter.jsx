import React from "react";
import { FooterBottomMain } from "../../../../components/FooterBottom";
import "./index.css";

const MainFooter = () => {
  return (
    <footer className="main-footer">
      <div className="footer-info">
        <div className="text">
          <h2>grsu.skills</h2>
          <h4>Начни свой путь с нами!</h4>
        </div>
      </div>
      <FooterBottomMain />
    </footer>
  );
};

export default MainFooter;
