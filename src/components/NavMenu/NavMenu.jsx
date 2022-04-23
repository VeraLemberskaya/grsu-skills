import { useState } from "react";
import React from "react";
import "./index.css";
import Hamburger from "../../assets/icons/Hamburger.svg";
import Main from "../../assets/icons/Main.svg";
import Specialities from "../../assets/icons/Specialities.svg";
import Glossary from "../../assets/icons/Glossary.svg";
import Progress from "../../assets/icons/Progress.svg";
import University from "../../assets/icons/University.svg";
import ArrowUp from "../../assets/icons/ArrowUp.svg";
import Guest from "../../assets/icons/Guest.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { USER_ROLES } from "../../constants";
import { ANIMATION } from "../../constants/animation";
import { useAnim } from "../../hooks/useAnim";
import Overlay from "../Overlay";
import ROUTE_PATHS from "../../constants/routePaths";

const NavMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const { setAnimation } = useAnim();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = () => {
    closeMenu();
    setAnimation(ANIMATION.slideInDown);
  };

  return (
    <>
      <Overlay state={isMenuOpen} clickHadler={closeMenu} />
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
            onClick={closeMenu}
            className="hamburger"
            src={Hamburger}
            alt="Навигация"
          />
          <p>Навигация</p>
        </div>
        <nav className="menu-tabs">
          <Link to={ROUTE_PATHS.main} onClick={handleLinkClick}>
            <button className="nav-tab main">
              <img src={Main} />
              <p>Главная</p>
            </button>
          </Link>
          <Link ink to={ROUTE_PATHS.specialities} onClick={handleLinkClick}>
            <button className="nav-tab specialities">
              <img src={Specialities} />
              <p>Специальности</p>
            </button>
          </Link>
          <Link to={ROUTE_PATHS.glossary} onClick={handleLinkClick}>
            <button className="nav-tab glossary">
              <img src={Glossary} />
              <p>Глоссарий</p>
            </button>
          </Link>
          <Link to={ROUTE_PATHS.progress} onClick={handleLinkClick}>
            <button className="nav-tab progress">
              <img src={Progress} />
              <p>Прогресс</p>
            </button>
          </Link>
          <a href="https://www.grsu.by/" target="_blank" onClick={closeMenu}>
            <button className="nav-tab university">
              <img src={University} />
              <p>Университет</p>
            </button>
          </a>
        </nav>
        <div className="user">
          {user?.role === USER_ROLES.student ? (
            <>
              <p>
                <span>{user.surname}</span>&nbsp;{user.name}
              </p>
              <Link to={ROUTE_PATHS.profile} onClick={handleLinkClick}>
                <img className="user-icon" src={user.avatar} />
              </Link>
            </>
          ) : (
            <>
              <p>Гость</p>
              <Link to={ROUTE_PATHS.login}>
                <img className="user-icon" src={Guest} />
              </Link>
            </>
          )}
        </div>
      </div>
      <button
        className="btn-up"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <img src={ArrowUp} />
      </button>
    </>
  );
};

export default NavMenu;
