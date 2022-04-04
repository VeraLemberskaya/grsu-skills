import API from "../../api";
import { allFacultiesEndPoint, competenciesEndPoint } from "../../constants";

export const getFaculties = async () => {
  return await API.get(allFacultiesEndPoint)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const getCompetencies = async () => {
  return await API.get(competenciesEndPoint)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const getCompetenciesByLetter = async (letter) => {
  return await API.get(competenciesEndPoint + `/${letter}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};
