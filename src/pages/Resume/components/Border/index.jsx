import styled from "styled-components";

const COLORS = {
  isPrimary: "#F96326",
  isSecondary: "#3E97D5",
  default: "#C7C7C7",
};

const Border = styled.div`
  width: ${(props) => (props.width ? props.width : "100")}%;
  height: 2px;
  border-radius: 1px;
  background: ${(props) => {
    let bg = COLORS.default;
    if (props.isPrimary) bg = COLORS.isPrimary;
    else if (props.isSecondary) bg = COLORS.isSecondary;
    return bg;
  }};
  margin: 0 auto;
  margin-top: ${(props) => (props.mt ? props.mt : 1.3)}rem;
`;

export default Border;
