import React from "react";
import styled from "styled-components";

const sizes = {
  2: "0.9",
  3: "0.5625",
};

const Icon = styled.img`
  cursor: ${(props) => (props.pointer ? "pointer" : "auto")};
  width: ${({ size }) => (size ? sizes[size] : "1.2")}rem;
  height: ${({ size }) => (size ? sizes[size] : "1.2")}rem;
  object-fit: contain;
  user-select: none;
`;

export default Icon;
