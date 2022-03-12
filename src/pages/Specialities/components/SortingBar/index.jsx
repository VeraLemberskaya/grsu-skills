import React from "react";
import Search from "../../../../assets/icons/Search.svg";
import ArrowDown from "../../../../assets/icons/ArrowDown.svg";
import { useState, useRef } from "react";

const SortingBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const input = useRef();

  const openSearch = (e) => {
    e.preventDefault();
    setIsSearchOpen(true);
    console.log(input.current);
    input.current.focus();
  };

  return (
    <>
      <div
        onClick={() => setIsSearchOpen(false)}
        className={`overlay ${isSearchOpen ? "visible" : ""}`}
      ></div>
      <div className="sorting-bar">
        <div className="search-input">
          <div className={`opened ${isSearchOpen ? "visible" : ""}`}>
            <div className="wrapper">
              <img src={Search} alt="Поиск" />
              <input
                ref={input}
                autoComplete="off"
                maxLength="40"
                type="text"
                placeholder="Поиск..."
              />
            </div>
          </div>
          <div
            className={`closed ${isSearchOpen ? "" : "visible"}`}
            onClick={openSearch}
          >
            <div className="wrapper">
              <img src={Search} alt="Поиск" />
            </div>
          </div>
        </div>
        <div className="picker">
          <div className="choose-faculty">
            <p>Выберите факультет</p>
          </div>
          <div className="faculty">
            <img src={ArrowDown} />
            <p>Факультет искусств и дизайна</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SortingBar;
