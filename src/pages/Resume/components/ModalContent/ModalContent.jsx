import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
// import IconPicker from "../IconPicker";
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
  SearchSkills,
} from "../../../../assets/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  removeContact,
  setAboutMe,
  setContact,
  addLanguage,
  removeLanguage,
  setLanguage,
  setLocation,
  addJob,
  removeJob,
  setJob,
  addJobInfo,
  setJobInfo,
  removeJobInfo,
  addHobby,
  removeHobby,
  setHobby,
  addCourse,
  removeCourse,
  setCourse,
  setCourseInfo,
  addSkill,
  removeSkill,
  setBirthday,
} from "../../../../redux/cvSlice";
import Border from "../Border";
import {
  divideIntoTwoColumns,
  filterByQuery,
  divideIntoColumns,
} from "../../../../services/resumeService";
import moment from "moment";
import IMask from "imask";

const Wrapper = styled.div`
  min-height: ${(props) => (props.size == 2 ? "1.75" : "2.75")}rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 2;
  background: #f8f8f8;
  border-radius: 1.25rem;
  margin-bottom: ${(props) => (props.size == 2 ? "0.4" : "0.75")}rem;
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

const Input = styled.input`
  width: 100%;
  z-index: 2;
  background: transparent;
  margin-left: 1rem;
  color: #333;
  font-size: ${(props) => (props.size == 2 ? "1" : "1.25")}rem;
  font-weight: 500;
`;

const Text = styled.p`
  width: 13.75rem;
  padding: 0.2rem 0;
  margin-left: 1rem;
  z-index: 2;
  color: #333;
  font-size: ${(props) => (props.size == 2 ? "1" : "1.25")}rem;
  font-weight: ${(props) => (props.weight ? props.weight : "500")};
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

