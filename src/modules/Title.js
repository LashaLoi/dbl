import React from "react";

import { useMediaQuery } from "react-responsive";

import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

import { Logo } from "./Logo";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    color: "#AF9453"
  },
  toolbar: {
    padding: 20,
    margin: "0 5%",
    color: "#AF9453"
  },
  appBar: {
    background: "#fff"
  }
}));

export const Title = ({ setOpen }) => {
  const classes = useStyles();

  const isTabletOrMobile = useMediaQuery({ maxWidth: 850 });

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title}>
            <Logo /> DBL
          </Typography>
          {isTabletOrMobile ? (
            <IconButton color="inherit">
              <MenuIcon onClick={setOpen} />
            </IconButton>
          ) : (
            <div className="title-container">
              <Link color="inherit">Главная</Link>
              <Link color="inherit">Услуги</Link>
              <Link color="inherit">О нас</Link>
              <Link color="inherit">Галерея</Link>
              <Link color="inherit">Связаться</Link>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};
