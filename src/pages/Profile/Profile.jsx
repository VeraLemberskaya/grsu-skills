import React, { useEffect } from "react";
import { FooterBottom } from "../../components/FooterBottom";
import { GrsuSkillsLogoDark } from "../../components/GrsuSkillsLogo";
import UserCard from "./components/UserCard/UserCard";
import CoursesList from "./components/CoursesList";
import "./index.css";
import Page from "../../components/UI/Page";
import SubjectCard from "./components/SubjectCard/SubjectCard";

const Profile = () => {
  return (
    <Page>
      <div className="profile-page">
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
    </Page>
  );
};

export default Profile;
