import React from "react";
import { GrsuSkillsLogoLight } from "../../components/GrsuSkillsLogo";
import "./index.css";
import SpecialitiesArea from "./components/SpecialitiesArea";
import { FooterBottom } from "../../components/FooterBottom";
import TreesLeft from "../../assets/images/TreesSpLeft.png";
import TreesRight from "../../assets/images/TreesSpRight.png";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import FacultiesProvider from "../../providers/FacultiesProvider";
import SortingBar from "./components/SortingBar";
import Filter from "./components/Filter";
import SpecialitiesList from "./components/SpecialitiesList";

const Specialities = () => {
  const animation = useLocation().state?.animation;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <FacultiesProvider>
      <div className="specialities-page" style={{ animationName: animation }}>
        <header className="specialities-header">
          <GrsuSkillsLogoLight />
          <h1>Специальности</h1>
        </header>
        <main className="specialities-main">
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            tincidunt purus id quam ullamcorper sodales. Maecenas ut vehicula
            mi. Sed sodales, nibh at dignissim euismod, lectus lacus placerat
            elit, vel lobortis erat mi sed augue.
          </p>
          <img src={TreesLeft} className="bg trees-left" />
          <img src={TreesRight} className="bg trees-right" />
          <SpecialitiesArea>
            <SortingBar />
            <Filter />
            <SpecialitiesList />
          </SpecialitiesArea>
        </main>
        <footer>
          <FooterBottom />
        </footer>
      </div>
    </FacultiesProvider>
  );
};

export default Specialities;
