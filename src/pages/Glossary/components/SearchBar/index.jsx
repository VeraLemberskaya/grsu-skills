import React from "react";
import Search from "../../../../assets/icons/Search.svg";

const SearchBar = () => {
  return (
    <div className="glossary-search-input">
      <img src={Search} alt="Поиск" />
      <input
        autoComplete="off"
        maxLength="40"
        type="text"
        placeholder="Поиск..."
      />
    </div>
  );
};

export default SearchBar;
