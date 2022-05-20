import React from "react";
import styled from "styled-components";

import BaseComponent from "../BaseComponent/BaseComponent";

const Row = styled(BaseComponent)`
  width: 100%;
  display: flex;
  align-items: ${(props) => (props.alignTop ? "flex-start" : "center")};
  gap: ${(props) => (props.gap ? props.gap : 0)};
  ${(props) => props.center && `justify-content:center`};
  ${(props) => props.spaceBetween && `justify-content:space-between`};
`;

export default Row;
