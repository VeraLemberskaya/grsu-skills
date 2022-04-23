import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { USER_ROLES } from "../../constants";
import ROUTE_PATHS from "../../constants/routePaths";

const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state.auth.user);
  return user?.role === USER_ROLES.student ? (
    children
  ) : (
    <Navigate to={ROUTE_PATHS.login} />
  );
};

export default PrivateRoute;
