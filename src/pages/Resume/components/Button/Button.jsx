import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import BaseComponent from "../BaseComponent/BaseComponent";
import Icon from "../Icon";
import { Plus, Minus, Check } from "../../../../assets/icons";

const BUTTON_TYPES = {
  add: {
    icon: <Plus />,
    background: "#3E97D5",
  },
  remove: {
    icon: <Minus />,
    background: "#FF0000",
  },
  check: {
    icon: <Check />,
    background: "#3E97D5",
  },
};

const BUTTON_BG = {
  default: "#fff",
  green: "#3BC261",
  primary: "#F96326",
  secondary: "#3E97D5",
};

const BUTTON_SIZE = {
  1: "4",
  2: "2.75",
  3: "1.75",
};

const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: ${({ size }) => (size ? BUTTON_SIZE[size] : BUTTON_SIZE[2])}rem;
  height: ${({ size }) => (size ? BUTTON_SIZE[size] : BUTTON_SIZE[2])}rem;
  border-radius: ${(props) => (props.size === "1" ? "1.875" : "1.25")}rem;
  background: ${(props) => {
    if (props.type) return BUTTON_TYPES[props.type].background;
    else if (props.isPrimary) return BUTTON_BG.primary;
    else if (props.isSecondary) return BUTTON_BG.secondary;
    else if (props.bg) return BUTTON_BG[props.bg];
    return BUTTON_BG.default;
  }};
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  transition: background-color 0.2s ease-in;
`;

const Button = (props) => {
  return (
    <ButtonWrapper {...props}>
      {props.type ? (
        <Icon size={props.size ? Number(props.size) - 1 : null} pointer>
          {BUTTON_TYPES[props.type].icon}
        </Icon>
      ) : (
        props.children
      )}
    </ButtonWrapper>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["add", "remove", "check"]),
  isPrimary: PropTypes.bool,
  isSecondary: PropTypes.bool,
};

export default Button;
