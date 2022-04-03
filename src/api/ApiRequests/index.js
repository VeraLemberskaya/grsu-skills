import API from "../../api";
import {
  allFacultiesEndPoint,
  allCompetenciesEndPoint,
  competenciesEndPoint,
} from "../../constants";

export const getFaculties = async () => {
  return await API.get(allFacultiesEndPoint)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const getCompetencies = async () => {
  return await API.get(allCompetenciesEndPoint)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const getCompetenciesByLetter = async (letter) => {
  return await API.post(competenciesEndPoint, {
    letter,
  })
    .then((response) => response.data)
    .catch((error) => console.log(error));
};
