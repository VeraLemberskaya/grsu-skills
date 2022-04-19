import React, { useEffect } from "react";
import { FooterBottom } from "../../components/FooterBottom";
import { GrsuSkillsLogoDark } from "../../components/GrsuSkillsLogo";
import UserCard from "./components/UserCard/UserCard";
import CoursesList from "./components/CoursesList";
import "./index.css";
import { useLocation } from "react-router-dom";
import SubjectCard from "./components/SubjectCard/SubjectCard";

const Profile = () => {
  const animation = useLocation().state?.animation;

  return (
    <div className="profile-page" style={{ animationName: animation }}>
      <header>
        <GrsuSkillsLogoDark />
      </header>
      <main className="main-profile">
        <CoursesList />
        <SubjectCard />
        <UserCard />
      </main>
      <footer>
        <FooterBottom />
      </footer>
    </div>
  );
};

export default Profile;
