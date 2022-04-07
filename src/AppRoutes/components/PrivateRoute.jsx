import React, { useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  //const location = useLocation();
  //<Navigate to="/" state={{ from: location }} />

  return auth.user ? children : <Navigate to="/" />;
};

export default PrivateRoute;
