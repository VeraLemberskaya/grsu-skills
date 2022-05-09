import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import BaseComponent from "../BaseComponent/BaseComponent";
import { Plus, Minus, Check } from "../../../../assets/icons";

const Button = styled(BaseComponent)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 1.25rem;
  background: #fff;
  ${(props) =>
    props.type === "add" &&
    `background-color: #3e97d5;background-image:url(${Plus});`}
  ${(props) =>
    props.type === "remove" &&
    `background-color: #FF0000;background-image:url(${Minus});`}
    ${(props) =>
    props.type === "check" &&
    `background-color: #3e97d5;background-image:url(${Check});`}
  background-size: 1rem;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
`;

Button.propTypes = {
  type: PropTypes.oneOf(["add", "remove", "check"]),
};

export default Button;