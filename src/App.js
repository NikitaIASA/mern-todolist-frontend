import { Route, Routes } from "react-router-dom";

import Layout from "./layout/Layout";
import Home from './pages/Home';
import AllTasks from './pages/AllTasks';
import CompletedTasks from './pages/CompletedTasks'
import Priorities from './pages/Priorities'
import Favorites from "./pages/Favorites";
import Registration from "./pages/Registration";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/all-tasks" element={<AllTasks />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/completed-tasks" element={<CompletedTasks />} />
        <Route path="/priorities" element={<Priorities />} />
        <Route path="/register" element={<Registration/>}/>
        <Route path="/login" element={<Login/>}/>
    </Route>
  </Routes>
  );
}

export default App;
