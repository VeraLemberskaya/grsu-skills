import React from "react";

const competencies = [
  {
    title: "Аберрация оптических систем",
    text: "Аберрация оптических систем - искажение изображения, вызываемое несовершенством реальных оптических систем.",
  },
  {
    title: "Аберрация глаза",
    text: "Аберрация глаза - искажение изображения на сетчатке вследствие несовершенства оптической системы глаза. Различа ют Дифракционную,сферическую и хроматическую аберрации глаза.",
  },
  {
    title: "Абордаж",
    text: "Абордаж - способ ведения боя гребными и парусными судами; сцепление атакующего корабля с неприятельским кораблем с целью его захвата в рукопашном бою.",
  },
  {
    title: "Абиотическая среда",
    text: "Абиотическая среда - неживое физическое и химическое окружение живых организмов. Абиотическую среду составляют природные условия, происхождение которых непосредственно не связано с жизнедеятельностью живущих организмов.",
  },
  {
    title: "Абиотические факторы среды",
    text: "Абиотические факторы среды - компоненты и явления неживой, неорганической природы, прямо или косвенно воздействующие на живые организмы: климатические, почвенные и гидрографические факторы.",
  },
  {
    title: "Абонентская система",
    text: "Абонентская система - в информационных сетях - система, которая является поставщиком или потребителем информации. Абонентская система реализуется в виде одного либо нескольких устройств.",
  },
];

const GlossaryGrid = () => {
  const createColumns = () => {
    console.log(1);
    let col1 = [],
      col2 = [],
      col3 = [];
    let counter = 1;
    competencies.forEach((comp) => {
      if (counter === 1) col1.push(comp);
      else if (counter === 2) col2.push(comp);
      else {
        col3.push(comp);
        counter = 0;
      }
      counter++;
    });

    const createColumnOne = () => {
      return (
        <div className="column col-1">
          {col1.map((comp) => {
            return (
              <article className="glossary-card">
                <h4 className="title">{comp.title}</h4>
                <p className="text-info">{comp.text}</p>
              </article>
            );
          })}
        </div>
      );
    };

    const createColumnTwo = () => {
      return (
        <div className="column col-2">
          {col2.map((comp) => {
            return (
              <article className="glossary-card">
                <h4 className="title">{comp.title}</h4>
                <p className="text-info">{comp.text}</p>
              </article>
            );
          })}
        </div>
      );
    };

    const createColumnThree = () => {
      return (
        <div className="column col-3">
          {col3.map((comp) => {
            return (
              <article className="glossary-card">
                <h4 className="title">{comp.title}</h4>
                <p className="text-info">{comp.text}</p>
              </article>
            );
          })}
        </div>
      );
    };

    return [createColumnOne, createColumnTwo, createColumnThree];
  };

  const renderedColumns = createColumns().map((createCol) => {
    return createCol();
  });
  return <div className="glossary-grid">{renderedColumns}</div>;
};

export default GlossaryGrid;
