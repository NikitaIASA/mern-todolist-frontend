import React, {useState} from "react";

import {Container, Button, AppBar, Box, Toolbar, Typography, IconButton, Menu, MenuItem} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu";
import { menuItems } from "./menuItems";

import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth, logout } from "../../redux/slices/auth";
import { Link, useNavigate } from "react-router-dom";

import styles from "./Header.module.scss";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const openMenuHandler = (event) => {
    setOpenMenu(event.currentTarget);
  };

  const closeMenuHandler = () => {
    setOpenMenu(null);
  };

  const onClickLogout = () => {
    if (window.confirm("Ви впевнені, що хочете вийти?")) {
      dispatch(logout());
      window.localStorage.removeItem("token");
    }
  };

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Link className={styles.logo} to="/">
            TodoList
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={openMenuHandler}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={openMenu}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(openMenu)}
              onClose={closeMenuHandler}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {menuItems.map((menuItem) => (
                <MenuItem key={menuItem} onClick={closeMenuHandler}>
                  <Typography textAlign="center" sx={{mr: 1}}>{menuItem.icon}</Typography>
                  <Typography textAlign="center" onClick={() => navigate(menuItem.route)} >{menuItem.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {menuItems.map((page) => (
              <Button
                key={page}
                onClick={() => navigate(page.route)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.label}
              </Button>
            ))}
          </Box>
          <Box className={styles.buttons}>
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
                  <Button variant="contained" color="error">
                    Увійти
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="contained" color="error">
                    Створити аккаунт
                  </Button>
                </Link>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
