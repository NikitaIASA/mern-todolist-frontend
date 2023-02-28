import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
// import { getTasks } from "../../API/tasksAPI";
import { getTasks } from "../../redux/slices/tasks";
import { selectIsAuth } from "../../redux/slices/auth";
import { setCompletedFilter } from "../../redux/slices/filter";

import TaskItem from "../../components/TaskItem";
import NewTaskForm from "../../components/NewTaskForm";

import styles from "./AllTasks.module.scss";
import TaskModal from "../../components/TaskModal";

const AllTasks = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const [selectedTask, setSelectedTask] = useState(null);
  const tasks = useSelector((state) => state.tasks.items);
  const { completed} = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(getTasks({ completed }));
  }, [dispatch, completed]);

  const fetchCompletedTasks = () => {
    dispatch(setCompletedFilter(true));
  };

  const fetchNonCompletedTasks = () => {
    dispatch(setCompletedFilter(false));
  };

  const fetchAllTasks = () => {
    dispatch(setCompletedFilter(''));
  };

  return (
    <>
      <main className={styles.main}>
        <div className={styles.inner}>
          {isAuth ? (
            <>
              <div className={styles.buttons}>
                <Button variant="contained" className={styles.filterButton} onClick={fetchAllTasks}>All</Button>
                <Button variant="contained" className={styles.filterButton} onClick={fetchCompletedTasks}>Done</Button>
                <Button variant="contained" className={styles.filterButton} onClick={fetchNonCompletedTasks}>Todo</Button>
              </div>
              <NewTaskForm />
              <ul className={styles.list}>
                {tasks ? (
                  tasks.map((task) => (
                    <TaskItem
                      key={task._id}
                      id={task._id}
                      title={task.title}
                      desc={task.desc}
                      completed={task.completed}
                      showModal={() => {
                        setSelectedTask(task);
                        console.log(task);
                      }}
                    />
                  ))
                ) : (
                  <p>No Tasks</p>
                )}
              </ul>
              <div className={styles.buttons}>
                <Button variant="contained" className={styles.filterButton} onClick={fetchAllTasks}>Delete done tasks</Button>
                <Button variant="contained" className={styles.filterButton} onClick={fetchCompletedTasks}>Delete all tasks</Button>
                
              </div>

              {selectedTask && (
                <TaskModal
                  task={selectedTask}
                  onClose={() => setSelectedTask(null)}
                />
              )}
            </>
          ) : (
            <>
              <p>Треба авторизуватися</p>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default AllTasks;
