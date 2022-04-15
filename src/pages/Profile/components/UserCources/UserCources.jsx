import React, { useRef, useState } from "react";
import { countSemester } from "../../../../services/competenciesService";
import "./index.css";
import { CSSTransition } from "react-transition-group";

const cources = [
  [
    [
      {
        id: 1,
        title: "Академическая живопись",
      },
      {
        id: 2,
        title: "Академический рисунок",
      },
      {
        id: 3,
        title: "Безопасность жизнедеятельности человека",
      },
      {
        id: 4,
        title: "Введение в педагогическую профессию",
      },
      {
        id: 5,
        title: "Информационные технологии в образовании",
      },
      {
        id: 6,
        title: "Иностранный язык",
      },
      {
        id: 7,
        title: "История искусств",
      },
      {
        id: 8,
        title: "История Беларуси в контексте европейской цивилизации",
      },
      {
        id: 9,
        title: "Компьютерная графика",
      },
      {
        id: 10,
        title: "Основы композиции",
      },
      {
        id: 11,
        title: "Перспектива",
      },
      {
        id: 12,
        title: "Физическая культура",
      },
      {
        id: 13,
        title: "Цветоведение",
      },
      {
        id: 14,
        title: "Черчение и начертательная геометрия",
      },
    ],
    [
      {
        id: 1,
        title: "2Академическая живопись",
      },
      {
        id: 2,
        title: "2Академический рисунок",
      },
      {
        id: 3,
        title: "2Безопасность жизнедеятельности человека",
      },
      {
        id: 4,
        title: "2Введение в педагогическую профессию",
      },
      {
        id: 5,
        title: "2Информационные технологии в образовании",
      },
      {
        id: 6,
        title: "2Иностранный язык",
      },
      {
        id: 7,
        title: "2История искусств",
      },
      {
        id: 8,
        title: "2История Беларуси в контексте европейской цивилизации",
      },
      {
        id: 9,
        title: "2Компьютерная графика",
      },
      {
        id: 10,
        title: "2Основы композиции",
      },
      {
        id: 11,
        title: "2Перспектива",
      },
      {
        id: 12,
        title: "2Физическая культура",
      },
      {
        id: 13,
        title: "2Цветоведение",
      },
      {
        id: 14,
        title: "2Черчение и начертательная геометрия",
      },
    ],
  ],
  [
    [
      {
        id: 1,
        title: "Академическая живопись",
      },
      {
        id: 2,
        title: "Академический рисунок",
      },
      {
        id: 3,
        title: "Безопасность жизнедеятельности человека",
      },
      {
        id: 4,
        title: "Введение в педагогическую профессию",
      },
      {
        id: 5,
        title: "Информационные технологии в образовании",
      },
      {
        id: 6,
        title: "Иностранный язык",
      },
      {
        id: 7,
        title: "История искусств",
      },
      {
        id: 8,
        title: "История Беларуси в контексте европейской цивилизации",
      },
      {
        id: 9,
        title: "Компьютерная графика",
      },
      {
        id: 10,
        title: "Основы композиции",
      },
      {
        id: 11,
        title: "Перспектива",
      },
      {
        id: 12,
        title: "Физическая культура",
      },
      {
        id: 13,
        title: "Цветоведение",
      },
      {
        id: 14,
        title: "Черчение и начертательная геометрия",
      },
    ],
    [
      {
        id: 1,
        title: "2Академическая живопись",
      },
      {
        id: 2,
        title: "2Академический рисунок",
      },
      {
        id: 3,
        title: "2Безопасность жизнедеятельности человека",
      },
      {
        id: 4,
        title: "2Введение в педагогическую профессию",
      },
      {
        id: 5,
        title: "2Информационные технологии в образовании",
      },
      {
        id: 6,
        title: "2Иностранный язык",
      },
      {
        id: 7,
        title: "2История искусств",
      },
      {
        id: 8,
        title: "2История Беларуси в контексте европейской цивилизации",
      },
      {
        id: 9,
        title: "2Компьютерная графика",
      },
      {
        id: 10,
        title: "2Основы композиции",
      },
      {
        id: 11,
        title: "2Перспектива",
      },
      {
        id: 12,
        title: "2Физическая культура",
      },
      {
        id: 13,
        title: "2Цветоведение",
      },
      {
        id: 14,
        title: "2Черчение и начертательная геометрия",
      },
    ],
  ],
];

const UserCources = () => {
  const [openedCourse, setOpenedCourse] = useState(null);
  const [openedSemester, setOpenedSemester] = useState(null);
  const [openedSubject, setOpenedSubject] = useState(null);

  const handleCourseClick = (course) => {
    setOpenedSemester(null);
    setOpenedSubject(null);
    if (openedCourse === course) {
      setOpenedCourse(null);
    } else {
      setOpenedCourse(course);
    }
  };

  const handleSemesterClick = (semester) => {
    setOpenedSubject(null);
    if (openedSemester === semester) {
      setOpenedSemester(null);
    } else {
      setOpenedSemester(semester);
    }
  };

  const handleSubjectClick = (subject) => {
    if (openedSubject === subject) {
      setOpenedSubject(null);
    } else {
      setOpenedSubject(subject);
    }
  };

  const renderSubjects = (semester) => {
    return (
      <ul className="subject-list">
        {semester.map((subject) => {
          return (
            <li
              onClick={() => handleSubjectClick(subject)}
              key={subject.id}
              className={`${
                openedSubject === subject ? "active" : ""
              } item subject`}
            >
              {subject.title}
            </li>
          );
        })}
      </ul>
    );
  };

  const renderSemesters = (course, indexCourse) => {
    return (
      <ul className="semester-list">
        {course.map((semester, indexSem) => {
          return (
            <li>
              <div
                className={`${
                  openedSemester === semester ? "active" : ""
                } item semester`}
                onClick={() => {
                  handleSemesterClick(semester);
                }}
              >{`Семестр ${countSemester(indexCourse, indexSem)}`}</div>
              <CSSTransition
                in={openedSemester === semester}
                timeout={1000}
                classNames="subject-list"
                unmountOnExit
              >
                {renderSubjects(semester)}
              </CSSTransition>
            </li>
          );
        })}
      </ul>
    );
  };

  const renderedCources = cources.map((course, indexCourse) => {
    return (
      <li>
        <div
          className={`${openedCourse === course ? "active" : ""} item cource`}
          onClick={() => {
            handleCourseClick(course);
          }}
        >{`Курс ${indexCourse + 1}`}</div>
        <CSSTransition
          in={openedCourse === course}
          timeout={500}
          classNames="semester-list"
          unmountOnExit
        >
          {renderSemesters(course, indexCourse)}
        </CSSTransition>
      </li>
    );
  });

  return (
    <>
      <ul className="cource-list">{renderedCources}</ul>
    </>
  );
};

export default UserCources;
