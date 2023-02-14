import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/slices/tasks";
import { TextField, Button } from "@mui/material";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";

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
      priority: "",
    },
  });

  const onSubmit = async (values) => {
    const data = await dispatch(
      addTask({
        // ! Переписать это
        title: values.title,
        desc: values.desc,
        priority: values.priority,
        completed: false,
        specialSelected: false,
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
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <FormControl className={styles.formControl}>
          <InputLabel>Пріоритет</InputLabel>
          <Select
            {...register("priority", { required: "Оберіть пріорітет" })}
            label="Пріоритет"
          >
            <MenuItem value={"high"}>high</MenuItem>
            <MenuItem value={"medium"}>medium</MenuItem>
            <MenuItem value={"low"}>low</MenuItem>
          </Select>
        </FormControl>

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
