import React, { useState } from "react";
import Search from "../../../../assets/icons/Search.svg";
import { useFacultiesActions } from "../../../../hooks/useFaculties";
import Overlay from "../Overlay";
import "./index.css";

const SearchInput = () => {
  console.log("render Search");
  // const [isInputCorrect, setIsInputCorrect] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { setFacultyState, setSearchQuery } = useFacultiesActions();

  const handleInput = (e) => {
    // setIsInputCorrect(true);
    const query = e.target.value;
    if (e.key === "Enter") {
      if (query.length >= 2) {
        // setIsInputCorrect(true);
        setIsSearchOpen(false);
        setFacultyState(null);
        setSearchQuery(query);
      } else {
        // setIsInputCorrect(false);
      }
    }
  };

  return (
    <>
      <Overlay state={isSearchOpen} setState={setIsSearchOpen} />
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
    </>
  );
};

export default SearchInput;
