import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getTasks } from "../../API/tasksAPI";

import { getTasks } from "../../redux/slices/tasks";
import { selectIsAuth } from "../../redux/slices/auth";

import { Container } from "@mui/system";

import TaskItem from "../../components/TaskItem";
import TaskForm from "../../components/TaskForm";

import styles from "./AllTasks.module.scss";

const AllTasks = () => {
  const tasks = useSelector((state) => state.tasks.items);
  const isAuth = useSelector(selectIsAuth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  return (
    <>
      <main className={styles.main}>
        <Container maxWidth="lg">
          <div className={styles.inner}>
            {isAuth ? (
              <>
                <ul className={styles.list}>
                  {tasks ? (
                    tasks.map((task) => (
                      <TaskItem
                        key={task._id}
                        id={task._id}
                        title={task.title}
                        desc={task.desc}
                      />
                    ))
                  ) : (
                    <p>No Tasks</p>
                  )}
                </ul>
                <TaskForm/>
              </>
            ) : (
              <>
                <p>Треба авторизуватися</p>
              </>
            )}
          </div>
        </Container>
      </main>
    </>
  );
};

export default AllTasks;
