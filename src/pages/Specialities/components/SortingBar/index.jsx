import React from "react";
import Search from "../../../../assets/icons/Search.svg";
import ArrowDown from "../../../../assets/icons/ArrowDown.svg";
import { useState, useRef } from "react";
// import useFaculties from "../../../../hooks/useFaculties";
import { useFacultiesState } from "../../../../hooks/useFaculties";
import SearchInput from "../SearchInput";
import Picker from "../Picker";

const SortingBar = ({ searchValue, handleSearch }) => {
  const {
    faculties,
    faculty,
    setFacultyState: setFaculty,
  } = useFacultiesState();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  const renderedModalFaculties = faculties.map((fac) => {
    if (faculty) {
      if (fac.id === faculty.id)
        return (
          <li className="active" data-id={fac.id} key={fac.id}>
            {fac.name}
          </li>
        );
    }
    return (
      <li key={fac.id} data-id={fac.id}>
        {fac.name}
      </li>
    );
  });

  const handlePickerClick = (e) => {
    const id = e.target.dataset.id;
    const chosenFaculty = faculties.find((fac) => fac.id == id);
    setIsPickerOpen(false);
    setFaculty(chosenFaculty);
  };

  // const handleInput = (e) => {
  //   if (e.key === "Enter") {
  //     setIsSearchOpen(false);
  //     handleSearch(e.target.value);
  //     e.target.value = "";
  //   }
  // };

  return (
    <>
      <div
        onClick={() => {
          setIsSearchOpen(false);
          setIsPickerOpen(false);
        }}
        className={`overlay ${isSearchOpen || isPickerOpen ? "visible" : ""}`}
      ></div>
      <div className="sorting-bar">
        <SearchInput
          isSearchOpen={isSearchOpen}
          setIsSearchOpen={setIsSearchOpen}
        />
        {/* <div className="search-input">
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
        </div> */}
        <Picker setIsPickerOpen={setIsPickerOpen} />
        {/* <div className="picker">
          <div className="choose-faculty">
            <p>Выберите факультет</p>
          </div>
          <div className="faculty">
            <img src={ArrowDown} onClick={() => setIsPickerOpen(true)} />
            <p>{faculty ? faculty.name : searchValue}</p>
          </div>
        </div> */}
      </div>
      <div className={`faculty-modal ${isPickerOpen ? "opened" : ""}`}>
        <ul onClick={handlePickerClick}>{renderedModalFaculties}</ul>
      </div>
    </>
  );
};

export default SortingBar;
