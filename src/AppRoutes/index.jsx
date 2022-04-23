import React from "react";
import { Routes, Route } from "react-router-dom";

import {
  loginRoute,
  LayoutRoute,
  mainRoute,
  specialitiesRoute,
  singleSpecRoute,
  glossaryRoute,
  progressRoute,
  profileRoute,
} from "../constants/routes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={loginRoute.path} element={loginRoute.component} />
      <Route path={LayoutRoute.path} element={LayoutRoute.component}>
        <Route path={mainRoute.path} element={mainRoute.component} />
        <Route
          path={specialitiesRoute.path}
          element={specialitiesRoute.component}
        />
        <Route
          path={singleSpecRoute.path}
          element={singleSpecRoute.component}
        />
        <Route path={glossaryRoute.path} element={glossaryRoute.component} />
        <Route path={progressRoute.path} element={progressRoute.component} />
        <Route path={profileRoute.path} element={profileRoute.component} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
