import React from "react";

import Fade from "react-reveal/Fade";

import { makeStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { Container } from "../components/Container";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    maxWidth: 500
  }
}));

export const About = () => {
  const classes = useStyles();

  return (
    <Container>
      <div className="about">
        <Fade>
          <div className="about-container center title">О нас</div>
        </Fade>
        <div className="about-container left">
          <Fade left>
            <Paper className={classes.root}>
              <Typography variant="h5" component="h3">
                Надежность
              </Typography>
              <Typography component="p">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
                nesciunt ipsa distinctio omnis autem quaerat iure pariatur
                dolores voluptatem? Ab consectetur est sequi tempore asperiores
                nisi nobis sint eligendi voluptatum.
              </Typography>
            </Paper>
          </Fade>
        </div>
        <div className="about-container right">
          <Fade right>
            <Paper className={classes.root}>
              <Typography variant="h5" component="h3">
                Высококвалифицированный специалисты
              </Typography>
              <Typography component="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                blanditiis. Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Eos quaerat corporis labore provident cumque possimus.
              </Typography>
            </Paper>
          </Fade>
        </div>
        <div className="about-container left">
          <Fade left>
            <Paper className={classes.root}>
              <Typography variant="h5" component="h3">
                Большой опыт работы
              </Typography>
              <Typography component="p">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
                consequatur, quod minima fuga architecto modi reprehenderit
                soluta cum possimus quis aliquam sit ea nostrum, quae hic cumque
                qui sint unde?
              </Typography>
            </Paper>
          </Fade>
        </div>
      </div>
    </Container>
  );
};
