import API from ".";
import { AuthorizationError } from "../Errors";
import {
  allFacultiesEndPoint,
  competenciesEndPoint,
  competenciesLettersEndPoint,
  loginEndPoint,
  refreshTokenEndPoint,
  facultiesFilterEndPoint,
  userInfoEndPoint,
  allDisciplinesEndPoint,
  disciplineEndPoint,
} from "../constants";
import { bearerAuthorization } from ".";

export const getFaculties = async () => {
  return await API.get(allFacultiesEndPoint)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const getFilterValues = async () => {
  return await API.get(facultiesFilterEndPoint)
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
  return await API.get(competenciesEndPoint, {
    params: {
      query,
    },
  })
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const getCompetenciesLetters = async () => {
  return await API.get(competenciesLettersEndPoint)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const getUserInfo = async () => {
  return await API.get(userInfoEndPoint, bearerAuthorization())
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const getAllDisciplines = async () => {
  return await API.get(allDisciplinesEndPoint)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const getDiscipline = async (id) => {
  return await API.get(disciplineEndPoint, {
    params: {
      id,
    },
  })
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const authorizeUser = async (login, password) => {
  return await API.post(loginEndPoint, {
    login,
    password,
  })
    .then((response) => response.data)
    .catch((error) => {
      if (error.response.status === 401) {
        throw new AuthorizationError();
      } else {
        console.log(error);
      }
    });
};

export const refreshToken = async (refreshToken) => {
  return await API.post(refreshTokenEndPoint, {
    refreshToken,
  })
    .then((response) => response.data)
    .catch((error) => console.log(error));
};
