import React from "react";

import { Wrapper, Input, Text } from "../Styled";
import BaseComponent from "../../BaseComponent";
import Row from "../../Row";
import Icon from "../../Icon";
import Button from "../../Button";
import { Edit } from "../../../../../assets/icons";

const ItemInput = ({
  size,
  item,
  onRemove,
  onChange,
  removeable,
  editable,
  maxLength,
  children,
}) => {
  const { id, text } = item;
  const [inputValue, setInputValue] = React.useState(text);

  const handleInputChange = (e) => {
    onChange(e.target.value);
    setInputValue(e.target.value);
  };

  return (
    <Wrapper size={size}>
      <Row spaceBetween>
        <Row>
          {removeable && (
            <Button
              size={Number(size) + 1}
              type="remove"
              onClick={() => onRemove(id)}
            />
          )}
          {children && <BaseComponent ml="1rem">{children}</BaseComponent>}
          {!editable ? (
            <Text size={size}>{inputValue}</Text>
          ) : (
            <Input
              size={size}
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              maxLength={maxLength ? maxLength : "50"}
            />
          )}
        </Row>
        {editable && (
          <BaseComponent ml="1rem" pr="0.75rem">
            <Icon size={size}>
              <Edit />
            </Icon>
          </BaseComponent>
        )}
      </Row>
    </Wrapper>
  );
};

export default ItemInput;
