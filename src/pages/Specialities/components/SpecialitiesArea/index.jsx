import React, { useRef } from "react";
import SortingBar from "../SortingBar";
import SpecialitiesList from "../SpecialitiesList";
import { useState, useEffect } from "react";
import useFaculties from "../../../../hooks/useFaculties";

// const faculties = [
//   {
//     id: 1,
//     name: "Факультет математики и информатики",
//   },
//   {
//     id: 2,
//     name: "Физико-технический факультет",
//   },
//   {
//     id: 3,
//     name: "Инженерно-строительный факультет",
//   },
//   {
//     id: 4,
//     name: "Факультет инновационных технологий машиностроения",
//   },
//   {
//     id: 5,
//     name: "Факультет биологии и экологии",
//   },
//   {
//     id: 6,
//     name: "Факультет истории, коммуникации и туризма",
//   },
//   {
//     id: 7,
//     name: "Юридический факультет",
//   },
//   {
//     id: 8,
//     name: "Факультет психологии",
//   },
//   {
//     id: 9,
//     name: "Факультет экономики и управления",
//   },
//   { id: 10, name: "Факультет искусств и дизайна" },
//   {
//     id: 11,
//     name: "Военный факультет",
//   },
//   {
//     id: 12,
//     name: "Филологический факультет",
//   },
//   {
//     id: 13,
//     name: "Факультет физической культуры",
//   },
// ];

//let faculties;

const SpecialitiesArea = () => {
  const { faculties, isLoaded } = useFaculties();
  const [faculty, setFaculty] = useState(null);

  useEffect(() => {
    if (faculties.length) {
      setFaculty(faculties[0]);
    }
  }, [isLoaded]);

  return (
    <div className="area">
      {faculty ? (
        <>
          <SortingBar faculty={faculty} setFaculty={setFaculty} />
          <SpecialitiesList faculty={faculty} />
        </>
      ) : (
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default SpecialitiesArea;
