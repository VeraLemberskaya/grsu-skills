import jwtDecode from "jwt-decode";
import {
  setJwtToken,
  removeJwtToken,
  setRefreshToken,
  removeRefreshToken,
  setUser,
  removeUser,
} from "../redux/authSlice";
import { refreshToken } from "../api/ApiRequests";
import { clearFaculties } from "../redux/faculties/facultiesSlice";
import { clearFacFilters } from "../redux/faculties/facFilterSlice";
import { clearCourses } from "../redux/coursesSlice";
import { clearComp } from "../redux/compSlice";
import { clearCV } from "../redux/cvSlice";
import store from "../redux/store";

export const setToken = (token) => {
  localStorage.setItem("jwtToken", token.jwt);
  localStorage.setItem("refreshToken", token.refreshToken);
  store.dispatch(setJwtToken(token.jwt));
  store.dispatch(setRefreshToken(token.refreshToken));
};

export const removeToken = () => {
  localStorage.removeItem("jwtToken");
  localStorage.removeItem("refreshToken");
  store.dispatch(removeJwtToken());
  store.dispatch(removeRefreshToken());
};

export const getUserInfo = (token) => {
  try {
    const decodedToken = jwtDecode(token);
    return decodedToken;
  } catch {
    return null;
  }
};

export const logOut = () => {
  store.dispatch(clearComp());
  store.dispatch(clearCourses());
  store.dispatch(clearFacFilters());
  store.dispatch(clearFaculties());
  removeToken();
  store.dispatch(removeUser());
  store.dispatch(clearCV());
};

export const setCurrentUser = async (token) => {
  const user = getUserInfo(token);
  store.dispatch(setUser(user));
};

export const setAuthData = (token) => {
  setToken(token);
  setCurrentUser(token.jwt);
};

export const refreshCurrentToken = async (rToken) => {
  const result = await refreshToken(rToken);
  const newToken = {
    jwt: result.token,
    refreshToken: result.refreshToken,
  };
  setToken(newToken);
};
