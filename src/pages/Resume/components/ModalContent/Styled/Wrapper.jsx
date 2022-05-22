import styled from "styled-components";

const Wrapper = styled.div`
  min-height: ${(props) => (props.size == 2 ? "1.75" : "2.75")}rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 2;
  background: #f8f8f8;
  border-radius: 1.25rem;
  margin-bottom: ${(props) => (props.size == 2 ? "0.4" : "0.75")}rem;
`;

export default Wrapper;
