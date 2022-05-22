import styled from "styled-components";

const Text = styled.p`
  width: 13.75rem;
  padding: 0.2rem 0;
  margin-left: 1rem;
  z-index: 2;
  color: #333;
  font-size: ${(props) => (props.size == 2 ? "1" : "1.25")}rem;
  font-weight: ${(props) => (props.weight ? props.weight : "500")};
`;

export default Text;
