import React, { useRef, useEffect, useState } from "react";
import Search from "../../../../assets/icons/Search.svg";
import "./index.css";
import {
  useCompetenciesFiltersActions,
  useCompetenciesFilters,
} from "../../../../hooks/useCompetencies";

const SearchBar = () => {
  const { query } = useCompetenciesFilters();
  const { setQueryState } = useCompetenciesFiltersActions();
  const searchWrapperRef = useRef();
  const searchRef = useRef();

  //change the value of input to '' if the letter is chosen
  useEffect(() => {
    if (!query) searchRef.current.value = "";
  }, [query]);

  const handleSearchInput = (e) => {
    if (e.key === "Enter") {
      const query = e.target.value;
      if (query.length > 2) {
        setQueryState(query);
      } else {
        searchWrapperRef.current.classList.add("incorrect");
        setTimeout(() => {
          searchWrapperRef.current.classList.remove("incorrect");
        }, 700);
      }
    }
  };

  return (
    <div ref={searchWrapperRef} className="glossary-search-input">
      <img src={Search} alt="Поиск" />
      <input
        ref={searchRef}
        onKeyUp={handleSearchInput}
        autoComplete="off"
        maxLength="40"
        type="text"
        placeholder="Поиск..."
      />
    </div>
  );
};

export default SearchBar;
