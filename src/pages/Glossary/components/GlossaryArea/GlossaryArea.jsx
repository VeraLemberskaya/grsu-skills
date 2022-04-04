import React from "react";
import SearchBar from "../SearchBar";
import PaginationBar from "../PaginationBar";
import GlossaryGrid from "../GlossaryGrid";
import CompetenciesProvider from "../../../../providers/CompetenciesProvider";
import "./index.css";

const GlossaryArea = () => {
  console.log("render Glossary Area");

  return (
    <CompetenciesProvider>
      <div className="glossary-area">
        <SearchBar />
        <PaginationBar />
        <GlossaryGrid />
      </div>
    </CompetenciesProvider>
  );
};

export default GlossaryArea;
