import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import LoginPage from "../pages/Login";
import MainGuestPage from "../pages/GuestMain";
import SpecialitiesPage from "../pages/Specialities";
import SingleSpecialityPage from "../pages/SingleSpeciality";
import GlossaryPage from "../pages/Glossary";
import ProgressPage from "../pages/Progress";
import ProfilePage from "../pages/Profile";
import Layout from "../components/Layout";
import Loader from "../components/Loader";

// const LoginPage = lazy(() => import("../pages/Login"));
// const MainGuestPage = lazy(() => import("../pages/GuestMain"));
// const SpecialitiesPage = lazy(() => import("../pages/Specialities"));
// const SingleSpecialityPage = lazy(() => import("../pages/SingleSpeciality"));
// const GlossaryPage = lazy(() => import("../pages/Glossary"));
// const ProgressPage = lazy(() => import("../pages/Progress"));
// const ProfilePage = lazy(() => import("../pages/Profile"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/" element={<Layout />}>
          <Route path="main" element={<MainGuestPage />} />
          <Route path="specialities" element={<SpecialitiesPage />} />
          <Route
            path="specialities/:title"
            element={<SingleSpecialityPage />}
          />
          <Route path="glossary" element={<GlossaryPage />} />
          <Route path="progress" element={<ProgressPage />} />
          <Route
            path="profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
