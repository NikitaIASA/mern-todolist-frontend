import React from "react";

import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";

import styles from "./TaskModal.module.scss";

const TaskModal = ({ task, onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.TaskModal}>
        <Button className={styles.closeBtn} onClick={onClose}>
          <CloseIcon />
        </Button>
        <p className={styles.title}>{task.title}</p>
        <p className={styles.title}>{task.desc}</p>
        <span className={styles.isDone}>{task.completed ? "Виконано" : "Не виконано"}</span>
        <span className={styles.priorite}>{task.priority}</span>
      </div>
    </div>
  );
};

export default TaskModal;
