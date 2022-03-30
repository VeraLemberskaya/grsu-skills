import { FORM_TYPE } from "../../providers/FacultiesProvider";

const findSpecialities = (faculties, filterValue, callback) => {
  const result = [];
  faculties.forEach((fac) => {
    let specArray = [];
    fac.specialities.forEach((spec) => {
      if (callback(spec, filterValue)) {
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

const checkFormType = (speciality, formType) => {
  if (formType === FORM_TYPE.both) return true;
  return speciality.educationForms.some((form) =>
    form.title.toLowerCase().includes(formType.toLowerCase())
  );
};

const findSpecialitiesByForm = (faculties, educationFormFilter) => {
  return findSpecialities(faculties, educationFormFilter, checkFormType);
};

const findSpecialitiesByQuery = (faculties, queryFilter) => {
  return findSpecialities(faculties, queryFilter, checkQuery);
};

export const filterFaculties = (
  faculties,
  faculty,
  queryFilter,
  educationFormFilter
) => {
  if (faculty) {
    return findSpecialities(
      [{ ...faculty, name: null }],
      educationFormFilter,
      checkFormType
    );
  } else {
    return findSpecialities(
      findSpecialities(faculties, educationFormFilter, checkFormType),
      queryFilter,
      checkQuery
    );
  }
};
