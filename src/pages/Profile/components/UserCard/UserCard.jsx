import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { useAuth, useAuthActions } from "../../../../hooks/useAuth";
import LogOut from "../../../../assets/icons/LogOut.svg";

const UserCard = () => {
  const { user } = useAuth();
  const { removeToken } = useAuthActions();
  const navigate = useNavigate();

  const logOut = () => {
    removeToken();
    navigate("/");
  };

  return (
    <div className="user-card">
      <div className="main-info">
        <div className="user-name">
          <p className="name">{user.name}</p>
          <p className="surname">{user.surname}</p>
        </div>
        <img src={user.avatar} className="user-avatar" />
      </div>

      <button className="log-out-btn" onClick={logOut}>
        <img src={LogOut} />
      </button>
    </div>
  );
};

export default UserCard;
