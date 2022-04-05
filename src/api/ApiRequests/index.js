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
  // const response = await fetch("https://localhost:7042/api/Auth/login", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json;charset=utf-8",
  //   },
  //   body: JSON.stringify({
  //     login: login,
  //     password: password,
  //   }),
  // });

  // const result = await response.json();
  // return result;

  return API.post(loginEndPoint, {
    login,
    password,
  })
    .then((response) => response.data)
    .catch((error) => console.log(error));
};
