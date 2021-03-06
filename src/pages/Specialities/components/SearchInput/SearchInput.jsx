import React, { useState, useEffect, useRef } from "react";
import Search from "../../../../assets/icons/Search.svg";
import Overlay from "../../../../components/Overlay";
import "./index.css";
import { setQuery } from "../../../../redux/faculties/facFilterSlice";
import { removeFaculty } from "../../../../redux/faculties/facultiesSlice";
import { useDispatch } from "react-redux";

const SearchInput = () => {
  const searchRef = useRef();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    searchRef.current.classList.remove("incorrect");
    if (e.key === "Enter") {
      const query = e.target.value;
      if (query.length >= 2) {
        setIsSearchOpen(false);
        dispatch(removeFaculty());
        dispatch(setQuery(query));
      } else {
        searchRef.current.classList.add("incorrect");
        setTimeout(() => {
          searchRef.current.classList.remove("incorrect");
        }, 500);
      }
    }
  };

  return (
    <>
      <Overlay
        state={isSearchOpen}
        clickHadler={() => {
          setIsSearchOpen(false);
        }}
      />
      <div className="search-input">
        <div
          ref={searchRef}
          className={`opened ${isSearchOpen ? "visible" : ""}`}
        >
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
