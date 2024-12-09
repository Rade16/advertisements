import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
const Layout = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Header onSearch={setSearchQuery} />
      <Outlet context={{ searchQuery }} />
      <Footer />
    </>
  );
};

export default Layout;
