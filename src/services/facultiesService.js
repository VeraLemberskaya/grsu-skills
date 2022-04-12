const findSpecialities = (faculties, callback, filterValue, filterValue2) => {
  const result = [];
  faculties.forEach((fac) => {
    let specArray = [];
    fac.specialities.forEach((spec) => {
      if (callback(spec, filterValue, filterValue2)) {
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

const checkQuery = (speciality, query) => {
  return speciality.name.toLowerCase().includes(query.toLowerCase());
};

const checkFormType = (speciality, formFilters, termFilters) => {
  if (
    formFilters.every((form) => {
      return speciality.educationForms.find((f) =>
        f.title.toLowerCase().includes(form.toLowerCase())
      );
    })
  ) {
    if (termFilters.length) {
      return termFilters.some((term) => {
        return speciality.educationForms.find((f) => f.termOfStudy === term);
      });
    }
    return true;
  }
};

export const selectFilteredFaculties = (state) => {
  const { faculties, faculty } = state.faculties;
  const { query: queryFilter, formFilters, termFilters } = state.facFilters;
  if (faculty) {
    return [{ ...faculty, name: null }];
  } else {
    return findSpecialities(
      findSpecialities(faculties, checkFormType, formFilters, termFilters),
      checkQuery,
      queryFilter
    );
  }
};
