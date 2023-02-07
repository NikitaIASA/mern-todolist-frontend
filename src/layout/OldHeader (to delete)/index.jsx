import React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

import { NavbarItems } from "../../components/Navbar/NavbarItems";

import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth, logout } from "../../redux/slices/auth";
import { Link, useNavigate } from "react-router-dom";

import styles from "./Header.module.scss";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  

  const onClickLogout = () => {
    if (window.confirm("Ви впевнені, що хочете вийти?")) {
      dispatch(logout());
      window.localStorage.removeItem("token");
    }
  };

  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <Link className={styles.logo} to="/">
            TodoList
          </Link>
          <div className={styles.buttons}>
            {isAuth ? (
              <>
                <Link to="/">
                  <Button variant="contained">Створити таск</Button>
                </Link>
                <Button
                  onClick={onClickLogout}
                  variant="contained"
                  color="error"
                >
                  Вийти
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outlined">Увійти</Button>
                </Link>
                <Link to="/register">
                  <Button variant="contained">Створити аккаунт</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
