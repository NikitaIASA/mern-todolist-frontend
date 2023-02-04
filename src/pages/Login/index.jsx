import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import styles from "./Login.module.scss";

const Login = () => {
  return (
    <Paper className={styles.root}>
      <Typography className={styles.title} variant="h5">
        Вхід в аккаунт
      </Typography>
      <TextField
        className={styles.field}
        label="E-Mail"
        error
        helperText="Неправильна пошта"
        fullWidth
      />
      <TextField className={styles.field} label="Пароль" fullWidth />
      <Button size="large" variant="contained" fullWidth>
        Увійти
      </Button>
    </Paper>
  );
};

export default Login;