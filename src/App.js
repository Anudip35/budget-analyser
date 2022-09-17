import React from "react";
import { Grid } from "@material-ui/core";
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
} from "@speechly/react-ui";

import Main from "./components/Main/Main";
import useStyles from "./styles";
import Details from "./components/Details/Details";

import "./App.css";

const App = () => {
  const classes = useStyles();

  return (
    <>
      <div>
        <Grid
          className={classes.grid}
          container
          spacing={0}
          alignItems="center"
          justifyContent="space-evenly"
          style={{ height: "100vh" }}
        >
          <Grid item xs={12} sm={3} className={classes.mobile}>
            <Details title="Income" />
          </Grid>
          <Grid item xs={12} sm={3} className={classes.main}>
            <Main />
          </Grid>
          <Grid item xs={12} sm={3} className={classes.desktop}>
            <Details title="Income" />
          </Grid>
          <Grid item xs={12} sm={3} className={classes.last}>
            <Details title="Expense" />
          </Grid>
        </Grid>
      </div>
      <PushToTalkButtonContainer>
        <PushToTalkButton captureKey=" " />
      </PushToTalkButtonContainer>
    </>
  );
};

export default App;
