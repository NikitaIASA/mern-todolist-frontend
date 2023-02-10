import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getTasks } from "../../API/tasksAPI";
import { getTasks } from "../../redux/slices/tasks";
import { selectIsAuth } from "../../redux/slices/auth";

import TaskItem from "../../components/TaskItem";
import NewTaskForm from "../../components/NewTaskForm";

import styles from "./AllTasks.module.scss";
import TaskModal from "../../components/TaskModal";

const AllTasks = () => {
  const [selectedTask, setSelectedTask] = useState(null);

  const tasks = useSelector((state) => state.tasks.items);
  const isAuth = useSelector(selectIsAuth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  return (
    <>
      <main className={styles.main}>
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
              <NewTaskForm />
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
