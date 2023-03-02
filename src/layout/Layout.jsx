import React from "react";

import Header from "./Header";

import { Outlet } from "react-router-dom";
import { Container } from "@mui/system";

const Layout = () => {
  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
