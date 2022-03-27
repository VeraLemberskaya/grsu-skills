import React from "react";
import Search from "../../../../assets/icons/Search.svg";
import ArrowDown from "../../../../assets/icons/ArrowDown.svg";
import { useState, useRef } from "react";
import useFaculties from "../../../../hooks/useFaculties";

const SortingBar = () => {
  const { faculties, faculty, setFacultyState: setFaculty } = useFaculties();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  const renderedModalFaculties = faculties.map((fac) => {
    if (fac.id === faculty.id)
      return (
        <li className="active" data-id={fac.id} key={fac.id}>
          {fac.name}
        </li>
      );
    return (
      <li key={fac.id} data-id={fac.id}>
        {fac.name}
      </li>
    );
  });

  const handlePickerClick = (e) => {
    const id = e.target.dataset.id;
    //data-id keeps value as a string that is why not strict equal
    const chosenFaculty = faculties.find((fac) => fac.id == id);
    setIsPickerOpen(false);
    setFaculty(chosenFaculty);
  };

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
        <div className="search-input">
          <div className={`opened ${isSearchOpen ? "visible" : ""}`}>
            <div className="wrapper">
              <img src={Search} alt="Поиск" />
              <input
                autoComplete="off"
                maxLength="40"
                type="text"
                placeholder="Поиск..."
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
        <div className="picker">
          <div className="choose-faculty">
            <p>Выберите факультет</p>
          </div>
          <div className="faculty">
            <img src={ArrowDown} onClick={() => setIsPickerOpen(true)} />
            <p>{faculty.name}</p>
          </div>
        </div>
      </div>
      <div className={`faculty-modal ${isPickerOpen ? "opened" : ""}`}>
        <ul onClick={handlePickerClick}>{renderedModalFaculties}</ul>
      </div>
    </>
  );
};

export default SortingBar;
