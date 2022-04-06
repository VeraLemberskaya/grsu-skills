import API from "../../api";
import {
  allFacultiesEndPoint,
  competenciesEndPoint,
  competenciesLettersEndPoint,
  loginEndPoint,
} from "../../constants";

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

export const getCompetenciesByQuery = async (query) => {
  return API.get(competenciesEndPoint, {
    params: {
      query,
    },
  })
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const getCompetenciesLetters = async () => {
  return API.get(competenciesLettersEndPoint)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const authenticateUser = async (login, password) => {
  return API.post(loginEndPoint, {
    login,
    password,
  })
    .then((response) => response.data)
    .catch((error) => {
      if (error.response.status === 401) {
        throw new Error("Неверный логин или пароль.");
      } else {
        console.log(error);
      }
    });
};
