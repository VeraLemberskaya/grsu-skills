import React from "react";
import "./index.css";

const Overlay = ({ state, clickHadler }) => {
  return (
    <div
      onClick={clickHadler}
      className={`overlay ${state ? "visible" : ""}`}
    ></div>
  );
};

export default Overlay;
