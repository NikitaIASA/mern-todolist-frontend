import React from "react";

import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from "react-redux";
import { toggleTaskCompletion, removeTask } from "../../redux/slices/tasks";

import styles from "./TaskItem.module.scss";


const TaskItem = ({title, desc, id, showModal, completed}) => {

  const disptach = useDispatch();

  const removeTaskHandler = () => {
    if (window.confirm("Ви впевнені, що хочете вдалити таску?")) {
      disptach(removeTask(id));
    }
  }
  
  const toggleTaskCompletionHandler = () => {
    disptach(toggleTaskCompletion(id));
  };

  return (
    <li className={styles.item}>
      <div className={styles.text} onClick={showModal}>
        <p className={`${styles.title} ${completed ? styles.completed : ""}`}>{title}</p>
        {/* <p className={styles.desc}>{desc}</p> */}
      </div>
      <div className={styles.buttons}>
        <Checkbox checked={completed} color="success" className={styles.button} onClick={toggleTaskCompletionHandler}/>
        <DeleteIcon className={styles.deleteButton} onClick={removeTaskHandler}/>
      </div>
    </li>
  );
};

export default TaskItem;
