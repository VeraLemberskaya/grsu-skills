import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import LogOut from "../../../../assets/icons/LogOut.svg";
import { useSelector } from "react-redux";
import { logOut } from "../../../../services/authService";
import ResumeImg from "../../../../assets/icons/Resume.svg";
import { getUserInfo } from "../../../../api/ApiRequests";
import ROUTE_PATHS from "../../../../constants/routePaths";

const UserCard = () => {
  const [userInfo, setUserInfo] = useState(null);
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  useEffect(async () => {
    const result = await getUserInfo();
    setUserInfo(result);
  }, []);

  return userInfo ? (
    <div className="card-wrapper">
      <div className="user-card">
        <div className="main-info">
          <div className="user-name">
            <p className="name">{user.name}</p>
            <p className="surname">{user.surname}</p>
          </div>
          <img src={user.avatar} className="user-avatar" />
        </div>
        <div className="additional-info">
          <p className="spec-name">{`${userInfo.speciality.name}`}</p>
          <p className="group">{`Группа ${userInfo.group}`}</p>
          <p className="course">{`Курс ${userInfo.course}`}</p>
          <p className="form">{`Форма обучения ${userInfo.form}`}</p>
        </div>

        <button
          className="log-out-btn"
          onClick={() => {
            logOut();
            navigate(ROUTE_PATHS.login);
          }}
        >
          <img src={LogOut} />
        </button>
      </div>
      <div className="resume">
        Моё&nbsp;резюме
        <img src={ResumeImg} />
      </div>
    </div>
  ) : (
    <React.Fragment />
  );
};

export default UserCard;
