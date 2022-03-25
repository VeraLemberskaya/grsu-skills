import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SingleSpeciality = () => {
  const { setJwtToken } = useAuth();
  const { title } = useParams();

  useEffect(() => {
    console.log("render");
  });

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={() => setJwtToken(1)}>Click me</button>
      <button onClick={() => setJwtToken(2)}>Click me</button>
    </div>
  );
};

export default SingleSpeciality;
