import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import LogOut from "../../../../assets/icons/LogOut.svg";
import { useStore } from "react-redux";
import { logOut } from "../../../../services/authService";

const UserCard = () => {
  const user = useStore().getState().auth.user;
  const navigate = useNavigate();

  return (
    <div className="user-card">
      <div className="main-info">
        <div className="user-name">
          <p className="name">{user.name}</p>
          <p className="surname">{user.surname}</p>
        </div>
        <img src={user.avatar} className="user-avatar" />
      </div>

      <button
        className="log-out-btn"
        onClick={() => {
          logOut();
          navigate("/");
        }}
      >
        <img src={LogOut} />
      </button>
    </div>
  );
};

export default UserCard;
