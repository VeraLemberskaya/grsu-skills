import React from "react";
import FooterBootom from "../../../../components/FooterBottom";
import CirclesFooter from "../../../../assets/images/FooterMain.svg";

const MainFooter = () => {
  return (
    <footer className="main-footer">
      <div className="footer-info">
        <div className="text">
          <h2>grsu.skills</h2>
          <h4>Начни свой путь с нами!</h4>
        </div>
      </div>
      <FooterBootom circlesImage={CirclesFooter} />
    </footer>
  );
};

export default MainFooter;
