import axios from "axios";
import { grsuSkillsURL } from "../constants";
import { logOut } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { refreshCurrentToken } from "../services/authService";
import store from "../redux/store";
import { refreshTokenEndPoint } from "../constants";

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
  async (error) => {
    const errObjeect = JSON.parse(JSON.stringify(error));

    const originalRequest = error.config;

    if (originalRequest.url === refreshTokenEndPoint) {
      logOut();
      window.location.href = "/";
    }
    if (errObjeect.status === null && !originalRequest._retry) {
      originalRequest._retry = true;
      return await refreshCurrentToken(store.getState().auth.refreshToken).then(
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
