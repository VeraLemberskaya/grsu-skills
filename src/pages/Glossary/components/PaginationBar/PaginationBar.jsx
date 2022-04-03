import React from "react";
import { useState } from "react";
import "./index.css";

const letters = [
  "а",
  "б",
  "в",
  "г",
  "д",
  "е",
  "ж",
  "з",
  "и",
  "к",
  "л",
  "м",
  "н",
  "о",
  "п",
  "р",
  "с",
  "т",
  "у",
  "ф",
  "х",
  "ц",
  "ч",
  "ш",
  "щ",
  "э",
  "ю",
  "я",
];

const PaginationBar = ({ chosenLetter, setChosenLetter }) => {
  // const [chosenLetter, setChosenLetter] = useState("а");

  const renderedPaginationLetters = letters.map((letter) => {
    return letter == chosenLetter.toLowerCase() ? (
      <li className="letter active">{letter}</li>
    ) : (
      <li className="letter">{letter}</li>
    );
  });

  const handlePagination = (e) => {
    const letter = e.target.innerText;
    if (letter.length === 1) setChosenLetter(letter);
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
