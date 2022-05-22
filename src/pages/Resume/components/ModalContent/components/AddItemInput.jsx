import React from "react";

import { Wrapper, Input } from "../Styled";
import Row from "../../Row";
import Button from "../../Button";
import BaseComponent from "../../BaseComponent";
import Icon from "../../Icon";
import { Close } from "../../../../../assets/icons";

const AddItemInput = ({ size, onClose, onAddItem }) => {
  const input = React.useRef();

  const handleInputChange = (e) => {
    if (e.key === "Enter") {
      handleAddItem();
    }
  };

  const handleAddItem = () => {
    const text = input.current.value;
    if (text.trim().length > 0) {
      onAddItem(text);
      onClose();
    }
  };

  return (
    <Wrapper size={size}>
      <Row spaceBetween>
        <Row>
          <Button
            size={Number(size) + 1}
            type="check"
            onClick={handleAddItem}
          />
          <Input
            autoFocus
            ref={input}
            type="text"
            onKeyPress={handleInputChange}
          />
        </Row>
        <BaseComponent ml="1rem" pr="0.75rem">
          <Icon size={Number(size) + 1} onClick={onClose} pointer>
            <Close />
          </Icon>
        </BaseComponent>
      </Row>
    </Wrapper>
  );
};

export default AddItemInput;
