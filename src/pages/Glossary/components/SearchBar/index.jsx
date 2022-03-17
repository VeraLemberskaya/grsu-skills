import React from "react";
import Search from "../../../../assets/icons/Search.svg";

const SearchBar = ({ handleInput }) => {
  return (
    <div className="glossary-search-input">
      <img src={Search} alt="Поиск" />
      <input
        onChange={(e) => handleInput(e.target.value)}
        autoComplete="off"
        maxLength="40"
        type="text"
        placeholder="Поиск..."
      />
    </div>
  );
};

export default SearchBar;
