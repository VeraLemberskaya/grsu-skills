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
