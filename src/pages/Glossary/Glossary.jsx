import React from "react";
import { GrsuSkillsLogoLight } from "../../components/GrsuSkillsLogo";
import BooksLeft from "../../assets/images/BooksLeft.png";
import BooksRight from "../../assets/images/BooksRight.png";
import { FooterBottom } from "../../components/FooterBottom";
import GlossaryArea from "./components/GlossaryArea";
import "./index.css";
import Page from "../../components/Page";

const Glossary = () => {
  return (
    <Page>
      <div className="glossary-page">
        <header className="glossary-header">
          <GrsuSkillsLogoLight />
          <h1>Глоссарий</h1>
        </header>
        <main className="glossary-main">
          <img src={BooksLeft} className="bg books-left" />
          <img src={BooksRight} className="bg books-right" />
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            tincidunt purus id quam ullamcorper sodales. Maecenas ut vehicula
            mi. Sed sodales, nibh at dignissim euismod, lectus lacus placerat
            elit, vel lobortis erat mi sed augue. Ut nibh sem, venenatis eget
            lobortis quis, lobortis et urna. Nullam luctus semper feugiat.
          </p>
          <GlossaryArea />
        </main>
        <footer>
          <FooterBottom />
        </footer>
      </div>
    </Page>
  );
};

export default Glossary;
