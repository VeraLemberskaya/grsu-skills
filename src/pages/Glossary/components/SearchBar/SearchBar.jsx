import React, { useRef, useEffect } from "react";
import Search from "../../../../assets/icons/Search.svg";
import "./index.css";
import { useSelector } from "react-redux";
import { setQueryState } from "../../../../services/competenciesService";

const SearchBar = () => {
  const query = useSelector((state) => state.competencies.query);
  const searchWrapperRef = useRef();
  const searchRef = useRef();

  useEffect(() => {
    if (!query) searchRef.current.value = "";
  }, [query]);

  const handleSearchInput = (e) => {
    if (e.key === "Enter") {
      const query = e.target.value;
      if (query.length >= 2) {
        setQueryState(query);
        window.scrollBy(0, 400);
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
