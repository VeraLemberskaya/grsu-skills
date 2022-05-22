import React from "react";

import { Wrapper, Textarea } from "../Styled";
import Icon from "../../Icon";
import { Edit } from "../../../../../assets/icons";

const ItemTextarea = ({ size, text, onChange }) => {
  const handleTextareaChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <Wrapper size={size}>
      <Icon
        style={{
          position: "absolute",
          top: "0.5rem",
          right: "1rem",
        }}
        size={size}
      >
        <Edit />
      </Icon>
      <Textarea
        size={size}
        value={text}
        id="textarea"
        onChange={handleTextareaChange}
        autoFocus
      />
    </Wrapper>
  );
};

export default ItemTextarea;
