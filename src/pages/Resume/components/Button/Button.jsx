import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import BaseComponent from "../BaseComponent/BaseComponent";
import { Plus, Minus, Check } from "../../../../assets/icons";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: ${(props) => {
    let width = "2.75";
    if (props.size == 2) width = "1.75";
    else if (props.size == 3) width = "4";
    return width;
  }}rem;
  height: ${(props) => {
    let height = "2.75";
    if (props.size == 2) height = "1.75";
    else if (props.size == 3) height = "4";
    return height;
  }}rem;
  border-radius: ${(props) => (props.size == 3 ? "1.875" : "1.25")}rem;
  background: ${(props) => {
    let bg = props.bg ? "#3BC261" : "#fff";
    if (props.isPrimary) bg = "#F96326";
    else if (props.isSecondary) bg = "#3E97D5";
    return bg;
  }};
  ${(props) =>
    props.type === "add" &&
    `background-color: #3e97d5;background-image:url(${Plus});`}
  ${(props) =>
    props.type === "remove" &&
    `background-color: #FF0000;background-image:url(${Minus});`}
    ${(props) =>
    props.type === "check" &&
    `background-color: #3e97d5;background-image:url(${Check});`}
  background-size: ${(props) => (props.size == 2 ? "0.75" : "1")}rem;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
`;

Button.propTypes = {
  type: PropTypes.oneOf(["add", "remove", "check"]),
};

export default Button;
