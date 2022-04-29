import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

import React from "react";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
