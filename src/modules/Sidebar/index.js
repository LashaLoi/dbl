import React from "react";

import { navigate } from "@reach/router";

import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative",
    color: "#fff"
  },
  title: {
    marginLeft: theme.spacing(3),
    flex: 1
  }
}));

const links = [
  { id: 11, name: "Главная", link: () => navigate("/") },
  { id: 21, name: "Услуги", link: () => navigate("/amenities") },
  { id: 31, name: "О нас", link: () => navigate("/about") },
  { id: 41, name: "Галерея", link: () => navigate("/galery") },
  { id: 234, name: "Контакты", link: () => navigate("/contact") }
];

const Transition = React.forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

export const Sidebar = ({ open, setClose }) => {
  const classes = useStyles();

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={setClose}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={setClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            DBL
          </Typography>
        </Toolbar>
      </AppBar>
      <List>
        {links.map(({ id, name, link }) => (
          <>
            <Divider />
            <ListItem key={id} button onClick={setClose}>
              <ListItemText primary={name} onClick={link} />
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Dialog>
  );
};
