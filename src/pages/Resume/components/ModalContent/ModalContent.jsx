import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import IconPicker from "../IconPicker";
import Picker from "../IconPicker/IconPicker";
import {
  CSSTransition,
  SwitchTransition,
  TransitionGroup,
} from "react-transition-group";

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

const Wrapper = styled.div`
  min-height: ${(props) => (props.size == 2 ? "1.75" : "2.75")}rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 3;
  background: #f8f8f8;
  border-radius: 1.25rem;
  margin: ${(props) => (props.size == 2 ? "0.4" : "0.75")}rem 0;
  input {
    width: 100%;
    z-index: 2;
    background: transparent;
    margin-left: 1rem;
    color: #333;
    font-size: ${(props) => (props.size == 2 ? "1" : "1.25")}rem;
    font-weight: 500;
  }
`;

const Textarea = styled.textarea`
  position: relative;
  background: transparent;
  resize: none;
  padding: ${(props) => (props.size == 2 ? "1" : "1.5")}rem;
  color: #333;
  font-size: ${(props) => (props.size == 2 ? "1" : "1.25")}rem;
  font-weight: 500;
  min-height: ${(props) => (props.size == 2 ? "4.7" : "20.5")}rem;
  &::after {
    content: "";
    width: 1.25rem;
    height: 1.25rem;
    position: absolute;
    background-image: url(${Edit});
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const Label = styled.label`
  position: absolute;
  top: 0.5rem;
  right: ${(props) => (props.size == 2 ? "-22" : "-20")}%;
`;

const EditItemTextarea = ({ size, text }) => {
  const [value, setValue] = React.useState(text);

  return (
    <Wrapper size={size}>
      <Label size={size} htmlFor="textarea">
        <Icon size={size} src={Edit} />
      </Label>
      <Textarea size={size} value={value} id="textarea" autoFocus />
    </Wrapper>
  );
};

const EditItemInput = ({ size, icon, id, text, onRemove, removeable }) => {
  const [inputValue, setInputValue] = React.useState(text);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Wrapper size={size}>
      <Row spaceBetween>
        <Row>
          {removeable && (
            <Button size={size} type="remove" onClick={() => onRemove(id)} />
          )}
          {icon && (
            <BaseComponent ml="1rem">
              <Icon size={size} src={icon} />
            </BaseComponent>
          )}
          <input type="text" value={inputValue} onChange={handleInputChange} />
        </Row>
        <BaseComponent ml="1rem" pr="0.75rem">
          <Icon size={size} src={Edit} />
        </BaseComponent>
      </Row>
    </Wrapper>
  );
};

const AddItemInput = ({ size, onClose, onAddItem }) => {
  const input = React.useRef();

  const handleInputChange = (e) => {
    if (e.key === "Enter") {
      handleAddItem();
    }
  };

  const handleAddItem = () => {
    const text = input.current.value;
    if (text.trim().length > 0) {
      onAddItem({ id: uuidv4(), text });
      onClose();
    }
  };

  return (
    <Wrapper size={size} className="add-item-input">
      <Row spaceBetween>
        <Row>
          <Button size={size} type="check" onClick={handleAddItem} />
          <input
            autoFocus
            ref={input}
            type="text"
            onKeyPress={handleInputChange}
          />
        </Row>
        <BaseComponent ml="1rem" pr="0.75rem">
          <Icon
            size={size == 2 ? "3" : "2"}
            src={Close}
            onClick={onClose}
            pointer
          />
        </BaseComponent>
      </Row>
    </Wrapper>
  );
};

const LanguageStyledComponent = styled.div`
  p {
    font-weight: 500;
  }
  button {
    width: 5rem;
    height: 1.75rem;
    background: ${(props) => (props.isPrimary ? "#f96326" : "#3E97D5")};
    border-radius: 1.25rem;
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
    color: #fff;
    cursor: pointer;
  }
