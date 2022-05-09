import React from "react";
import Button from "../Button";
import Icon from "../Icon";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
  gap: 1.5rem;
`;

const SectionBtnGroup = ({ onClick, sections }) => {
  return (
    <div className="section-btn-group">
      <List>
        {sections?.map((section) => (
          <Button key={section.type} onClick={() => onClick(section)}>
            <Icon src={section.icon} />
          </Button>
        ))}
      </List>
    </div>
  );
};

export default SectionBtnGroup;
