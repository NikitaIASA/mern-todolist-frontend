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
          <p className={styles.infoBlock__text}>{task.title}</p>
        </div>
        <div className={styles.infoBlock}>
          <span className={styles.infoBlock__title}>Опис</span>
          <p className={styles.infoBlock__text}>{task.desc}</p>
        </div>
        <div className={styles.infoBlock}>
          <span className={styles.infoBlock__title}>Статус</span>
          <p className={styles.infoBlock__text}>
            {task.completed ? "Виконано" : "Не виконано"}
          </p>
        </div>
        <div className={styles.infoBlock}>
          <span className={styles.infoBlock__title}>Пріоритет</span>
          <p className={styles.infoBlock__text}>{task.priority}</p>
        </div>
        <CloseIcon className={styles.closeBtn} onClick={onClose} />
      </div>
    </div>
  );
};

export default TaskModal;
