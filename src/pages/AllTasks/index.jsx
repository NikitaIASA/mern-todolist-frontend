import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../redux/slices/tasks";
import { getTasks } from "../../API/tasksAPI";

const ALlTasks = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch;

  useEffect(() => {
    (async () => {
      const data = await getTasks();
      data.forEach((task) => dispatch(addTask(task)));
    })();
  }, [dispatch]);

  return (
    <Grid item xs={8}>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.title}
          </li>
        ))}
      </ul>
    </Grid>
  );
};

export default ALlTasks;
