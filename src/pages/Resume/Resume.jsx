import React from "react";
import Page from "../../components/Page";
import "./index.css";
import {
  Row,
  SectionBtnGroup,
  Modal,
  Button,
  Icon,
  Border,
  CVSection,
} from "./components";
import {
  Location2,
  Location2Color,
  Communication,
  CommunicationColor,
  Languages,
  LanguagesColor,
  Hobby,
  HobbyColor,
  Job,
  JobColor,
  Courses,
  CoursesColor,
  AboutMe,
  AboutMeColor,
  Skills,
  SkillsColor,
  Download,
  Edit,
  Photo,
} from "../../assets/icons";
import FIELD_TYPES from "./fieldTypes";
import { setCompany, setPosition } from "../../redux/cvSlice";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import BaseComponent from "./components/BaseComponent";
import Avatar from "./components/Avatar";

const sections = [
  {
    type: FIELD_TYPES.location,
    title: "Место жительства",
    icon: <Location2 />,
    isSecondary: true,
  },
  {
    type: FIELD_TYPES.contacts,
    title: "Контакты",
    icon: <Communication />,
    isSecondary: true,
  },
  {
    type: FIELD_TYPES.languages,
    title: "Языки",
    icon: <Languages />,
    isSecondary: true,
  },
  {
    type: FIELD_TYPES.hobby,
    title: "Мои хобби",
    icon: <Hobby />,
    isSecondary: true,
  },
  {
    type: "skills",
    title: "Мои навыки",
    icon: <Skills />,
    isSecondary: true,
  },
];

const sections2 = [
  {
    type: FIELD_TYPES.aboutMe,
    title: "Кратко обо мне",
    icon: <AboutMe />,
    isPrimary: true,
  },
  {
    type: FIELD_TYPES.workExperience,
    title: "Опыт работы",
    icon: <Job />,
    isPrimary: true,
  },
  {
    type: FIELD_TYPES.cources,
    title: "Курсы и тренинги",
    icon: <Courses />,
    isPrimary: true,
  },
];

const Resume = () => {
  const [section, setSection] = React.useState(null);
  const user = useSelector((state) => state.auth.user);
  const company = useSelector((state) => state.cv.company, shallowEqual);
  const position = useSelector((state) => state.cv.position, shallowEqual);
  const location = useSelector((state) => state.cv.location, shallowEqual);
  const dispatch = useDispatch();

  const handleSectionBtnClick = (section) => {
    setSection(section);
  };

  const handleInputChange = (e) => {
    const input = e.target;
    if (input.name === "company") {
      dispatch(setCompany(input.value));
    } else {
      dispatch(setPosition(input.value));
    }
  };

  return (
    <Page>
      <div className="resume-page">
        <div className="container">
          <section className="edit-section">
            <div className="container">
              <div className="content">
                <div className="header">
                  <h4 className="section-title primary">Редактирование</h4>
                </div>
                <Row mb="1rem" gap="1.25rem">
                  <label htmlFor="input-company">Компания:</label>
                  <input
                    value={company}
                    name="company"
                    type="text"
                    id="input-company"
                    className="input company"
                    onChange={handleInputChange}
                  />
                </Row>
                <Row mb="1rem" gap="1.25rem">
                  <label htmlFor="input-position">Должность:</label>
                  <input
                    value={position}
                    name="position"
                    type="text"
                    id="input-position"
                    className="input position"
                    onChange={handleInputChange}
                  />
                </Row>
                <Row mb="1rem" className="btn-row" spaceBetween>
                  <SectionBtnGroup
                    activeSection={section}
                    onClick={handleSectionBtnClick}
                    sections={sections}
                  />
                  <SectionBtnGroup
                    activeSection={section}
                    onClick={handleSectionBtnClick}
                    sections={sections2}
                  />
                </Row>
              </div>
            </div>
            {section && <Modal {...section} />}
          </section>
          <section className="cv-section">
            <div className="container">
              <div className="content">
                <div className="header">
                  <h4 className="section-title secondary">Моё резюме</h4>
                  <Button className="download-btn" bg="green" size="1">
                    <Icon pointer>
                      <Download />
                    </Icon>
                  </Button>
                </div>
                <div className="page">
                  <Row className="header">
                    <Avatar img={user.avatar} />
                    <div className="info">
                      <div className="cv-title">
                        {user.name}
                        <span> {user.surname}</span>
                      </div>
                      <p className="company">
                        Компания: <span>{company}</span>
                      </p>
                      <p className="position">
                        Должность: <span>{position}</span>
                      </p>
                    </div>
                  </Row>
                  <div className="user-info">
                    <div className="location">
                      <Row gap="1.25rem">
                        <Icon isSecondary>
                          <Location2 />
                        </Icon>
                        <p>{location}</p>
                      </Row>
                    </div>
                    <div className="birth-date">
                      <BaseComponent ml="2.4rem">
                        <p>Дата рождения: 01.01.2002</p>
                      </BaseComponent>
                    </div>
                  </div>
                  <Border />
                  <div className="cv-sections-container">
                    <CVSection {...sections[1]} />
                  </div>
                </div>
                {/* AIzaSyBLhvsZS6duJFD2DktfTj4FLrJoyhMXqMc */}
              </div>
            </div>
          </section>
        </div>
      </div>
    </Page>
  );
};

export default Resume;
