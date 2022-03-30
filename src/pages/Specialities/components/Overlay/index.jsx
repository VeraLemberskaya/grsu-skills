import React from "react";

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
