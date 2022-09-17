import React from "react";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import useTransactions from "../../useTransactions";

import useStyles from "./styles";

const Details = ({ title }) => {
  const classes = useStyles();
  const { total, chartData } = useTransactions(title);
  Chart.register(ArcElement, Tooltip, Legend);
  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <CardHeader title={title} style={{ width: "300px", padding: "9px" }} />
      <CardContent className={classes.component}>
        ₹{total}
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
};

export default Details;
