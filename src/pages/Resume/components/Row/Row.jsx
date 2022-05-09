import React from "react";
import styled from "styled-components";

import BaseComponent from "../BaseComponent/BaseComponent";

const Row = styled(BaseComponent)`
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${(props) => (props.gap ? props.gap : 0)};
  ${(props) => props.spaceBetween && `justify-content:space-between`}
`;

export default Row;
