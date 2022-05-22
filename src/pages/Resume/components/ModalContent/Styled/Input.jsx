import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  z-index: 2;
  background: transparent;
  margin-left: 1rem;
  color: #333;
  font-size: ${(props) => (props.size == 2 ? "1" : "1.25")}rem;
  font-weight: 500;
`;

export default Input;
