import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./pages/Home";
import AllTasks from "./pages/AllTasks";
import Registration from "./pages/Registration";
import Login from "./pages/Login";

import { useDispatch } from "react-redux";
import { fetchAuthMe } from "./redux/slices/auth";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);
  return (
    <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/all-tasks" element={<AllTasks />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
    </>
  );
}

export default App;
