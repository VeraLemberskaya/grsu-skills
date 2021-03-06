import React from "react";
import "./index.css";

const MainSectionCard = (props) => {
  return (
    <div
      style={{
        borderRadius: props.radius,
        height: props.height,
        paddingTop: props.paddingTop,
      }}
      className="section-card"
    >
      <h4>{props.title}</h4>
      <p style={{ fontWeight: props.fontWeight }}>{props.text}</p>
    </div>
  );
};

export default MainSectionCard;
