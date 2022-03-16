import React from "react";
import { useLocation } from "react-router-dom";
import { GrsuSkillsLogoLight } from "../../components/GrsuSkillsLogo";
import BooksLeft from "../../assets/images/BooksLeft.svg";
import BooksRight from "../../assets/images/BooksRight.svg";
import { FooterBottom } from "../../components/FooterBottom";
import GlossaryArea from "./components/GlossaryArea";
import "./index.css";

const Glossary = () => {
  const animation = useLocation().state?.animation;
  return (
    <div className="glossary-page" style={{ animationName: animation }}>
      <header className="glossary-header">
        <GrsuSkillsLogoLight />
        <h1>Глоссарий</h1>
      </header>
      <main className="glossary-main">
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          tincidunt purus id quam ullamcorper sodales. Maecenas ut vehicula mi.
          Sed sodales, nibh at dignissim euismod, lectus lacus placerat elit,
          vel lobortis erat mi sed augue.
        </p>
        <img src={BooksLeft} className="bg books-left" />
        <img src={BooksRight} className="bg books-right" />
        <GlossaryArea />
      </main>
      <footer>
        <FooterBottom />
      </footer>
    </div>
  );
};

export default Glossary;
