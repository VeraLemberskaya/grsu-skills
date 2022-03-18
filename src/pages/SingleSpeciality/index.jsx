import React from "react";
import { useParams } from "react-router-dom";

const SingleSpeciality = () => {
  const { title } = useParams();
  return <div>{title}</div>;
};

export default SingleSpeciality;
