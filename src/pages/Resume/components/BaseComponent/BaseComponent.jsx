import React from "react";
import styled from "styled-components";

const BaseComponent = styled.div`
  margin-bottom: ${(props) => (props.mb ? props.mb : "0")};
  margin-top: ${(props) => (props.mt ? props.mt : "0")};
  margin-left: ${(props) => (props.ml ? props.ml : "0")};
  margin-right: ${(props) => (props.mr ? props.mr : "0")};
  padding-bottom: ${(props) => (props.pb ? props.pb : "0")};
  padding-top: ${(props) => (props.pt ? props.pt : "0")};
  padding-left: ${(props) => (props.pl ? props.pl : "0")};
  padding-right: ${(props) => (props.pr ? props.pr : "0")};
`;

export default BaseComponent;
