import React from "react";
import SearchBar from "../SearchBar";
import PaginationBar from "../PaginationBar";
import GlossaryGrid from "../GlossaryGrid";

const GlossaryArea = () => {
  return (
    <div className="glossary-area">
      <SearchBar />
      <PaginationBar />
      <GlossaryGrid />
    </div>
  );
};

export default GlossaryArea;
