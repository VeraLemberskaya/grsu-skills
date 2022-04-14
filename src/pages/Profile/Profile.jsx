import React, { useEffect } from "react";
import { FooterBottom } from "../../components/FooterBottom";
import { GrsuSkillsLogoDark } from "../../components/GrsuSkillsLogo";
import UserCard from "./components/UserCard/UserCard";
import UserCources from "./components/UserCources";
import "./index.css";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const animation = useLocation().state?.animation;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="profile-page" style={{ animationName: animation }}>
      <header>
        <GrsuSkillsLogoDark />
      </header>
      <main className="main-profile">
        <UserCources />
        <UserCard />
      </main>
      <footer>
        <FooterBottom />
      </footer>
    </div>
  );
};

export default Profile;
