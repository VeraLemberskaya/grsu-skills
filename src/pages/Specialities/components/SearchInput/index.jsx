import React from "react";
import Search from "../../../../assets/icons/Search.svg";
import {
  useFacultiesFilters,
  useFacultiesState,
} from "../../../../hooks/useFaculties";

const SearchInput = ({ isSearchOpen, setIsSearchOpen }) => {
  const { setSearchQuery } = useFacultiesFilters();
  const { setFacultyState } = useFacultiesState();

  const handleInput = (e) => {
    if (e.key === "Enter") {
      setIsSearchOpen(false);
      const query = e.target.value;
      if (query != "") {
        setFacultyState(null);
        setSearchQuery(query);
      }
    }
  };

  return (
    <div className="search-input">
      <div className={`opened ${isSearchOpen ? "visible" : ""}`}>
        <div className="wrapper">
          <img src={Search} alt="Поиск" />
          <input
            autoComplete="off"
            maxLength="40"
            type="text"
            placeholder="Поиск..."
            onKeyUp={handleInput}
          />
        </div>
      </div>
      <div
        className={`closed ${isSearchOpen ? "" : "visible"}`}
        onClick={() => {
          setIsSearchOpen(true);
        }}
      >
        <div className="wrapper">
          <img src={Search} alt="Поиск" />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
