import React from "react";
import { useState, useCallback, useMemo, useEffect } from "react";
import AuthContext from "../../contexts/AuthContext";

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(1);

  const setJwtToken = useCallback((token) => {
    //console.log("set token");
    setToken(token);
  }, []);

  const removeJwtToken = useCallback(() => {
    //console.log("remove token");
    setToken({ ...token, jwtToken: "" });
  }, [setJwtToken]);

  const setRefreshToken = useCallback(
    (refreshToken) => {
      setToken({ ...token, refreshToken });
    },
    [setJwtToken]
  );

  const removeRefreshToken = useCallback(() => {
    setToken({ ...token, refreshToken: "" });
  }, [setJwtToken]);

  useEffect(() => {
    //console.log("new instance of set jwt token");
  }, [setJwtToken]);

  const contextValue = useMemo(
    () => ({
      token,
      setJwtToken,
      removeJwtToken,
      setRefreshToken,
      removeRefreshToken,
    }),
    [token]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
