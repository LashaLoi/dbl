import React, { useReducer, useState } from "react";
import { Logo } from "../../Logo";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import { Container } from "../../../components/Container";

import "./index.scss";

const useStyles = makeStyles(theme => ({
  close: {
    padding: theme.spacing(0.5)
  }
}));

export const Form = () => {
  const initialState = {
    name: "",
    email: "",
    message: "",
    phone: "",
    loading: false
  };

  const [{ name, email, message, phone, loading }, setState] = useReducer(
    (s, a) => ({ ...s, ...a }),
    initialState
  );
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = ({ target: { value, name } }) =>
    setState({ [name]: value });

  const classes = useStyles();

  const handleClick = error => {
    setError(!error);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    setState({ loading: true });

    try {
      await axios.post("http://localhost:8080/api/send", {
        name,
        phone,
        message,
        email
      });

      handleClick(true);
    } catch (error) {
      handleClick(false);
    } finally {
      setState(initialState);
    }
  };

  return (
    <Container>
      <div className="contuct-up">
        <div className="contact-card">
          <Logo />
          <div className="contact-card-text">
            Обращайтесь, чтобы воплотить мечты в жизнь.
          </div>
        </div>
        <div className="form">
          <form onSubmit={handleSubmit} className="form-container">
            <div className="form-title">
              Пожалуйста, заполните форму, и мы свяжемся с вами в ближайшее
              время.
            </div>
            <div className="form-required-controlls">
              <input
                type="text"
                className="name"
                required
                placeholder="Name *"
                name="name"
                onChange={handleChange}
                value={name}
              />
              <input
                type="email"
                className="email"
                required
                placeholder="Email *"
                name="email"
                onChange={handleChange}
                value={email}
              />
            </div>
            <input
              type="text"
              className="phone"
              required
              placeholder="Phone *"
              name="phone"
              onChange={handleChange}
              value={phone}
            />
            <textarea
              className="message"
              required
              placeholder="Message *"
              name="message"
              onChange={handleChange}
              value={message}
            ></textarea>
            <button type="submit" disabled={loading}>
              {loading ? "Отправка..." : "Отправить"}
            </button>
          </form>
        </div>
      </div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        message={
          <span id="message-id">
            {!error
              ? "Сообщение отправлено"
              : "Проблемы с сервером, попробуйте позже"}
          </span>
        }
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            className={classes.close}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    </Container>
  );
};
