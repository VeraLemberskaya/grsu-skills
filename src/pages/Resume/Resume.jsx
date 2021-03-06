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
  Education,
} from "../../assets/icons";
import FIELD_TYPES from "./fieldTypes";
import { setCompany, setPosition } from "../../redux/cvSlice";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import BaseComponent from "./components/BaseComponent";
import Avatar from "./components/Avatar";
import { getUserInfo } from "../../api/ApiRequests";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

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
    type: FIELD_TYPES.skills,
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
  const CVPage = React.useRef();

  const handleDownloadPDF = () => {
    var printContents = CVPage.current.innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;

    // const CVTemplate = CVPage.current;
    // html2canvas(CVTemplate).then((canvas) => {
    //   document.body.appendChild(canvas);
    //   const imgData = canvas.toDataURL("image/png");
    //   const pdf = new jsPDF("p", "pt", "a1");
    //   pdf.addImage(imgData, "PNG", 0, 0);
    //   // pdf.output('dataurlnewwindow');
    //   pdf.save("download.pdf");
    // });
    // console.log(CVPage.current.innerHTML);
    // const doc = new jsPDF("p", "pt", "a4");
    // doc.html(CVPage.current.innerHTML, {
    //   callback: function (pdf) {
    //     pdf.save(`${user.name} ${user.surname}.pdf`);
    //   },
    // });
    // console.log("here");
    // savePDF(CVPage.current, {
    //   paperSize: "A4",
    // });
  };

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
                  <Button
                    onClick={handleDownloadPDF}
                    className="download-btn"
                    bg="green"
                    size="1"
                  >
                    <Icon pointer>
                      <Download />
                    </Icon>
                  </Button>
                </div>
                <div ref={CVPage} className="page">
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
                  <Border isSecondary />
                  <div className="cv-sections-container">
                    <div className="left-sections">
                      <CVSection {...sections[1]} />
                      <CVSection {...sections[2]} />
                      <CVSection {...sections[4]} />
                      <CVSection {...sections[3]} />
                    </div>
                    <div className="right-sections">
                      <CVSection {...sections2[0]} />
                      <CVSection
                        type={FIELD_TYPES.education}
                        icon={<Education />}
                        title="Образование"
                        isPrimary
                      />
                      <CVSection {...sections2[1]} />
                      <CVSection {...sections2[2]} />
                    </div>
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
