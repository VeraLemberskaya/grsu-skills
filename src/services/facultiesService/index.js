export const findSpecialitiesByQuery = (faculties, query) => {
  const result = [];
  faculties.forEach((fac) => {
    let specArray = [];
    fac.specialities.forEach((spec) => {
      if (spec.name.toLowerCase().includes(query.toLowerCase())) {
        specArray.push(spec);
      }
    });
    if (specArray.length) {
      result.push({
        ...fac,
        specialities: specArray,
      });
    }
  });
  return result.length ? result : null;
};
