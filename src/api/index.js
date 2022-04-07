import axios from "axios";
import { grsuSkillsURL } from "../constants";
import { removeToken } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { refreshCurrentToken } from "../services/authService";
import store from "../redux/store";

const axiosInstance = axios.create({
  baseURL: grsuSkillsURL,
  responseType: "json",
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const originalRequest = error.config;

    if (originalRequest.url === "refresh/token") {
      removeToken();
      window.location.href = "/";
    }
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      return refreshCurrentToken(store.getState().auth.refreshToken).then(
        () => {
          originalRequest.headers.Authorization = `Bearer ${
            store.getState().auth.jwtToken
          }`;
          return axios(originalRequest);
        }
      );
    }
    return Promise.reject(error);
  }
);

export const bearerAuthorization = () => {
  const jwtToken = store.getState().auth.jwtToken;
  return {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  };
};

export default axiosInstance;
