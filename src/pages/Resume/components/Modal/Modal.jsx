import React from "react";
import styled from "styled-components";

import ModalContent from "../ModalContent";
import Title from "../Title";
import {
  ContactsContent,
  GeneralInfoContent,
  HobbiesContent,
  WorkExperienceContent,
  AboutContent,
  CoursesContent,
  LangContent,
  SkillsContent,
} from "../ModalContent/ModalContent";
import FIELD_TYPES from "../../fieldTypes";

const MODAL_CONTENT = {
  [FIELD_TYPES.contacts]: <ContactsContent />,
  [FIELD_TYPES.location]: <GeneralInfoContent />,
  [FIELD_TYPES.hobby]: <HobbiesContent />,
  [FIELD_TYPES.workExperience]: <WorkExperienceContent />,
  [FIELD_TYPES.aboutMe]: <AboutContent />,
  [FIELD_TYPES.cources]: <CoursesContent />,
  [FIELD_TYPES.languages]: <LangContent />,
  [FIELD_TYPES.skills]: <SkillsContent />,
};

const Wrapper = styled.div`
  width: 41.25rem;
  height: 29.5rem;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 1.25rem;
  z-index: 2;
  margin-left: 2rem;
  padding: 1.56rem;
  position: relative;
`;

const Container = styled.div`
  margin: 1rem 1rem 2rem 1rem;
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
  overflow-x: hidden;
  overflow-y: scroll;
  max-height: 22.5rem;
`;

const Modal = ({ icon, type, title, isPrimary, isSecondary }) => {
  return (
    <Wrapper className="resume-modal">
      <Title
        icon={icon}
        isPrimary={isPrimary}
        isSecondary={isSecondary}
        underlined
      >
        {title}
      </Title>
      <Container>{MODAL_CONTENT[type]}</Container>
    </Wrapper>
  );
};

export default Modal;
