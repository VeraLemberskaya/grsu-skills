import React from "react";
import styled from "styled-components";

const sizes = {
  1: "2.05",
  2: "0.9",
  3: "0.5625",
};

const colors = {
  base: "#fff",
  primary: "#F96326",
  secondary: "#3E97D5",
};

const Icon = styled.span`
  cursor: ${(props) => (props.pointer ? "pointer" : "auto")};
  user-select: none;
  svg {
    ${({ size }) =>
      size && `width:${sizes[size]}rem; height:${sizes[size]}rem;`}
    path {
      ${(props) => {
        if (props.isPrimary || props.isSecondary) {
          return `fill: ${props.isPrimary ? colors.primary : colors.secondary}`;
        }
      }}
    }
  }
`;

export default Icon;
