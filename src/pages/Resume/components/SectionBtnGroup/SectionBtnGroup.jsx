import React from "react";
import Button from "../Button";
import Icon from "../Icon";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
  gap: 1.5rem;
`;

const SectionBtnGroup = ({ activeSection, onClick, sections }) => {
  return (
    <div className="section-btn-group">
      <List>
        {sections?.map((section) =>
          section === activeSection ? (
            <Button
              key={section.type}
              onClick={() => onClick(section)}
              isPrimary={section.isPrimary}
              isSecondary={section.isSecondary}
            >
              <Icon pointer>{section.icon}</Icon>
            </Button>
          ) : (
            <Button key={section.type} onClick={() => onClick(section)}>
              <Icon
                isPrimary={section.isPrimary}
                isSecondary={section.isSecondary}
                src={section.iconColor}
                pointer
              >
                {section.icon}
              </Icon>
            </Button>
          )
        )}
      </List>
    </div>
  );
};

export default SectionBtnGroup;
