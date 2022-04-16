import React from "react";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { setLetterState } from "../../../../services/competenciesService";

const PaginationBar = ({ letters }) => {
  const chosenLetter = useSelector((state) => state.competencies.letter);
  console.log("render Pagination Bar");

  const renderedPaginationLetters = letters.map((letter) => {
    return (
      <li
        className={`${
          letter?.toLowerCase() === chosenLetter?.toLowerCase() ? "active" : ""
        } letter`}
      >
        {letter}
      </li>
    );
  });

  const handlePagination = (e) => {
    const letter = e.target.innerHTML;
    if (letter.length === 1) {
      setLetterState(letter);
    }
  };

  return (
    <div className="pagination-bar">
      <ul className="letters" onClick={handlePagination}>
        {renderedPaginationLetters}
      </ul>
    </div>
  );
};

export default PaginationBar;
