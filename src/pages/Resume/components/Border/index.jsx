import styled from "styled-components";

const Border = styled.div`
  width: ${(props) => (props.width ? props.width : "100")}%;
  height: 2px;
  border-radius: 1px;
  background: ${(props) => (props.isPrimary ? "#F96326;" : "#3E97D5;")};
  margin: 0 auto;
  margin-top: 1.3rem;
`;

export default Border;
