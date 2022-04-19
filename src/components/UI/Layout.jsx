import React from "react";
import NavMenu from "../NavMenu";
import ScrollToTop from "../Utils/ScrollToTop";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavMenu />
      <ScrollToTop />
      <Outlet />
    </>
  );
};

export default Layout;
