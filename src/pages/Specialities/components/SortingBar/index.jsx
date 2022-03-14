import React from "react";
import Search from "../../../../assets/icons/Search.svg";
import ArrowDown from "../../../../assets/icons/ArrowDown.svg";
import { useState, useRef } from "react";

const faculties = [
  {
    id: 1,
    name: "Факультет математики и информатики",
  },
  {
    id: 2,
    name: "Физико-технический факультет",
  },
  {
    id: 3,
    name: "Инженерно-строительный факультет",
  },
  {
    id: 4,
    name: "Факультет инновационных технологий машиностроения",
  },
  {
    id: 5,
    name: "Факультет биологии и экологии",
  },
  {
    id: 6,
    name: "Факультет истории, коммуникации и туризма",
  },
  {
    id: 7,
    name: "Юридический факультет",
  },
  {
    id: 8,
    name: "Факультет психологии",
  },
  {
    id: 9,
    name: "Факультет экономики и управления",
  },
  { id: 10, name: "Факультет искусств и дизайна" },
  {
    id: 11,
    name: "Военный факультет",
  },
  {
    id: 12,
    name: "Филологический факультет",
  },
  {
    id: 13,
    name: "Факультет физической культуры",
  },
];

const SortingBar = ({ faculty, setFaculty }) => {
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