const EditItemTextarea = ({ size, text, onChange }) => {
  const [value, setValue] = React.useState(text);

  const handleTextareaChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <Wrapper size={size}>
      <Label size={size} htmlFor="textarea">
        <Icon size={size}>
          <Edit />
        </Icon>
      </Label>
      <Textarea
        size={size}
        value={value}
        id="textarea"
        onChange={handleTextareaChange}
        autoFocus
      />
    </Wrapper>
  );
};
//в качестве children передавать какой-то компонент(иконка с пикером)
const ItemInput = ({
  ref,
  size,
  item,
  onRemove,
  onChange,
  removeable,
  editable,
  maxLength,
  children,
}) => {
  const { id, icon, text } = item;
  const [inputValue, setInputValue] = React.useState(text);

  const handleInputChange = (e) => {
    onChange({ ...item, text: e.target.value });
    setInputValue(e.target.value);
  };

  return (
    <>
      <Wrapper size={size}>
        <Row spaceBetween>
          <Row>
            {removeable && (
              <Button
                size={Number(size) + 1}
                type="remove"
                onClick={() => onRemove(id)}
              />
            )}
            {children && <BaseComponent ml="1rem">{children}</BaseComponent>}
            {!editable ? (
              <Text size={size}>{inputValue}</Text>
            ) : (
              <Input
                ref={ref}
                size={size}
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                maxLength={maxLength ? maxLength : "50"}
              />
            )}
          </Row>
          {editable && (
            <BaseComponent ml="1rem" pr="0.75rem">
              <Icon size={size}>
                <Edit />
              </Icon>
            </BaseComponent>
          )}
        </Row>
      </Wrapper>
    </>
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
          <Button
            size={Number(size) + 1}
            type="check"
            onClick={handleAddItem}
          />
          <input
            autoFocus
            ref={input}
            type="text"
            onKeyPress={handleInputChange}
          />
        </Row>
        <BaseComponent ml="1rem" pr="0.75rem">
          <Icon size={Number(size) + 1} onClick={onClose} pointer>
            <Close />
          </Icon>
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
          <Icon size="2" onClick={onClose} pointer>
            <Close />
          </Icon>
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

const List = ({
  items,
  size,
  onAddItem,
  onRemoveItem,
  onChangeItem,
  editable,
}) => {
  const [inputOpened, setInputOpened] = React.useState(false);

  return (
    <div style={{ position: "relative" }}>
      <TransitionGroup>
        {items?.map((item) => (
          <CSSTransition key={item.id} timeout={400} classNames="item">
            <ItemInput
              size={size}
              item={item}
              onRemove={(id) => {
                onRemoveItem(id);
              }}
              onChange={(item) => onChangeItem(item)}
              removeable
              editable={editable}
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
                onAddItem(item);
              }}
            />
          ) : (
            <Button
              size={Number(size) + 1}
              type="add"
              onClick={() => setInputOpened(true)}
            />
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
  const [inputOpened, setInputOpened] = React.useState(false);
  // const [levelSpeech, setLevelSpeech] = React.useState(langLevels[0]);
  // const [levelWritten, setLevelWritten] = React.useState(langLevels[0]);
  const languages = useSelector((state) => state.cv.languages);
  const dispatch = useDispatch();

  return (
    <>
      <TransitionGroup>
        {languages.map((item) => (
          <CSSTransition key={item.id} timeout={400} classNames="item">
            <>
              <ItemInput
                item={item}
                onRemove={(id) => {
                  dispatch(removeLanguage(id));
                }}
                onChange={(lang) => dispatch(setLanguage(lang))}
                maxLength="26"
                removeable
                editable
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
                dispatch(addLanguage(item));
              }}
            />
          ) : (
            <Button type="add" onClick={() => setInputOpened(true)} />
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
  const hobbies = useSelector((state) => state.cv.hobbies);
  const dispatch = useDispatch();

  return (
    <List
      items={hobbies}
      onAddItem={(item) => dispatch(addHobby(item))}
      onRemoveItem={(id) => dispatch(removeHobby(id))}
      onChangeItem={(item) => dispatch(setHobby(item))}
      editable
    />
  );
};

export const WorkExperienceContent = () => {
  const jobs = useSelector((state) => state.cv.jobs);
  const [inputOpened, setInputOpened] = React.useState(false);
  const dispatch = useDispatch();

  const handleAddJobInfo = (item, info) => {
    dispatch(addJobInfo({ id: item.id, info }));
  };

  const handleChangeJobInfo = (item, info) => {
    dispatch(setJobInfo({ idJob: item.id, info }));
  };

  const handleRemoveJobInfo = (item, id) => {
    dispatch(removeJobInfo({ idJob: item.id, idInfo: id }));
  };

  return (
    <>
      <TransitionGroup>
        {jobs.map((item) => (
          <CSSTransition key={item.id} timeout={400} classNames="item">
            <>
              <ItemInput
                item={item}
                onRemove={(id) => {
                  dispatch(removeJob(id));
                }}
                onChange={(item) => dispatch(setJob(item))}
                removeable
                editable
              />
              <div style={{ width: "97%", margin: "0 auto" }}>
                <List
                  items={item.info}
                  size="2"
                  onAddItem={(info) => handleAddJobInfo(item, info)}
                  onChangeItem={(info) => handleChangeJobInfo(item, info)}
                  onRemoveItem={(id) => handleRemoveJobInfo(item, id)}
                />
              </div>
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
                const { id, text } = item;
                const job = {
                  id,
                  text,
                  info: [],
                };
                dispatch(addJob(job));
              }}
            />
          ) : (
            <Button type="add" onClick={() => setInputOpened(true)} />
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
  const courses = useSelector((state) => state.cv.courses);
  const dispatch = useDispatch();
  // const [items, setItems] = React.useState([]);
  const [inputOpened, setInputOpened] = React.useState(false);

  return (
    <>
      <TransitionGroup>
        {courses.map((item) => (
          <CSSTransition key={item.id} timeout={400} classNames="item">
            <>
              <ItemInput
                item={item}
                onRemove={(id) => {
                  dispatch(removeCourse(id));
                }}
                onChange={(item) => dispatch(setCourse(item))}
                removeable
                editable
              />
              <BaseComponent ml="0.75rem">
                <EditItemTextarea
                  onChange={(text) =>
                    dispatch(setCourseInfo({ idCourse: item.id, info: text }))
                  }
                  size="2"
                />
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
                let course = {
                  id: item.id,
                  text: item.text,
                  info: "",
                };
                dispatch(addCourse(course));
              }}
            />
          ) : (
            <Button type="add" onClick={() => setInputOpened(true)} />
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
  const dispatch = useDispatch();
  return <EditItemTextarea onChange={(text) => dispatch(setAboutMe(text))} />;
};

//GENERAL INFO
export const GeneralInfoContent = () => {
  const dispatch = useDispatch();

  const handleLocationChange = (item) => {
    dispatch(setLocation(item.text));
  };
  const handleBirthdayChange = (item) => {
    dispatch(setBirthday(item.text));
  };

  return (
    <>
      <Row spaceBetween>
        <Text weight="600">Место жительства</Text>
        <ItemInput
          ref={dateInput}
          onChange={handleLocationChange}
          item={{ id: uuidv4(), text: "Гродно, Беларусь" }}
          editable
        />
      </Row>
      <Row spaceBetween>
        <Text weight="600">Дата рождения</Text>
        <ItemInput
          onChange={handleBirthdayChange}
          item={{ id: uuidv4(), text: "" }}
          editable
        />
      </Row>
    </>
  );
};

const IconPicker = ({ defaultIcon, icons, onIconChange }) => {
  const [pickerOpened, setPickerOpened] = React.useState(false);

  const handleIconClick = (icon) => {
    onIconChange(icon);
    setPickerOpened(false);
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        <Icon onClick={() => setPickerOpened((prev) => !prev)} pointer>
          {defaultIcon}
        </Icon>
      </div>
      {pickerOpened && (
        <Picker top="3.5" left="-0">
          {icons.map((icon) => (
            <Icon onClick={() => handleIconClick(icon)} pointer>
              {icon}
            </Icon>
          ))}
        </Picker>
      )}
    </>
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
            <Icon onClick={() => setIconsOpened(true)} pointer>
              {icon ? icon : <ChooseIcon />}
            </Icon>
            <input
              autoFocus
              ref={input}
              type="text"
              onKeyPress={handleInputChange}
            />
          </Row>
          <BaseComponent ml="1rem" pr="0.75rem">
            <Icon size="2" onClick={onClose} pointer>
              <Close />
            </Icon>
          </BaseComponent>
        </Row>
      </Wrapper>
      {iconsOpened && (
        <BaseComponent mt="1rem" className="picker">
          <Picker>
            {icons.map((icon) => (
              <Icon
                onClick={() => {
                  setIcon(icon);
                  setIconsOpened(false);
                  input.current.focus();
                }}
                pointer
              >
                {icon}
              </Icon>
            ))}
          </Picker>
        </BaseComponent>
      )}
    </>
  );
};

export const ContactsContent = () => {
  const contacts = useSelector((state) => state.cv.contacts);
  const [inputOpened, setInputOpened] = React.useState(false);
  const dispatch = useDispatch();

  const handleAddContact = (contact) => {
    dispatch(addContact(contact));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeContact(id));
  };

  const handleEditItem = (contact) => {
    dispatch(setContact(contact));
  };

  const icons = [
    <Chat />,
    <Call />,
    <Message />,
    <Mail />,
    <Adress />,
    <Messenger />,
    <Facebook />,
    <Skype />,
    <Instagram />,
    <Youtube />,
    <Vk />,
    <Telegram />,
    <Twitter />,
    <Whatsapp />,
    <Dribble />,
    <Snapchat />,
  ];

  return (
    <div style={{ position: "relative" }}>
      <div style={{ overflow: "auto", maxHeight: "20rem" }}>
        {/* <BaseComponent ml="0.5rem"> */}
        <TransitionGroup>
          {contacts.map((contact) => (
            <CSSTransition key={contact.id} timeout={400} classNames="item">
              <ItemInput
                item={contact}
                onChange={handleEditItem}
                onRemove={handleRemoveItem}
                removeable
                editable
              >
                <IconPicker
                  defaultIcon={contact.icon}
                  icons={icons}
                  onIconChange={(newIcon) => {
                    handleEditItem({ ...contact, icon: newIcon });
                  }}
                />
              </ItemInput>
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
                onAddItem={handleAddContact}
              />
            ) : (
              <BaseComponent mb="1rem">
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
        {/* </BaseComponent> */}
      </div>
    </div>
  );
};

const SKILL_TYPES = {
  hard: "Hard",
  soft: "Soft",
};

const skills = [
  {
    id: "1",
    name: "Skill 1",
    type: SKILL_TYPES.hard,
  },
  {
    id: "2",
    name: "Skill 2",
    type: SKILL_TYPES.hard,
  },
  {
    id: "3",
    name: "Навык 5 с названием",
    type: SKILL_TYPES.hard,
  },
  {
    id: "4",
    name: "Skill 4",
    type: SKILL_TYPES.soft,
  },
  {
    id: "5",
    name: "Skill 5",
    type: SKILL_TYPES.hard,
  },
  {
    id: "6",
    name: "Skill 6",
    type: SKILL_TYPES.soft,
  },
  {
    id: "7",
    name: "Навык 7 с длинным названием",
    type: SKILL_TYPES.hard,
  },
  {
    id: "8",
    name: "Skill 8",
    type: SKILL_TYPES.soft,
  },
  {
    id: "9",
    name: "Skill 9",
    type: SKILL_TYPES.soft,
  },
  {
    id: "10",
    name: "Навык 7 с длинным названием",
    type: SKILL_TYPES.soft,
  },
  {
    id: "11",
    name: "Skill 11",
    type: SKILL_TYPES.soft,
  },
  {
    id: "12",
    name: "Skill 12",
    type: SKILL_TYPES.soft,
  },
  {
    id: "13",
    name: "Навык 13 с длинным названием",
    type: SKILL_TYPES.hard,
  },
  {
    id: "14",
    name: "Skill 14",
    type: SKILL_TYPES.soft,
  },
  {
    id: "15",
    name: "Skill 15",
    type: SKILL_TYPES.soft,
  },
  {
    id: "16",
    name: "Навык 16 с длинным названием",
    type: SKILL_TYPES.soft,
  },
  {
    id: "17",
    name: "Skill 17",
    type: SKILL_TYPES.soft,
  },
  {
    id: "18",
    name: "Skill 18",
    type: SKILL_TYPES.soft,
  },
];

const SkillWrapper = styled.div`
  min-width: 13.75rem;
  max-width: 15rem;
  min-height: 2.75rem;
  border-radius: 1.25rem;
  background: ${(props) => (props.disabled ? "#fff" : "#f8f8f8")};
  box-shadow: ${(props) =>
    props.disabled
      ? "inset 0px 4px 8px rgba(0, 0, 0, 0.15)"
      : "0px 4px 4px rgba(0, 0, 0, 0.15)"};
  font-size: 1.25rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  cursor: ${(props) => (props.removeable ? "auto" : "pointer")};
  ${(props) =>
    !props.removeable && "padding:0.625rem 1.25rem; padding-left:2rem;"}
  ${(props) => props.removeable && "box-shadow: none;"}
  ${(props) => props.disabled && "color: #b0b0b0"};
  transition: all 0.2s;
  .type {
    font-weight: ${(props) =>
      props.type === SKILL_TYPES.soft ? "400" : "600"};
    align-self: flex-end;
  }
  .button {
    align-self: flex-start;
  }
`;

const Skill = ({ id, type, name, removeable, disabled, onClick, onRemove }) => {
  return (
    <SkillWrapper
      onClick={onClick}
      type={type}
      disabled={disabled}
      removeable={removeable}
    >
      {removeable ? (
        <Row>
          <Button
            className="button"
            type="remove"
            onClick={() => onRemove(id)}
          />
          <BaseComponent ml="0.68rem" mt="0.5rem" mb="0.5rem" pr="0.68rem">
            <p>
              {name}&nbsp;
              <span className="type">{type}</span>
            </p>
          </BaseComponent>
        </Row>
      ) : (
        <>
          {name}&nbsp;
          <span className="type">{type}</span>
        </>
      )}
    </SkillWrapper>
  );
};

const SkillsModal = ({
  skills,
  selectedSkills,
  onAddItem,
  onRemoveItem,
  onClose,
}) => {
  const [filteredSkills, setFilteredSkills] = React.useState(skills);

  const [skills1, skills2] = React.useMemo(
    () => divideIntoTwoColumns(filteredSkills),
    [filteredSkills]
  );

  const handleSkillClick = (item) => {
    selectedSkills.includes(item) ? onRemoveItem(item.id) : onAddItem(item);
  };

  const renderedSkills = (items) => {
    return (
      <ul className="skills-list">
        {items.map((item) => (
          <li key={item.id}>
            <Skill
              {...item}
              onClick={() => handleSkillClick(item)}
              disabled={selectedSkills.includes(item)}
            />
          </li>
        ))}
      </ul>
    );
  };

  const handleInputChange = (e) => {
    setFilteredSkills(filterByQuery(skills, e.target.value));
  };

  return (
    <div className="add-skills-modal">
      <Row spaceBetween>
        <Row gap="1rem">
          <Button type="check" onClick={onClose} />
          <Row>
            <Icon>
              <SearchSkills />
            </Icon>
            <Input
              type="text"
              onChange={handleInputChange}
              autoFocus
              underlined
            />
          </Row>
        </Row>
        <BaseComponent ml="1rem" pr="0.75rem">
          <Icon onClick={onClose} pointer>
            <Close />
          </Icon>
        </BaseComponent>
      </Row>
      <Border width="80" mt="-0.2" />
      <BaseComponent pr="2.18rem" pl="2.18rem" mt="1.25rem" mb="1.25">
        <ul className="skill-list-wrapper">
          {renderedSkills(skills1)}
          {renderedSkills(skills2)}
        </ul>
      </BaseComponent>
    </div>
  );
};

export const SkillsContent = () => {
  const [modalOpened, setModalOpened] = React.useState(false);
  const selectedSkills = useSelector((state) => state.cv.skills);
  const dispatch = useDispatch();
  const buttonPositionFlag = React.useRef(true);

  const [column1, column2] = React.useMemo(
    () => divideIntoColumns(selectedSkills),
    [selectedSkills]
  );

  if (!(column1.length % 5) && column1.length) {
    buttonPositionFlag.current = false;
  }
  if (!(column2.length % 5) && column2.length) {
    buttonPositionFlag.current = true;
  }

  const renderSkillsColumn = (column, isButton) => (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ul className="skills-list">
        <TransitionGroup>
          {column.map((skill) => (
            <CSSTransition key={skill.id} timeout={400} classNames="item">
              <li key={skill.id}>
                <Skill
                  {...skill}
                  removeable
                  onRemove={(id) => {
                    column = column.filter((item) => item.id !== id);
                    dispatch(removeSkill(id));
                  }}
                />
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
      {isButton && <Button type="add" onClick={() => setModalOpened(true)} />}
    </div>
  );

  return (
    <div>
      <Row gap="2.5rem" alignTop>
        {buttonPositionFlag.current
          ? renderSkillsColumn(column1, true)
          : renderSkillsColumn(column1, false)}
        {buttonPositionFlag.current
          ? renderSkillsColumn(column2, false)
          : renderSkillsColumn(column2, true)}
      </Row>
      <Overlay state={modalOpened} clickHadler={() => setModalOpened(false)} />
      <CSSTransition
        in={modalOpened}
        timeout={400}
        classNames="item"
        unmountOnExit
      >
        <SkillsModal
          skills={skills}
          selectedSkills={selectedSkills}
          onAddItem={(item) => dispatch(addSkill(item))}
          onRemoveItem={(id) => dispatch(removeSkill(id))}
          onClose={() => setModalOpened(false)}
        />
      </CSSTransition>
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
