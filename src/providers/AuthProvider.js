import React from "react";
import { useState, useMemo, useEffect } from "react";
import AuthContext from "../contexts/AuthContext";
import { AuthActionsContext } from "../contexts/AuthContext";
import { getUserInfo } from "../services/authService";

const AuthProvider = ({ children }) => {
  const [jwtToken, setJwtToken] = useState(localStorage.getItem("jwtToken"));
  const [refreshToken, setRefreshToken] = useState(
    localStorage.getItem("refreshToken")
  );
  const [user, setUser] = useState(getUserInfo(jwtToken));

  const removeJwtToken = () => {
    setJwtToken("");
  };

  const removeRefreshToken = () => {
    setRefreshToken("");
  };

  const setToken = (token) => {
    localStorage.setItem("jwtToken", token.jwt);
    localStorage.setItem("refreshToken", token.refreshToken);
    setJwtToken(token.jwt);
    setRefreshToken(token.refreshToken);
  };

  const removeToken = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("refreshToken");
    removeJwtToken();
    removeRefreshToken();
  };

  const setCurrentUser = (token) => {
    const user = getUserInfo(token);
    setUser(user);
  };

  const authorizeUser = (token) => {
    setToken(token);
    setCurrentUser(token.jwt);
  };

  const authActions = useMemo(
    () => ({
      setToken,
      removeToken,
      setCurrentUser,
      authorizeUser,
    }),
    []
  );

  const authState = useMemo(
    () => ({
      jwtToken,
      refreshToken,
      user,
    }),
    [jwtToken, user]
  );

  return (
    <AuthContext.Provider value={authState}>
      <AuthActionsContext.Provider value={authActions}>
        {children}
      </AuthActionsContext.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
