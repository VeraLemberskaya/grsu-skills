import React from "react";
import {
  useCompetenciesFilters,
  useCompetenciesFiltersActions,
} from "../../../../hooks/useCompetencies";
import "./index.css";

// const letters = [
//   "а",
//   "б",
//   "в",
//   "г",
//   "д",
//   "е",
//   "ж",
//   "з",
//   "и",
//   "к",
//   "л",
//   "м",
//   "н",
//   "о",
//   "п",
//   "р",
//   "с",
//   "т",
//   "у",
//   "ф",
//   "х",
//   "ц",
//   "ч",
//   "ш",
//   "щ",
//   "э",
//   "ю",
//   "я",
// ];

const PaginationBar = ({ letters }) => {
  console.log(letters);
  const { letter: chosenLetter } = useCompetenciesFilters();
  const { setLetterState } = useCompetenciesFiltersActions();

  console.log("render Pagination Bar");

  const renderedPaginationLetters = letters.map((letter) => {
    return letter.toLowerCase() === chosenLetter.toLowerCase() ? (
      <li key={letter} className="letter active">
        {letter}
      </li>
    ) : (
      <li className="letter">{letter}</li>
    );
  });

  const handlePagination = (e) => {
    const letter = e.target.innerText;
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