`;

const LanguageComponent = ({ type, level, onButtonClick, isPrimary }) => {
  return (
    <LanguageStyledComponent isPrimary={isPrimary}>
      <Row gap="0.68rem">
        <p>{type}</p>
        <button onClick={onButtonClick}>{level}</button>
      </Row>
    </LanguageStyledComponent>
  );
};

const AddLanguageInput = ({ onClose, onAddItem }) => {
  const [levelSpeech, setLevelSpeech] = React.useState("!");
  const [levelWritten, setLevelWritter] = React.useState("!");
  const [inputLeftOpened, setInputLeftOpened] = React.useState(false);
  const [inputRightOpened, setInputRightOpened] = React.useState(false);

  const langLevels = ["A1", "A2", "B1", "B2", "C1", "C2"];

  const input = React.useRef();

  const handleInputChange = (e) => {
    if (e.key === "Enter") {
      handleAddItem();
    }
  };

  const handleAddItem = () => {
    const text = input.current.value;
    if (text.trim().length > 0 && levelSpeech != "!" && levelWritten != "!") {
      onAddItem({ id: uuidv4(), text, levelSpeech, levelWritten });
      onClose();
    }
  };

  return (
    <Wrapper className="add-item-input">
      <Row spaceBetween>
        <Row>
          <Button type="check" onClick={handleAddItem} />
          <input
            ref={input}
            autoFocus
            type="text"
            onKeyPress={handleInputChange}
          />
        </Row>
        <BaseComponent ml="1rem" pr="0.75rem">
          <Icon size="2" src={Close} onClick={onClose} pointer />
        </BaseComponent>
      </Row>
      <BaseComponent mb="1rem" ml="-1rem">
        <Row gap="3.25rem" center>
          <LanguageComponent
            type="Разговорный"
            level={levelSpeech}
            onButtonClick={() => {
              setInputRightOpened(false);
              setInputLeftOpened(true);
            }}
            isPrimary
          />
          <LanguageComponent
            type="Письменный"
            level={levelWritten}
            onButtonClick={() => {
              setInputLeftOpened(false);
              setInputRightOpened(true);
            }}
            isPrimary
          />
        </Row>
      </BaseComponent>
      {inputLeftOpened && (
        <Picker top="6.5" left="9">
          {langLevels.map((level) => (
            <p
              onClick={() => {
                setLevelSpeech(level);
                setInputLeftOpened(false);
                input.current.focus();
              }}
              style={{
                fontSize: "1.25rem",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              {level}
            </p>
          ))}
        </Picker>
      )}
      {inputRightOpened && (
        <Picker top="6.5" right="2" arrowRight>
          {langLevels.map((level) => (
            <p
              onClick={() => {
                setLevelWritter(level);
                setInputRightOpened(false);
                input.current.focus();
              }}
              style={{
                fontSize: "1.25rem",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              {level}
            </p>
          ))}
        </Picker>
      )}
    </Wrapper>
  );
};

const AddContactInput = ({ icons, onClose, onAddItem }) => {
  const [icon, setIcon] = React.useState(null);
  const [iconsOpened, setIconsOpened] = React.useState(false);
  const input = React.useRef();

  const handleInputChange = (e) => {
    if (e.key === "Enter") {
      handleAddItem();
    }
  };

  const handleAddItem = () => {
    const text = input.current.value;
    if (text.trim().length > 0 && icon) {
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
            <input
              autoFocus
              ref={input}
              type="text"
              onKeyPress={handleInputChange}
            />
          </Row>
          <BaseComponent ml="1rem" pr="0.75rem">
            <Icon size="2" src={Close} onClick={onClose} pointer />
          </BaseComponent>
        </Row>
      </Wrapper>
      {iconsOpened && (
        <BaseComponent mt="1rem" className="picker">
          <Picker>
            {icons.map((icon) => (
              <Icon
                src={icon}
                onClick={() => {
                  setIcon(icon);
                  setIconsOpened(false);
                  input.current.focus();
                }}
                pointer
              />
            ))}
          </Picker>
        </BaseComponent>
      )}
    </>
  );
};

const List = ({ size }) => {
  const [items, setItems] = React.useState([]);
  const [inputOpened, setInputOpened] = React.useState(false);

  return (
    <div style={{ position: "relative" }}>
      <div style={{ overflow: "auto", maxHeight: "20rem" }}>
        <TransitionGroup>
          {items.map((item) => (
            <CSSTransition key={item.id} timeout={400} classNames="item">
              <EditItemInput
                size={size}
                {...item}
                onRemove={(id) => {
                  setItems(items.filter((item) => item.id != id));
                }}
                removeable
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={inputOpened}
            timeout={200}
            classNames="accordion"
            unmountOnExit
          >
            {inputOpened ? (
              <AddItemInput
                size={size}
                onClose={() => setInputOpened(false)}
                onAddItem={(item) => {
                  items.push(item);
                  setItems(items.slice());
                }}
              />
            ) : (
              <BaseComponent
                mb={size == 2 ? "0.4rem" : "1rem"}
                mt={size == 2 ? "0.4rem" : "0.75rem"}
              >
                <Button
                  size={size}
                  type="add"
                  onClick={() => setInputOpened(true)}
                />
              </BaseComponent>
            )}
          </CSSTransition>
        </SwitchTransition>
        {inputOpened && (
          <Overlay
            state={inputOpened}
            clickHadler={() => {
              setInputOpened(false);
            }}
          />
        )}
      </div>
    </div>
  );
};

const langLevels = ["A1", "A2", "B1", "B2", "C1", "C2"];

const Lang = styled.div`
  p {
    font-weight: 500;
  }
  button {
    width: 5rem;
    height: 1.75rem;
    background: #3e97d5;
    border-radius: 1.25rem;
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
    color: #fff;
  }
