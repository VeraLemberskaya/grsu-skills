import React from "react";
import styled from "styled-components";
import Icon from "../Icon";
import Border from "../Border";
import Row from "../Row";

const SectionTitle = styled.p`
  font-size: 2.25rem;
  font-family: "Alice", serif;
  color: #333;
`;

const Title = ({
  icon,
  children,
  className,
  isPrimary,
  isSecondary,
  underlined,
  ...attr
}) => {
  return (
    <div className={className}>
      <Row gap="1.5rem">
        <Icon isPrimary={isPrimary} isSecondary={isSecondary}>
          {icon}
        </Icon>
        <SectionTitle {...attr}>{children}</SectionTitle>
      </Row>
      {underlined && <Border width="85.5" isPrimary={isPrimary} />}
    </div>
  );
};

export default Title;
