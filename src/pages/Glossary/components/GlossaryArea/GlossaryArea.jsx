import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar";
import PaginationBar from "../PaginationBar";
import GlossaryGrid from "../GlossaryGrid";
import CompetenciesProvider from "../../../../providers/CompetenciesProvider";
import "./index.css";
import { getCompetenciesLetters } from "../../../../api/ApiRequests";
import Loader from "../../../../components/Loader";

const GlossaryArea = () => {
  console.log("render Glossary Area");
  const [letters, setLetters] = useState(null);

  useEffect(async () => {
    const result = await getCompetenciesLetters();
    setLetters(result);
  }, []);

  return (
    <div className="glossary-area">
      {letters ? (
        <CompetenciesProvider>
          <SearchBar />
          <PaginationBar letters={letters} />
          <GlossaryGrid />
        </CompetenciesProvider>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default GlossaryArea;
