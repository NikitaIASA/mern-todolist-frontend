import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
// import { getTasks } from "../../API/tasksAPI";
import {getTasks} from "../../redux/slices/tasks";

const ALlTasks = () => {
  const tasks = useSelector((state) => state.tasks.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, [])
  
  return (
    <Grid item xs={8}>
      <ul>
        {tasks.map((t) => (
          <li key={t._id}>
            {t.title}
          </li>
        ))}
      </ul>
    </Grid>
  );
};

export default ALlTasks;
