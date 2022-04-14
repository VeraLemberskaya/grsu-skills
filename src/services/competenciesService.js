import store from "../redux/store";
import {
  setLetter,
  removeLetter,
  setQuery,
  removeQuery,
  loadCompetenciesByLetter,
  loadCompetenciesByQuery,
} from "../redux/compSlice";

export const divideCompetenciesOnColumns = (competencies) => {
  let col1 = [],
    col2 = [],
    col3 = [];
  let counter = 1;
  competencies.forEach((comp) => {
    if (counter === 1) col1.push(comp);
    else if (counter === 2) col2.push(comp);
    else {
      col3.push(comp);
      counter = 0;
    }
    counter++;
  });
  return [col1, col2, col3];
};

export const setLetterState = (letter) => {
  store.dispatch(setLetter(letter));
  store.dispatch(removeQuery());
  store.dispatch(loadCompetenciesByLetter());
};

export const setQueryState = (query) => {
  store.dispatch(setQuery(query));
  store.dispatch(removeLetter());
  store.dispatch(loadCompetenciesByQuery());
};

export const countSemester = (indexCourse, indexSem) => {
  return 2 * indexCourse + (indexSem + 1);
};
