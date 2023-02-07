import React from "react";
import styles from "./TaskItem.module.scss";

import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

import { useDispatch } from "react-redux";
import { removeTask } from "../../redux/slices/tasks";

const TaskItem = ({title, desc, id}) => {

  const disptach = useDispatch();

  const removeTaskHandler = () => {
    if (window.confirm("Ви впевнені, що хочете вдалити таску?")) {
      disptach(removeTask(id));
    }
  }

  const completeTaskHandler = () => {};

  return (
    <li className={styles.item}>
      <div className={styles.text}>
        <p className={styles.title}>{title}</p>
        <p className={styles.desc}>{desc}</p>
      </div>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={completeTaskHandler}>
        <CheckIcon className={styles.check}/>
        </button>
        <button className={styles.button} onClick={removeTaskHandler}>
          <ClearIcon/>
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
