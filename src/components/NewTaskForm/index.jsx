import React, {useEffect} from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/slices/tasks";
import { TextField, Button } from "@mui/material";

import styles from "./NewTaskForm.module.scss";

const AddTaskForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful, errors, isValid },
  } = useForm({
    defaultValues: {
      title: "",
      desc: "",
    },
  });

  const onSubmit = async (values) => {
    const data = await dispatch(
      addTask({
        // ! Переписать это
        title: values.title,
        desc: values.desc,
        completed: false,
        specialSelected: false,
        priority: "high",
      })
    );
    console.log(data);
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset, isSubmitSuccessful]);

  return (
    <div className={styles.newTaskForm}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className={styles.field}
          label="Назва таски"
          error={Boolean(errors.title?.message)}
          helperText={errors.title?.message}
          {...register("title", { required: "Напишіть назву таски" })}
          fullWidth
        />
        <TextField
          className={styles.field}
          label="Опис таски"
          error={Boolean(errors.desc?.message)}
          helperText={errors.desc?.message}
          {...register("desc", { required: "Напишіть опис таски" })}
          fullWidth
        />
        <Button
          disabled={!isValid}
          type="submit"
          size="large"
          variant="contained"
          fullWidth
        >
          Створити
        </Button>
      </form>
    </div>
  );
};

export default AddTaskForm;
