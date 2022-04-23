import React from "react";
import LoginPage from "../pages/Login";
import MainGuestPage from "../pages/GuestMain";
import SpecialitiesPage from "../pages/Specialities";
import SingleSpecialityPage from "../pages/SingleSpeciality";
import GlossaryPage from "../pages/Glossary";
import ProgressPage from "../pages/Progress";
import ProfilePage from "../pages/Profile";
import Layout from "../components/Layout";
import PrivateRoute from "../AppRoutes/components/PrivateRoute";
import ROUTE_PATHS from "./routePaths";

class Route {
  constructor(path, component) {
    this.path = path;
    this.component = component;
  }
}

export const loginRoute = new Route(ROUTE_PATHS.login, <LoginPage />);
export const mainRoute = new Route(ROUTE_PATHS.main, <MainGuestPage />);
export const LayoutRoute = new Route(ROUTE_PATHS.layout, <Layout />);
export const specialitiesRoute = new Route(
  ROUTE_PATHS.specialities,
  <SpecialitiesPage />
);
export const singleSpecRoute = new Route(
  ROUTE_PATHS.singleSpeciality,
  <SingleSpecialityPage />
);
export const glossaryRoute = new Route(ROUTE_PATHS.glossary, <GlossaryPage />);
export const progressRoute = new Route(ROUTE_PATHS.progress, <ProgressPage />);
export const profileRoute = new Route(
  ROUTE_PATHS.profile,
  (
    <PrivateRoute>
      <ProfilePage />
    </PrivateRoute>
  )
);
