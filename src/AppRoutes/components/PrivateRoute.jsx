import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { USER_ROLES } from "../../constants";

const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state.auth.user);
  return user?.role === USER_ROLES.student ? children : <Navigate to="/" />;
};

export default PrivateRoute;