`;

export const LangContent = () => {
  const [items, setItems] = React.useState([]);
  const [inputOpened, setInputOpened] = React.useState(false);
  const [levelSpeech, setLevelSpeech] = React.useState(langLevels[0]);
  const [levelWritten, setLevelWritten] = React.useState(langLevels[0]);

  return (
    <>
      <TransitionGroup>
        {items.map((item) => (
          <CSSTransition key={item.id} timeout={400} classNames="item">
            <>
              <EditItemInput
                {...item}
                onRemove={(id) => {
                  setItems(items.filter((item) => item.id != id));
                }}
                removeable
              />
              <BaseComponent ml="3rem">
                <Row spaceBetween>
                  <LanguageComponent
                    type="Разговорный"
                    level={item.levelSpeech}
                  />
                  <LanguageComponent
                    type="Письменный"
                    level={item.levelWritten}
                  />
                  <BaseComponent ml="1rem" pr="0.75rem">
                    <Icon size="2" src={Edit} />
                  </BaseComponent>
                </Row>
              </BaseComponent>
            </>
          </CSSTransition>
        ))}
      </TransitionGroup>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={inputOpened}
          timeout={200}
          classNames="accordion"
          unmountOnExit
        >
          {inputOpened ? (
            <AddLanguageInput
              onClose={() => setInputOpened(false)}
              onAddItem={(item) => {
                items.push(item);
                setItems(items.slice());
              }}
            />
          ) : (
            <BaseComponent mb="1rem" mt="0.75rem">
              <Button type="add" onClick={() => setInputOpened(true)} />
            </BaseComponent>
          )}
        </CSSTransition>
      </SwitchTransition>
      {inputOpened && (
        <Overlay
          state={inputOpened}
          clickHadler={() => {
            setInputOpened(false);
          }}
        />
      )}
    </>
  );
};

export const HobbiesContent = () => {
  return <List />;
};

export const WorkExperienceContent = () => {
  const [items, setItems] = React.useState([]);
  const [inputOpened, setInputOpened] = React.useState(false);
  return (
    <>
      <TransitionGroup>
        {items.map((item) => (
          <CSSTransition key={item.id} timeout={400} classNames="item">
            <>
              <EditItemInput
                {...item}
                onRemove={(id) => {
                  setItems(items.filter((item) => item.id != id));
                }}
                removeable
              />
              <BaseComponent ml="0.75rem">
                <List size="2" />
              </BaseComponent>
            </>
          </CSSTransition>
        ))}
      </TransitionGroup>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={inputOpened}
          timeout={200}
          classNames="accordion"
          unmountOnExit
        >
          {inputOpened ? (
            <AddItemInput
              onClose={() => setInputOpened(false)}
              onAddItem={(item) => {
                items.push(item);
                setItems(items.slice());
              }}
            />
          ) : (
            <BaseComponent mb="1rem" mt="0.75rem">
              <Button type="add" onClick={() => setInputOpened(true)} />
            </BaseComponent>
          )}
        </CSSTransition>
      </SwitchTransition>
      {inputOpened && (
        <Overlay
          state={inputOpened}
          clickHadler={() => {
            setInputOpened(false);
          }}
        />
      )}
    </>
  );
};

export const CoursesContent = () => {
  const [items, setItems] = React.useState([]);
  const [inputOpened, setInputOpened] = React.useState(false);

  return (
    <>
      <TransitionGroup>
        {items.map((item) => (
          <CSSTransition key={item.id} timeout={400} classNames="item">
            <>
              <EditItemInput
                {...item}
                onRemove={(id) => {
                  setItems(items.filter((item) => item.id != id));
                }}
                removeable
              />
              <BaseComponent ml="0.75rem">
                <EditItemTextarea size="2" />
              </BaseComponent>
            </>
          </CSSTransition>
        ))}
      </TransitionGroup>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={inputOpened}
          timeout={200}
          classNames="accordion"
          unmountOnExit
        >
          {inputOpened ? (
            <AddItemInput
              onClose={() => setInputOpened(false)}
              onAddItem={(item) => {
                items.push(item);
                setItems(items.slice());
              }}
            />
          ) : (
            <BaseComponent mb="1rem" mt="0.75rem">
              <Button type="add" onClick={() => setInputOpened(true)} />
            </BaseComponent>
          )}
        </CSSTransition>
      </SwitchTransition>
      {inputOpened && (
        <Overlay
          state={inputOpened}
          clickHadler={() => {
            setInputOpened(false);
          }}
        />
      )}
    </>
  );
};

export const AboutContent = () => {
  return <EditItemTextarea />;
};

export const LocationContent = () => {
  return <EditItemInput text={"Гродно, Беларусь"} />;
};

export const ContactsContent = () => {
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
          <TransitionGroup>
            {items.map((item) => (
              <CSSTransition key={item.id} timeout={400} classNames="item">
                <EditItemInput
                  {...item}
                  onRemove={(id) => {
                    setItems(items.filter((item) => item.id != id));
                  }}
                  removeable
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={inputOpened}
              timeout={200}
              classNames="accordion"
              unmountOnExit
            >
              {inputOpened ? (
                <AddContactInput
                  icons={icons}
                  onClose={() => setInputOpened(false)}
                  onAddItem={(item) => {
                    items.push(item);
                    setItems(items.slice());
                  }}
                />
              ) : (
                <BaseComponent mb="1rem" mt="0.75rem">
                  <Button type="add" onClick={() => setInputOpened(true)} />
                </BaseComponent>
              )}
            </CSSTransition>
          </SwitchTransition>
          {inputOpened && (
            <Overlay
              state={inputOpened}
              clickHadler={() => {
                setInputOpened(false);
              }}
            />
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
