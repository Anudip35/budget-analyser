import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  Divider,
} from "@material-ui/core";

import useStyles from "./styles";
import Form from "./Form/Form";
import List from "./List/List";

import { BudgetAnalyserContext } from "../../context/context";
import InfoCard from "../InfoCard";

const Main = () => {
  const classes = useStyles();
  const { balance } = useContext(BudgetAnalyserContext);

  return (
    <Card className={classes.root}>
      <CardContent>
        <h1 style={{ textAlign: "center", margin: "0" }}>
          Total Balance ₹{balance}
        </h1>
        <InfoCard />
        <Divider />
        <Form />
      </CardContent>
      <CardContent
        className={classes.cartContent}
        style={{ paddingBottom: "8px" }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
