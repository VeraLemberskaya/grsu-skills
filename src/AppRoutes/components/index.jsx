import React from "react";
import { useLocation, Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  return <Navigate to="/" state={{ from: location }} />;
};

export default PrivateRoute;
