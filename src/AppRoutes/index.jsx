import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import LoginPage from "../pages/Login";
import NavMenu from "../components/NavMenu";
import MainGuestPage from "../pages/GuestMain";
import SpecialitiesPage from "../pages/Specialities";
import SingleSpecialityPage from "../pages/SingleSpeciality";
import GlossaryPage from "../pages/Glossary";
import ProgressPage from "../pages/Progress";
import ProfilePage from "../pages/Profile";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/" element={<NavMenu />}>
        <Route path="main" element={<MainGuestPage />} />
        <Route path="specialities" element={<SpecialitiesPage />} />
        <Route path="specialities/:title" element={<SingleSpecialityPage />} />
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
  );
};

export default AppRoutes;
