export const grsuSkillsURL = "https://localhost:7042";

export const facultiesURL = "api/Faculties/";
export const allFacultiesEndPoint = `${facultiesURL}faculties`;
export const facultiesFilterEndPoint = `${facultiesURL}filters`;

export const competenciesEndPoint = "api/Competences/competences";
export const competenciesLettersEndPoint = `${competenciesEndPoint}/letters`;

export const userEndPoint = "";
export const loginEndPoint = "api/Auth/login";
export const refreshTokenEndPoint = `${userEndPoint}/refresh-token`;

export const USER_ROLES = {
  guest: "guest",
  student: "student",
  admin: "admin",
};
