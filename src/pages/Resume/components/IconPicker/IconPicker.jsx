import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Icon from "../Icon/Icon";
import BaseComponent from "../BaseComponent";

const Wrapper = styled.div`
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  gap: 1.1875rem;
  padding: 1rem 1.25rem;
  position: absolute;
  width: 20.9rem;
  height: 5.77rem;
  border-radius: 1.25rem;
  background: #f8f8f8;
  &:before {
    content: "";
    width: 1rem;
    height: 1rem;
    transform: rotate(45deg);
    left: 3.7rem;
    background: #f8f8f8;
    position: absolute;
    top: -0.2rem;
  }
`;

const IconPicker = ({ icons, onClickIcon }) => {
  return (
    <BaseComponent>
      <Wrapper>
        {icons?.map((icon) => (
          <Icon src={icon} onClick={() => onClickIcon(icon)} pointer />
        ))}
      </Wrapper>
    </BaseComponent>
  );
};

IconPicker.propTypes = {
  icons: PropTypes.array.isRequired,
  onClickIcon: PropTypes.func,
};

export default IconPicker;
