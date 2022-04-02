import React from "react";
import "./index.css";

const Overlay = ({ state, setState }) => {
  return (
    <div
      onClick={() => {
        setState(false);
      }}
      className={`overlay ${state ? "visible" : ""}`}
    ></div>
  );
};

export default Overlay;
