import React from "react";
import { FooterBottom } from "../../components/FooterBottom";
import { GrsuSkillsLogoDark } from "../../components/GrsuSkillsLogo";
import UserCard from "./components/UserCard/UserCard";
import "./index.css";

const Profile = () => {
  return (
    <div className="profile-page">
      <header>
        <GrsuSkillsLogoDark />
      </header>
      <main className="main-profile">
        <UserCard />
      </main>
      <footer>
        <FooterBottom />
      </footer>
    </div>
  );
};

export default Profile;
