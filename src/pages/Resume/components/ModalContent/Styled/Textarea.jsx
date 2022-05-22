import styled from "styled-components";

const Textarea = styled.textarea`
  position: relative;
  background: transparent;
  resize: none;
  padding: ${(props) => (props.size == 2 ? "1" : "1.5")}rem;
  color: #333;
  font-size: ${(props) => (props.size == 2 ? "1" : "1.25")}rem;
  font-weight: 500;
  min-height: ${(props) => (props.size == 2 ? "4.7" : "20.5")}rem;
`;

export default Textarea;
