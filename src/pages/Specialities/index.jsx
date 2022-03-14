import React from "react";
import { GrsuSkillsLogoLight } from "../../components/GrsuSkillsLogo";
import "./index.css";
import SpecialitiesArea from "./components/SpecialitiesArea";
import FooterBootom from "../../components/FooterBottom";
import FooterCircles from "../../assets/images/Footer.svg";
import TreesLeft from "../../assets/images/TreesSpLeft.svg";
import TreesRight from "../../assets/images/TreesSpRight.svg";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Specialities = () => {
  const animation = useLocation().state?.animation;

  //will perform just once with first render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="specialities-page" style={{ animationName: animation }}>
      <header className="specialities-header">
        <GrsuSkillsLogoLight />
        <h1>Специальности</h1>
      </header>
      <main className="specialities-main">
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          tincidunt purus id quam ullamcorper sodales. Maecenas ut vehicula mi.
          Sed sodales, nibh at dignissim euismod, lectus lacus placerat elit,
          vel lobortis erat mi sed augue.
        </p>
        <img src={TreesLeft} className="bg trees-left" />
        <img src={TreesRight} className="bg trees-right" />
        <SpecialitiesArea />
      </main>
      <footer>
        <FooterBootom circlesImage={FooterCircles} />
      </footer>
    </div>
  );
};

export default Specialities;
