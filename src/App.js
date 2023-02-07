import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./pages/Home";
import AllTasks from "./pages/AllTasks";
import CompletedTasks from "./pages/CompletedTasks";
import Priorities from "./pages/Priorities";
import Favorites from "./pages/Favorites";
import Registration from "./pages/Registration";
import Login from "./pages/Login";

import Header from "./layout/Header";
import { Container } from "@mui/material";
import { useDispatch } from "react-redux";
import { fetchAuthMe } from "./redux/slices/auth";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);
  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/all-tasks" element={<AllTasks />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/completed-tasks" element={<CompletedTasks />} />
            <Route path="/priorities" element={<Priorities />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
