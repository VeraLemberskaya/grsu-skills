export const grsuSkillsURL = "http://abandonedscope-001-site1.gtempurl";

const facultiesURL = "api/Faculties/";
export const allFacultiesEndPoint = `${facultiesURL}faculties`;
export const facultiesFilterEndPoint = `${facultiesURL}filters`;

export const competenciesEndPoint = "api/Competences/competences";
export const competenciesLettersEndPoint = `${competenciesEndPoint}/letters`;

const userURL = "api/User/";
export const userInfoEndPoint = `${userURL}info`;

const authURL = "api/Auth/";
export const loginEndPoint = `${authURL}login`;
export const refreshTokenEndPoint = `${authURL}refresh-token`;

const discURL = "api/Disciplines/";
export const allDisciplinesEndPoint = `${discURL}disciplines/all`;
export const disciplineEndPoint = `${discURL}discipline`;

export const USER_ROLES = {
  guest: "guest",
  student: "student",
  admin: "admin",
};
