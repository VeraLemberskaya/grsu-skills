import React from "react";

const GlossaryGrid = ({ competencies }) => {
  const createColumns = () => {
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
