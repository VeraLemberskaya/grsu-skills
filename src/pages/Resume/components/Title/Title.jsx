import React from "react";
import styled from "styled-components";

import Icon from "../Icon";
import Row from "../Row";

const SectionTitle = styled.p`
  font-size: 2.25rem;
  font-family: "Alice", serif;
  color: #333;
`;

const Border = styled.div`
  width: 33.125rem;
  height: 2px;
  border-radius: 1px;
  background: ${(props) => (props.isPrimary ? "#F96326;" : "#3E97D5;")};
  margin: 0 auto;
  margin-top: 1.3rem;
`;

const Title = ({
  icon,
  children,
  className,
  isPrimary,
  underlined,
  ...attr
}) => {
  return (
    <div className={className}>
      <Row gap="1.5rem">
        <Icon src={icon} />
        <SectionTitle {...attr}>{children}</SectionTitle>
      </Row>
      {underlined && <Border isPrimary={isPrimary} />}
    </div>
  );
};

export default Title;
