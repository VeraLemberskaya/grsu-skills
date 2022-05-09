import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import IconPicker from "../IconPicker";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import Row from "../Row";
import Icon from "../Icon";
import Button from "../Button";
import BaseComponent from "../BaseComponent";
import Overlay from "../../../../components/Overlay";
import "./index.css";
import {
  Edit,
  Close,
  ChooseIcon,
  Chat,
  Call,
  Message,
  Mail,
  Adress,
  Messenger,
  Facebook,
  Skype,
  Instagram,
  Youtube,
  Vk,
  Telegram,
  Twitter,
  Whatsapp,
  Dribble,
  Snapchat,
} from "../../../../assets/icons";
import FIELD_TYPES from "../../fieldTypes";

const MODAL_CONTENT = {
  [FIELD_TYPES.contacts]: <contactsContent />,
};

const Wrapper = styled.div`
  position: relative;
  z-index: 3;
  background: #f8f8f8;
  border-radius: 1.25rem;
  padding-right: 0.75rem;
  margin: 0.75rem 0;
  input {
    width: 100%;
    z-index: 2;
    background: transparent;
    margin-left: 1rem;
    color: #333;
    font-size: 1.25rem;
    font-weight: 500;
  }
`;

const EditItemInput = ({ icon, id, text, onRemove }) => {
  const [inputValue, setInputValue] = React.useState(text);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Wrapper>
      <Row spaceBetween>
        <Row>
          <BaseComponent mr="1rem">
            <Button type="remove" onClick={() => onRemove(id)} />
          </BaseComponent>
          {icon && <Icon src={icon} />}
          <input type="text" value={inputValue} onChange={handleInputChange} />
        </Row>
        <BaseComponent ml="1rem">
          <Icon src={Edit} />
        </BaseComponent>
      </Row>
    </Wrapper>
  );
};

const AddContactInput = ({ icons, onClose, onAddItem }) => {
  const [icon, setIcon] = React.useState(null);
  const [iconsOpened, setIconsOpened] = React.useState(false);
  const input = React.useRef();

  React.useEffect(() => {
    input.current.focus();
  }, []);

  const handleInputChange = (e) => {
    if (e.key === "Enter") {
      handleAddItem();
    }
  };

  const handleAddItem = () => {
    const text = input.current.value;
    if (text.length > 0 && icon) {
      onAddItem({ id: uuidv4(), icon, text });
      onClose();
    }
  };

  return (
    <>
      <Wrapper className="add-contact-input">
        <Row spaceBetween>
          <Row>
            <BaseComponent mr="1rem">
              <Button type="check" onClick={handleAddItem} />
            </BaseComponent>
            <Icon
              src={icon ? icon : ChooseIcon}
              onClick={() => setIconsOpened(true)}
              pointer
            />
            <input ref={input} type="text" onKeyPress={handleInputChange} />
          </Row>
          <BaseComponent ml="1rem">
            <Icon size="2" src={Close} onClick={onClose} pointer />
          </BaseComponent>
        </Row>
      </Wrapper>
      {iconsOpened && (
        <BaseComponent mt="1rem" className="picker">
          <IconPicker
            icons={icons}
            onClickIcon={(icon) => {
              setIcon(icon);
              setIconsOpened(false);
              input.current.focus();
            }}
          />
        </BaseComponent>
      )}
    </>
  );
};

const ContactsContent = () => {
  const [items, setItems] = React.useState([]);
  const [inputOpened, setInputOpened] = React.useState(false);

  const icons = [
    Chat,
    Call,
    Message,
    Mail,
    Adress,
    Messenger,
    Facebook,
    Skype,
    Instagram,
    Youtube,
    Vk,
    Telegram,
    Twitter,
    Whatsapp,
    Dribble,
    Snapchat,
  ];

  return (
    <div style={{ position: "relative" }}>
      <div style={{ overflow: "auto", maxHeight: "20rem" }}>
        <BaseComponent ml="0.5rem">
          {items.map((item) => (
            <EditItemInput
              id={item.id}
              icon={item.icon}
              text={item.text}
              onRemove={(id) => {
                setItems(items.filter((item) => item.id != id));
              }}
            />
          ))}
          <CSSTransition
            in={inputOpened}
            timeout={500}
            classNames="fade"
            unmountOnExit
          >
            <AddContactInput
              icons={icons}
              onClose={() => setInputOpened(false)}
              onAddItem={(item) => {
                items.push(item);
                setItems(items.slice());
              }}
            />
          </CSSTransition>
          {inputOpened ? (
            <>
              <Overlay
                state={inputOpened}
                clickHadler={() => {
                  setInputOpened(false);
                }}
              />
              {/* <AddContactInput
                icons={icons}
                onClose={() => setInputOpened(false)}
                onAddItem={(item) => {
                  items.push(item);
                  setItems(items.slice());
                }}
              /> */}
            </>
          ) : (
            <BaseComponent mb="1rem" mt="0.75rem">
              <Button type="add" onClick={() => setInputOpened(true)} />
            </BaseComponent>
          )}
        </BaseComponent>
      </div>
    </div>
  );
};

const ModalContent = ({ type, items }) => {
  return (
    <>
      <ContactsContent />
    </>
  );
};

export default ModalContent;
