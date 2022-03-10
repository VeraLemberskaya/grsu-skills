import React from "react";

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
      <p>{props.text}</p>
    </div>
  );
};

export default MainSectionCard;
