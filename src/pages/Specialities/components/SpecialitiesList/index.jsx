import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

// const specFiid = [
//   {
//     id: 1,
//     code: "1-19 01 01-03",
//     name: "Дизайн (графический)",
//     type: [{ form: "дневная", period: 5 }],
//   },
//   {
//     id: 2,
//     code: "1-19 01 01-05",
//     name: "Дизайн (костюма и тканей)",
//     type: [{ form: "дневная", period: 5 }],
//   },
//   {
//     id: 3,
//     code: "1-19 01 01-06",
//     name: "Дизайн (виртуальной среды)",
//     type: [{ form: "дневная", period: 5 }],
//   },
//   {
//     id: 4,
//     code: "1-19 01 01-06",
//     name: "Изобразительное искусство и компьютерная графика",
//     type: [
//       { form: "дневная", period: 5 },
//       { form: "заочная (сокращенная)", period: 3.5 },
//     ],
//   },
//   {
//     id: 5,
//     code: "1-03 01 08",
//     name: "Музыкальное искусство и мировая художественная культура",
//     type: [{ form: "дневная", period: 4 }],
//   },
//   {
//     id: 6,
//     code: "1-18 01 01-02",
//     name: "Народное творчество (инструментальная музыка)",
//     type: [{ form: "дневная", period: 4 }],
//   },
// ];

// const specMat = [
//   {
//     id: 1,
//     code: "1-40 03 01",
//     name: "Искусственный интеллект ",
//     type: [{ form: "дневная", period: 4 }],
//   },
//   {
//     id: 2,
//     code: "1-98 01 01",
//     name: "Компьютерная безопасность",
//     type: [{ form: "дневная", period: 4 }],
//   },
//   {
//     id: 3,
//     code: "1-31 03 01-02",
//     name: "Математика (научно-педагогическая деятельность)",
//     type: [{ form: "дневная", period: 4 }],
//   },
//   {
//     id: 4,
//     code: "1-31 03 03-01",
//     name: "Прикладная математика (научно-производственная деятельность)",
//     type: [{ form: "дневная", period: 4 }],
//   },
//   {
//     id: 5,
//     code: "1-40 01 01",
//     name: "Программное обеспечение информационных технологий",
//     type: [{ form: "дневная", period: 4 }],
//   },
//   {
//     id: 6,
//     code: "1-26 03 01",
//     name: "Управление информационными ресурсами",
//     type: [{ form: "дневная", period: 4 }],
//   },
// ];

const SpecialitiesList = ({ faculty }) => {
  // const specialities = faculty.id == 1 ? specMat : specFiid;
  const specialities = faculty.specialities;

  const renderedSpecialities = specialities.map((spec) => {
    return (
      <Link key={spec.id} to={`/specialities/${spec.name}`}>
        <li className="row speciality">
          <div className="f-col">{spec.specialityCode}</div>
          <div className="s-col">{spec.name}</div>
          <div className="spec-form">
            {spec.educationForms.map((form) => {
              return (
                <div className="form-row">
                  <div className="t-col">{form.title}</div>
                  <div className="four-col">{form.termOfStudy}</div>
                </div>
              );
            })}
          </div>
        </li>
      </Link>
    );
  });

  //with use effect make request to get specialities
  return (
    <div className="specialities-list">
      <div className="table">
        <div className="row table-header">
          <div className="f-col">Код специальности</div>
          <div className="s-col">название специальности</div>
          <div className="t-col">Форма получения образования</div>
          <div className="four-col">Срок обучения (в годах)</div>
        </div>
      </div>
      {renderedSpecialities}
    </div>
  );
};

export default SpecialitiesList;
