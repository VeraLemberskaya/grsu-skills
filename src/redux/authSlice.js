import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

const getUserInfo = (token) => {
  try {
    const decodedToken = jwtDecode(token);
    return decodedToken;
  } catch {
    return null;
  }
};

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    jwtToken: localStorage.getItem("jwtToken"),
    refreshToken: localStorage.getItem("refreshToken"),
    user: getUserInfo(localStorage.getItem("jwtToken")),
  },
  reducers: {
    setJwtToken: (state, action) => {
      state.jwtToken = action.payload;
    },
    removeJwtToken: (state) => {
      state.jwtToken = "";
    },
    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },
    removeRefreshToken: (state) => {
      state.refreshToken = "";
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
  },
});

export const {
  setJwtToken,
  removeJwtToken,
  setRefreshToken,
  removeRefreshToken,
  setUser,
  removeUser,
} = authSlice.actions;

export default authSlice.reducer;
