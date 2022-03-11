import { useState } from "react";
import React from "react";
import "./index.css";
import Hamburger from "../../assets/icons/Hamburger.svg";
import Main from "../../assets/icons/Main.svg";
import Specialities from "../../assets/icons/Specialities.svg";
import Glossary from "../../assets/icons/Glossary.svg";
import Progress from "../../assets/icons/Progress.svg";
import University from "../../assets/icons/University.svg";
import Guest from "../../assets/icons/Guest.svg";
import { Link, Outlet } from "react-router-dom";

const NavMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className={`overlay ${isMenuOpen ? "visible" : ""}`}></div>
      <button
        className="menu-btn"
        onClick={() => {
          setIsMenuOpen(true);
        }}
      >
        <img className="hamburger" src={Hamburger} alt="Навигация" />
      </button>
      <div className={`menu ${isMenuOpen ? "opened" : ""}`}>
        <div className="hamburger-navigation">
          <img
            onClick={() => {
              setIsMenuOpen(false);
            }}
            className="hamburger"
            src={Hamburger}
            alt="Навигация"
          />
          <p>Навигация</p>
        </div>
        <div className="menu-tabs">
          <Link to="/main">
            <button className="nav-tab main">
              <img src={Main} />
              <p>Главная</p>
            </button>
          </Link>
          <Link to="/main">
            <button className="nav-tab specialities">
              <img src={Specialities} />
              <p>Специальности</p>
            </button>
          </Link>
          <Link to="/main">
            <button className="nav-tab glossary">
              <img src={Glossary} />
              <p>Глоссарий</p>
            </button>
          </Link>
          <Link to="/main">
            <button className="nav-tab progress">
              <img src={Progress} />
              <p>Прогресс</p>
            </button>
          </Link>
          <a href="https://www.grsu.by/" target="_blank">
            <button className="nav-tab university">
              <img src={University} />
              <p>Университет</p>
            </button>
          </a>
        </div>
        <div className="guest">
          <p>Гость</p>
          <Link to="/">
            <img className="guest-icon" src={Guest} />
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavMenu;
