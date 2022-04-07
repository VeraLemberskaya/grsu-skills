import React from "react";
import { Navigate } from "react-router-dom";
import { useStore } from "react-redux";

const PrivateRoute = ({ children }) => {
  const user = useStore().getState().auth.user;

  return user ? children : <Navigate to="/" />;
};

export default PrivateRoute;
