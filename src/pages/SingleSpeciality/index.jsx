import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleSpeciality = () => {
  const { title } = useParams();

  return (
    <div>
      <h1>{title}</h1>
      <button>Click me</button>
      <button>Click me</button>
    </div>
  );
};

export default SingleSpeciality;
