import React from "react";

import Navbar from "../components/Navbar/Navbar";
import Header from "./Header";

import Grid from '@mui/material/Grid';

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header/>
      <Outlet /> 
    </>
  );
};

export default Layout;
