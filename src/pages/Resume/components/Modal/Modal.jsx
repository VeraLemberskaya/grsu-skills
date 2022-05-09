import React from "react";
import styled from "styled-components";

import ModalContent from "../ModalContent";
import Title from "../Title";

const Wrapper = styled.div`
  width: 41.25rem;
  height: 29.5rem;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 1.25rem;
  z-index: 2;
  margin-left: 2rem;
  padding: 1.56rem;
`;

const Container = styled.div`
  margin: 0 1.5rem 0 1rem;
`;

const Modal = ({ icon, type, title, isPrimary }) => {
  return (
    <Wrapper className="resume-modal">
      <Title icon={icon} isPrimary={isPrimary} underlined>
        {title}
      </Title>
      <Container>
        <ModalContent items={[1, 2, 3]} />
      </Container>
    </Wrapper>
  );
};

export default Modal;
