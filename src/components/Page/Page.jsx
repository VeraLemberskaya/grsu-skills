import React from "react";
import { useAnim } from "../../hooks/useAnim";

const Page = ({ children }) => {
  const { animation } = useAnim();
  return (
    <div
      className="page"
      style={{
        animationName: animation,
        animationDuration: "0.5s",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
};

export default Page;
