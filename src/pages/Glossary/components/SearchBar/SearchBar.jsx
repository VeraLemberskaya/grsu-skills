import React from "react";
import Search from "../../../../assets/icons/Search.svg";
import "./index.css";
import { useCompetenciesFiltersActions } from "../../../../hooks/useCompetencies";

const SearchBar = () => {
  console.log("render Search Bar");

  const { setQuery } = useCompetenciesFiltersActions();

  return (
    <div className="glossary-search-input">
      <img src={Search} alt="Поиск" />
      <input
        onChange={(e) => setQuery(e.target.value)}
        autoComplete="off"
        maxLength="40"
        type="text"
        placeholder="Поиск..."
      />
    </div>
  );
};

export default SearchBar;
