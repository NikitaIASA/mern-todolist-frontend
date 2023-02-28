import React from "react";

import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";

import styles from "./TaskModal.module.scss";

const TaskModal = ({ task, onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.TaskModal}>
        <div className={styles.infoBlock}>
          <span className={styles.infoBlock__title}>Назва</span>
          <span className={styles.infoBlock__text}>{task.title}</span>
        </div>
        <div className={styles.infoBlock}>
          <span className={styles.infoBlock__title}>Опис</span>
          <span className={styles.infoBlock__text}>{task.desc}</span>
        </div>
        <div className={styles.infoBlock}>
          <span className={styles.infoBlock__title}>Статус</span>
          <span className={styles.infoBlock__text}>
            {task.completed ? "Виконано" : "Не виконано"}
          </span>
        </div>
        <div className={styles.infoBlock}>
          <span className={styles.infoBlock__title}>Пріоритет</span>
          <span className={styles.infoBlock__text}>{task.priority}</span>
        </div>
        <CloseIcon className={styles.closeBtn} onClick={onClose} />
      </div>
    </div>
  );
};

export default TaskModal;
