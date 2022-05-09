import React from "react";
import styled from "styled-components";

const Icon = styled.img`
  cursor: ${(props) => (props.pointer ? "pointer" : "auto")};
  width: ${(props) => (props.size == "2" ? "0.75rem" : "1.2rem")};
  height: ${(props) => (props.size == "2" ? "0.75rem" : "1.2rem")};
  object-fit: contain;
`;

export default Icon;
