import React from "react";
// import LoginPage from "../pages/Login";
// import MainGuestPage from "../pages/GuestMain";
// import SpecialitiesPage from "../pages/Specialities";
// import SingleSpecialityPage from "../pages/SingleSpeciality";
// import GlossaryPage from "../pages/Glossary";
// import ProgressPage from "../pages/Progress";
// import ProfilePage from "../pages/Profile";
import {
  Login,
  GuestMain,
  Profile,
  Progress,
  Glossary,
  Specialities,
  SingleSpeciality,
  Resume,
} from "../pages";
import Layout from "../components/Layout";
import PrivateRoute from "../AppRoutes/components/PrivateRoute";
import ROUTE_PATHS from "./routePaths";

class Route {
  constructor(path, component) {
    this.path = path;
    this.component = component;
  }
}

export const loginRoute = new Route(ROUTE_PATHS.login, <Login />);
export const mainRoute = new Route(ROUTE_PATHS.main, <GuestMain />);
export const LayoutRoute = new Route(ROUTE_PATHS.layout, <Layout />);
export const specialitiesRoute = new Route(
  ROUTE_PATHS.specialities,
  <Specialities />
);
export const singleSpecRoute = new Route(
  ROUTE_PATHS.singleSpeciality,
  <SingleSpeciality />
);
export const glossaryRoute = new Route(ROUTE_PATHS.glossary, <Glossary />);
export const progressRoute = new Route(ROUTE_PATHS.progress, <Progress />);
export const profileRoute = new Route(
  ROUTE_PATHS.profile,
  (
    <PrivateRoute>
      <Profile />
    </PrivateRoute>
  )
);

export const resumeRoute = new Route(
  ROUTE_PATHS.resume,
  (
    <PrivateRoute>
      <Resume />
    </PrivateRoute>
  )
);
