import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import { useDispatch, useSelector } from "react-redux";
// import {fetchAuth} from "../../API/authAPI";
import { useForm } from "react-hook-form";
import { selectIsAuth, fetchAuth} from "../../redux/slices/auth";

import styles from "./Login.module.scss";
import { Navigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));

    if (!data.payload) {
      alert("Не вдалося авторизоватися")
    }

    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    } 
  };

  if (isAuth) {
    return <Navigate to='/'/>;
  }

  return (
    <Paper className={styles.root}>
      <Typography className={styles.title} variant="h5">
        Вхід в аккаунт
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className={styles.field}
          label="E-Mail"
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          {...register("email", { required: "Укажіть пошту" })}
          fullWidth
        />
        <TextField
          className={styles.field}
          label="Пароль"
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          {...register("password", { required: "Укажіть пароль" })}
          fullWidth
        />
        <Button type="submit" size="large" variant="contained" fullWidth>
          Увійти
        </Button>
      </form>
    </Paper>
  );
};

export default Login;
