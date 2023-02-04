import React from "react";

import Navbar from "../components/Navbar/Navbar";

import Grid from '@mui/material/Grid';

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Grid container>
      <Navbar />
      <Outlet />
    </Grid>
  );
};

export default Layout;
