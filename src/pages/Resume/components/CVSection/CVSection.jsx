import React from "react";
import styled from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Title from "../Title";
import Icon from "../Icon";
import FIELD_TYPES from "../../fieldTypes";
import BaseComponent from "../BaseComponent";
import { useSelector } from "react-redux";
import Row from "../Row";
import { getUserInfo } from "../../../../api/ApiRequests";
import "./index.css";

const SECTION_TYPES = {
  [FIELD_TYPES.contacts]: <ContactsSection />,
  [FIELD_TYPES.aboutMe]: <AboutMeSection />,
  [FIELD_TYPES.languages]: <LanguagesSection />,
  [FIELD_TYPES.education]: <EducationSection />,
  [FIELD_TYPES.skills]: <SkillsSection />,
  [FIELD_TYPES.workExperience]: <WorkExperienceSection />,
  [FIELD_TYPES.hobby]: <HobbySection />,
  [FIELD_TYPES.cources]: <CoursesSection />,
  [FIELD_TYPES.skills]: <SkillsSection />,
};

const Text = styled.p`
  word-wrap: break-word;
  font-size: ${(props) => (props.size == 2 ? "1" : "1.25")}rem;
  font-weight: ${(props) => (props.weight ? props.weight : "500")};
  max-width: 29.3rem;
  display: block;
`;

const Wrapper = styled.div`
  max-width: 18.5rem;
`;

//COURSES
function CoursesSection() {
  const courses = useSelector((state) => state.cv.courses);
  console.log(courses);
  return (
    <Wrapper>
      <ul className="cv-double-list">
        <TransitionGroup>
          {courses.map((course) => (
            <CSSTransition key={course.id} timeout={400} classNames="item">
              <li key={course.id}>
                <Text weight="600">{course.text}</Text>
                <ul className="nested-list">
                  {course.info !== "" && (
                    <li>
                      <Text size="2">{course.info}</Text>
                    </li>
                  )}
                </ul>
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
    </Wrapper>
  );
}

//HOBBY
function HobbySection() {
  const hobbies = useSelector((state) => state.cv.hobbies);
  return (
    <Wrapper>
      <ul>
        <TransitionGroup>
          {hobbies.map((hobby) => (
            <CSSTransition key={hobby.id} timeout={400} classNames="item">
              <Text>{hobby.text}</Text>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
    </Wrapper>
  );
}

//WORK EXPERIENCE
function WorkExperienceSection() {
  const jobs = useSelector((state) => state.cv.jobs);

  return (
    <Wrapper>
      <ul className="cv-double-list">
        <TransitionGroup>
          {jobs.map((job) => (
            <CSSTransition key={job.id} timeout={400} classNames="item">
              <li key={job.id}>
                <Text weight="600">{job.text}</Text>
                <ul className="nested-list">
                  <TransitionGroup>
                    {job.info.map((infoItem) => (
                      <CSSTransition
                        key={infoItem.id}
                        timeout={400}
                        classNames="item"
                      >
                        <li key={infoItem.id}>
                          <Text size="2">{infoItem.text}</Text>
                        </li>
                      </CSSTransition>
                    ))}
                  </TransitionGroup>
                </ul>
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
    </Wrapper>
  );
}

//SKILLS
function SkillsSection() {
  return <div></div>;
}

//EDUCATION
function EducationSection() {
  const user = useSelector((state) => state.auth.user);
  const [speciality, setSpecilaity] = React.useState();
  const [cource, setCource] = React.useState();

  React.useEffect(async () => {
    const result = await getUserInfo();
    console.log(result.speciality);
    setSpecilaity(result.speciality);
    setCource(result.cource);
  }, []);

  return (
    <Wrapper>
      <div className="education-section">
        <Text weight="600">
          Гродненский государственный университет имени Янки Купалы
        </Text>
        <BaseComponent mt="1rem">
          <Text size="2">Специальность:&nbsp;{speciality?.name}</Text>
          <Text size="2">{`(2020-сейчас)`}</Text>
        </BaseComponent>
      </div>
    </Wrapper>
  );
}

//LANGUAGES//
function LanguagesSection() {
  const languages = useSelector((state) => state.cv.languages);

  return (
    <Wrapper>
      <ul className="cv-double-list">
        <TransitionGroup>
          {languages.map((lang) => (
            <CSSTransition key={lang.id} timeout={400} classNames="item">
              <li>
                <BaseComponent mb="0.2rem">
                  <Text>{lang.text}</Text>
                </BaseComponent>
                <ul className="nested-list">
                  <li>
                    <Text size="2">
                      Разговорный&nbsp;
                      {lang.levelSpeech}
                    </Text>
                  </li>
                  <li>
                    <Text size="2">
                      {" "}
                      Письменный&nbsp;
                      {lang.levelWritten}
                    </Text>
                  </li>
                </ul>
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
    </Wrapper>
  );
}

//ABOUT ME//
function AboutMeSection() {
  const aboutMe = useSelector((state) => state.cv.aboutMe);

  return <Text>{aboutMe}</Text>;
}

//CONTACTS//
function ContactsSection() {
  const contacts = useSelector((state) => state.cv.contacts);
  return (
    <Wrapper>
      <ul>
        <TransitionGroup>
          {contacts?.map((contact) => (
            <CSSTransition key={contact.id} timeout={400} classNames="item">
              <BaseComponent mt="1rem" key={contact.id}>
                <Row gap="0.875rem">
                  <Icon>{contact.icon}</Icon>
                  <Text>{contact.text}</Text>
                </Row>
              </BaseComponent>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
    </Wrapper>
  );
}

const CVSection = ({ type, title, icon, isPrimary, isSecondary }) => {
  return (
    <div>
      <Title icon={icon} isPrimary={isPrimary} isSecondary={isSecondary}>
        {title}
      </Title>
      <BaseComponent ml="2rem" mt="1.5rem">
        {SECTION_TYPES[type]}
      </BaseComponent>
    </div>
  );
};

export default CVSection;
