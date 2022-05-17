import React from "react";
import styled from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Title from "../Title";
import Icon from "../Icon";
import FIELD_TYPES from "../../fieldTypes";
import BaseComponent from "../BaseComponent";
import { useSelector } from "react-redux";
import Row from "../Row";

const SECTION_TYPES = {
  [FIELD_TYPES.contacts]: <ContactsSection />,
};

const Text = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
`;

function ContactsSection() {
  const contacts = useSelector((state) => state.cv.contacts);
  return (
    <TransitionGroup>
      {contacts?.map((contact) => (
        <CSSTransition key={contact.id} timeout={400} classNames="item">
          <BaseComponent mt="1rem" key={contact.id}>
            <Row gap="0.875rem">
              <Icon>{contact.icon}</Icon>
              <Text>{contact.text}</Text>
            </Row>
          </BaseComponent>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

const CVSection = ({ type, title, icon, isPrimary, isSecondary }) => {
  return (
    <div>
      <Title icon={icon} isPrimary={isPrimary} isSecondary={isSecondary}>
        {title}
      </Title>
      <BaseComponent ml="2rem" mt="1.5rem">
        {SECTION_TYPES[type]}
      </BaseComponent>
    </div>
  );
};

export default CVSection;
