import React from "react";

import { navigate } from "@reach/router";

import { useMediaQuery } from "react-responsive";

import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

import { Logo } from "../Logo/";

import "./index.scss";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    color: "#AF9453",
    cursor: "pointer"
  },
  toolbar: {
    padding: 20,
    margin: "0 5%",
    color: "#000"
  },
  appBar: {
    background: "#fff"
  },
  link: {
    fontSize: "1.3rem",
    cursor: "pointer",
    transition: ".2s all ease-in-out",
    textDecoration: "none !important",
    "&:hover": {
      color: "#999"
    }
  }
}));

export const Title = ({ setOpen }) => {
  const classes = useStyles();

  const isTabletOrMobile = useMediaQuery({ maxWidth: 850 });

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            className={classes.title}
            onClick={() => navigate("/")}
          >
            <Logo />
          </Typography>
          {isTabletOrMobile ? (
            <IconButton color="inherit">
              <MenuIcon onClick={setOpen} />
            </IconButton>
          ) : (
            <div className="title-container">
              <Link
                className={classes.link}
                color="inherit"
                onClick={() => navigate("/")}
              >
                Главная
              </Link>
              <Link
                className={classes.link}
                color="inherit"
                onClick={() => navigate("/amenities")}
              >
                Услуги
              </Link>
              <Link
                className={classes.link}
                color="inherit"
                onClick={() => navigate("/about")}
              >
                О нас
              </Link>
              <Link
                className={classes.link}
                color="inherit"
                onClick={() => navigate("/galery")}
              >
                Галерея
              </Link>
              <Link
                className={classes.link}
                color="inherit"
                onClick={() => navigate("/contacts")}
              >
                Контакты
              </Link>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};
