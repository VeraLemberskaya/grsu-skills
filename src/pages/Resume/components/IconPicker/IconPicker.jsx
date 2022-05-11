import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Icon from "../Icon/Icon";
import BaseComponent from "../BaseComponent";

const Picker = styled.div`
  z-index: 3;
  display: flex;
  flex-wrap: wrap;
  gap: 1.1875rem;
  padding: 1rem 1.25rem;
  position: absolute;
  max-width: 20.9rem;
  border-radius: 1.25rem;
  background: #f8f8f8;
  top: ${(props) => props.top}rem;
  left: ${(props) => props.left}rem;
  bottom: ${(props) => props.bottom}rem;
  right: ${(props) => props.right}rem;
  &:before {
    content: "";
    width: 1rem;
    height: 1rem;
    transform: rotate(45deg);
    ${(props) => (props.arrowRight ? "right:3.7" : "left:3.7")}rem;
    background: #f8f8f8;
    position: absolute;
    top: -0.2rem;
  }
`;

export default Picker;

// export const Picker = ({ items, onClick }) => {
//   return <Wrapper>{items?.map((item) => item)}</Wrapper>;
// };

// const IconPicker = ({ icons, onClickIcon }) => {
//   return (
//     <Wrapper>
//       {icons?.map((icon) => (
//         <Icon src={icon} onClick={() => onClickIcon(icon)} pointer />
//       ))}
//     </Wrapper>
//   );
// };

// IconPicker.propTypes = {
//   icons: PropTypes.array.isRequired,
//   onClickIcon: PropTypes.func,
// };

// export default IconPicker;
