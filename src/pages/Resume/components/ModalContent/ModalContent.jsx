import React, { Component } from "react";
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
import { Wrapper, Input, Text, Textarea } from "./Styled";
import { ItemTextarea, ItemInput, AddItemInput } from "./components";
import ItemsList from "./ItemsList";

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

//TODO
//- design language component to be able to set Lang Level (lang level and onBtnClick are passed in props)
const LanguageComponent = ({ type, level, onButtonClick, isPrimary }) => {
  const [pickerOpened, setPickerOpened] = React.useState(false);

  const langLevels = ["A1", "A2", "B1", "B2", "C1", "C2"];

  const handleButtonClick = () => {
    setPickerOpened((prevState) => !prevState);
    onButtonClick();
  };

  return (
    <>
      <LanguageStyledComponent isPrimary={isPrimary}>
        <Row gap="0.68rem">
          <p>{type}</p>
          <button onClick={onButtonClick}>{level}</button>
        </Row>
      </LanguageStyledComponent>
      {pickerOpened &&
        {
          /* <Picker left="9">
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
        </Picker> */
        }}
    </>
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
      onAddItem({ text, levelSpeech, levelWritten });
      onClose();
    }
  };

  return (
    <>
      <Wrapper className="add-item-input">
        <Row spaceBetween>
          <Row>
            <Button type="check" onClick={handleAddItem} />
            <Input
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
      </Wrapper>
      {inputLeftOpened && (
        <Picker left="9">
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
        <Picker right="2" arrowRight>
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
    </>
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

const LanguageNestedItem = ({ item }) => {
  return (
    <BaseComponent ml="3rem">
      <Row spaceBetween>
        <LanguageComponent type="Разговорный" level={item.levelSpeech} />
        <LanguageComponent type="Письменный" level={item.levelWritten} />
        <BaseComponent ml="1rem" pr="0.75rem">
          <Icon size="2" src={Edit} />
        </BaseComponent>
      </Row>
    </BaseComponent>
  );
};

//LANGUAGE CONTENT
export const LangContent = () => {
  const [inputOpened, setInputOpened] = React.useState(false);
  // const [levelSpeech, setLevelSpeech] = React.useState(langLevels[0]);
  // const [levelWritten, setLevelWritten] = React.useState(langLevels[0]);
  const languages = useSelector((state) => state.cv.languages);
  const dispatch = useDispatch();

  const handleAddLanguage = (item) => {
    const language = {
      ...item,
      id: uuidv4(),
    };
    dispatch(addLanguage(language));
  };

  const handleRemoveLanguage = (id) => {
    dispatch(removeLanguage(id));
  };

  const handleChangeLanguage = (item) => {
    dispatch(setLanguage(item));
  };

  return (
    <ItemsList
      items={languages}
      itemComponent={LanguageNestedItem}
      addItemComponent={AddLanguageInput}
      onAddItem={handleAddLanguage}
      onChangeItem={handleChangeLanguage}
      onRemoveItem={handleRemoveLanguage}
      editable
    />
    // <>
    //   <TransitionGroup>
    //     {languages.map((item) => (
    //       <CSSTransition key={item.id} timeout={400} classNames="item">
    //         <>
    //           <ItemInput
    //             item={item}
    //             onRemove={(id) => {
    //               dispatch(removeLanguage(id));
    //             }}
    //             onChange={(lang) => dispatch(setLanguage(lang))}
    //             maxLength="26"
    //             removeable
    //             editable
    //           />
    //           <BaseComponent ml="3rem">
    //             <Row spaceBetween>
    //               <LanguageComponent
    //                 type="Разговорный"
    //                 level={item.levelSpeech}
    //               />
    //               <LanguageComponent
    //                 type="Письменный"
    //                 level={item.levelWritten}
    //               />
    //               <BaseComponent ml="1rem" pr="0.75rem">
    //                 <Icon size="2" src={Edit} />
    //               </BaseComponent>
    //             </Row>
    //           </BaseComponent>
    //         </>
    //       </CSSTransition>
    //     ))}
    //   </TransitionGroup>
    //   <SwitchTransition mode="out-in">
    //     <CSSTransition
    //       key={inputOpened}
    //       timeout={200}
    //       classNames="accordion"
    //       unmountOnExit
    //     >
    //       {inputOpened ? (
    //         <AddLanguageInput
    //           onClose={() => setInputOpened(false)}
    //           onAddItem={(item) => {
    //             dispatch(addLanguage(item));
    //           }}
    //         />
    //       ) : (
    //         <Button type="add" onClick={() => setInputOpened(true)} />
    //       )}
    //     </CSSTransition>
    //   </SwitchTransition>
    //   {inputOpened && (
    //     <Overlay
    //       state={inputOpened}
    //       clickHadler={() => {
    //         setInputOpened(false);
    //       }}
    //     />
    //   )}
    // </>
  );
};

//HOBBY
export const HobbiesContent = () => {
  const hobbies = useSelector((state) => state.cv.hobbies);
  const dispatch = useDispatch();

  const handleChangeItem = (item) => {
    dispatch(setHobby(item));
  };

  const handleAddItem = (text) => {
    const hobby = {
      id: uuidv4(),
      text,
    };
    dispatch(addHobby(hobby));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeHobby(id));
  };

  return (
    <ItemsList
      items={hobbies}
      onAddItem={handleAddItem}
      onRemoveItem={handleRemoveItem}
      onChangeItem={handleChangeItem}
      editable
    />
  );
};

const JobNestedItem = ({ item, onAddItem, onChangeItem, onRemoveItem }) => {
  return (
    <BaseComponent ml="0.75rem" mb="0.5rem">
      <ItemsList
        items={item.info}
        onAddItem={(value) => onAddItem(item.id, value)}
        onChangeItem={(itemInfo) => onChangeItem(item.id, itemInfo)}
        onRemoveItem={(id) => onRemoveItem(item.id, id)}
        size="2"
        editable
      />
    </BaseComponent>
  );
};

//WORK EXPERIENCE
export const WorkExperienceContent = () => {
  const jobs = useSelector((state) => state.cv.jobs);
  const [inputOpened, setInputOpened] = React.useState(false);
  const dispatch = useDispatch();

  const handleAddJobInfo = (id, value) => {
    const info = {
      id: uuidv4(),
      text: value,
    };
    dispatch(addJobInfo({ id, info }));
  };

  const handleChangeJobInfo = (idJob, info) => {
    dispatch(setJobInfo({ idJob, info }));
  };

  const handleRemoveJobInfo = (idJob, idInfo) => {
    dispatch(removeJobInfo({ idJob, idInfo }));
  };

  const handleAddJob = (value) => {
    const job = {
      id: uuidv4(),
      text: value,
      info: [],
    };
    dispatch(addJob(job));
  };

  const handleRemoveJob = (id) => {
    dispatch(removeJob(id));
  };

  const handleChangeJob = (item) => {
    dispatch(setJob(item));
  };

  return (
    <ItemsList
      items={jobs}
      itemComponent={JobNestedItem}
      onAddItem={handleAddJob}
      onRemoveItem={handleRemoveJob}
      onChangeItem={handleChangeJob}
      editable
      componentProps={{
        onAddItem: handleAddJobInfo,
        onRemoveItem: handleRemoveJobInfo,
        onChangeItem: handleChangeJobInfo,
      }}
    />
    // <>
    //   <TransitionGroup>
    //     {jobs.map((item) => (
    //       <CSSTransition key={item.id} timeout={400} classNames="item">
    //         <>
    //           <ItemInput
    //             item={item}
    //             onRemove={(id) => {
    //               dispatch(removeJob(id));
    //             }}
    //             onChange={(item) => dispatch(setJob(item))}
    //             removeable
    //             editable
    //           />
    //           <div style={{ width: "97%", margin: "0 auto" }}>
    //             <ItemsList
    //               items={item.info}
    //               size="2"
    //               onAddItem={(info) => handleAddJobInfo(item, info)}
    //               onChangeItem={(info) => handleChangeJobInfo(item, info)}
    //               onRemoveItem={(id) => handleRemoveJobInfo(item, id)}
    //             />
    //           </div>
    //         </>
    //       </CSSTransition>
    //     ))}
    //   </TransitionGroup>
    //   <SwitchTransition mode="out-in">
    //     <CSSTransition
    //       key={inputOpened}
    //       timeout={200}
    //       classNames="accordion"
    //       unmountOnExit
    //     >
    //       {inputOpened ? (
    //         <AddItemInput
    //           onClose={() => setInputOpened(false)}
    //           onAddItem={(item) => {
    //             const { id, text } = item;
    //             const job = {
    //               id,
    //               text,
    //               info: [],
    //             };
    //             dispatch(addJob(job));
    //           }}
    //         />
    //       ) : (
    //         <Button type="add" onClick={() => setInputOpened(true)} />
    //       )}
    //     </CSSTransition>
    //   </SwitchTransition>
    //   {inputOpened && (
    //     <Overlay
    //       state={inputOpened}
    //       clickHadler={() => {
    //         setInputOpened(false);
    //       }}
    //     />
    //   )}
    // </>
  );
};

function withNestedComponentItem(NestedComponent) {
  const WrappedComponent = ({
    item,
    onRemoveItem,
    onChangeItem,
    onComponentChange,
  }) => {
    return (
      <>
        <ItemInput
          item={item}
          onRemove={onRemoveItem}
          onChange={(value) => onChangeItem(item, value)}
          removeable
          editable
        />
        <BaseComponent ml="0.75rem">
          <NestedComponent
            onChange={(value) => onComponentChange(item, value)}
            size="2"
          />
        </BaseComponent>
      </>
    );
  };
  return WrappedComponent;
}

//const CourseItem = withNestedComponentItem(ItemTextarea);
const CourseNestedItem = ({ item, onChangeItem }) => {
  return (
    <BaseComponent ml="0.75rem">
      <ItemTextarea
        onChange={(value) => onChangeItem(item.id, value)}
        size="2"
      />
    </BaseComponent>
  );
};

export const CoursesContent = () => {
  const courses = useSelector((state) => state.cv.courses);
  const dispatch = useDispatch();
  const [inputOpened, setInputOpened] = React.useState(false);

  const handleAddItem = (value) => {
    const course = {
      id: uuidv4(),
      text: value,
      info: "",
    };
    dispatch(addCourse(course));
  };

  const handleChangeItem = (item, value) => {
    dispatch(setCourse({ ...item, text: value }));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeCourse(id));
  };

  const handleChangeCourseInfo = (id, value) => {
    dispatch(setCourseInfo({ idCourse: id, info: value }));
  };

  return (
    <ItemsList
      items={courses}
      itemComponent={CourseNestedItem}
      onRemoveItem={handleRemoveItem}
      onChangeItem={handleChangeItem}
      onAddItem={handleAddItem}
      editable
      componentProps={{
        onChangeItem: handleChangeCourseInfo,
      }}
    />
    // <ItemsList
    //   items={courses}
    //   itemComponent={CourseItem}
    //   onRemoveItem={handleRemoveItem}
    //   onChangeItem={handleChangeItem}
    //   onAddItem={handleAddItem}
    //   editable
    //   componentProps={{
    //     onComponentChange: handleChangeCourseInfo,
    //   }}
    // />
    // <>
    //   <TransitionGroup>
    //     {courses.map((item) => (
    //       <CSSTransition key={item.id} timeout={400} classNames="item">
    //         <CourseItem
    //           item={item}
    //           onRemoveItem={handleRemoveItem}
    //           onChangeItem={handleChangeItem}
    //           onComponentChange={handleChangeCourseInfo}
    //         />
    //         {/* <>
    //           <ItemInput
    //             item={item}
    //             onRemove={handleRemoveItem}
    //             onChange={(value) => handleChangeItem(item, value)}
    //             removeable
    //             editable
    //           />
    //           <BaseComponent ml="0.75rem">
    //             <ItemTextarea
    //               onChange={(value) => handleChangeCourseInfo(item, value)}
    //               size="2"
    //             />
    //           </BaseComponent>
    //         </> */}
    //       </CSSTransition>
    //     ))}
    //   </TransitionGroup>
    //   <SwitchTransition mode="out-in">
    //     <CSSTransition
    //       key={inputOpened}
    //       timeout={200}
    //       classNames="accordion"
    //       unmountOnExit
    //     >
    //       {inputOpened ? (
    //         <AddItemInput
    //           onClose={() => setInputOpened(false)}
    //           onAddItem={handleAddItem}
    //         />
    //       ) : (
    //         <Button type="add" onClick={() => setInputOpened(true)} />
    //       )}
    //     </CSSTransition>
    //   </SwitchTransition>
    //   {inputOpened && (
    //     <Overlay
    //       state={inputOpened}
    //       clickHadler={() => {
    //         setInputOpened(false);
    //       }}
    //     />
    //   )}
    // </>
  );
};

export const AboutContent = () => {
  const dispatch = useDispatch();
  return <ItemTextarea onChange={(text) => dispatch(setAboutMe(text))} />;
};

//GENERAL INFO
export const GeneralInfoContent = () => {
  const dispatch = useDispatch();

  const handleLocationChange = (value) => {
    dispatch(setLocation(value));
  };
  const handleBirthdayChange = (value) => {
    dispatch(setBirthday(value));
  };

  return (
    <>
      <Row spaceBetween>
        <Text weight="600">Место жительства</Text>
        <ItemInput
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
