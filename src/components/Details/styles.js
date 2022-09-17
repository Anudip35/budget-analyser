import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  income: {
    borderBottom: "10px solid rgba(0, 255, 0, 0.5)",
    fontSize: "20px",
  },
  expense: {
    borderBottom: "10px solid rgba(255, 0, 0, 0.5)",
    fontSize: "20px",
  },
  component: {
    height: "350px",
    width: "300px",
    margin: "auto",
  },
}));
