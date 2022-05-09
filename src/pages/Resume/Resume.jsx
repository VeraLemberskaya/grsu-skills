import React from "react";
import Page from "../../components/Page";
import "./index.css";
import { Row, SectionBtnGroup, Modal } from "./components";
import {
  Location2,
  Communication,
  Languages,
  Hobby,
  Job,
  Courses,
  AboutMe,
  Skills,
} from "../../assets/icons";
import FIELD_TYPES from "./fieldTypes";

const sections = [
  {
    type: "location",
    title: "Место жительства",
    icon: Location2,
  },
  {
    type: FIELD_TYPES.contacts,
    title: "Контакты",
    icon: Communication,
  },
  {
    type: "languages",
    title: "Языки",
    icon: Languages,
  },
  {
    type: "hobby",
    title: "Хобби",
    icon: Hobby,
  },
  {
    type: "skills",
    title: "Навыки",
    icon: Skills,
  },
];

const sections2 = [
  {
    type: "aboutMe",
    title: "Кратко обо мне",
    icon: AboutMe,
  },
  {
    type: "job",
    title: "Опыт работы",
    icon: Job,
  },
  {
    type: "courses",
    title: "Курсы и тренинги",
    icon: Courses,
  },
];

const Resume = () => {
  const [section, setSection] = React.useState(null);

  const handleSectionBtnClick = (section) => {
    setSection(section);
  };

  return (
    <Page>
      <div className="resume-page">
        <div className="container">
          <section className="edit-section">
            <div className="container">
              <div className="content">
                <div className="header">
                  <div className="section-title primary">Редактирование</div>
                  <Row mb="1rem" gap="1.25rem">
                    <label htmlFor="input-company">Компания:</label>
                    <input
                      type="text"
                      id="input-company"
                      className="input company"
                    />
                  </Row>
                  <Row mb="1rem" gap="1.25rem">
                    <label htmlFor="input-position">Должность:</label>
                    <input
                      type="text"
                      id="input-position"
                      className="input position"
                    />
                  </Row>
                  <Row mb="1rem" className="btn-row" spaceBetween>
                    <SectionBtnGroup
                      onClick={handleSectionBtnClick}
                      sections={sections}
                    />
                    <SectionBtnGroup
                      onClick={handleSectionBtnClick}
                      sections={sections2}
                    />
                  </Row>
                </div>
              </div>
            </div>
            <Modal icon={Communication} type="contacts" title={"Контакты"} />
          </section>
        </div>
      </div>
    </Page>
  );
};

export default Resume;
