import { makeStyles } from "@material-ui/styles";
import { colors } from "./colors";

export default makeStyles({
  "@global": {
    "*, html, body": {
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
      outline: "none",
      border: 0,
      fontFamily: "'PT Sans Caption', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    },
    "body, #app": {
      height: "100vh",
      width: "100vw",
    },
  },
  app: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    padding: "15px 20px",

    width: "100%",
    backgroundColor: colors.secondary,

    fontSize: 24,
    fontWeight: 700,
    color: "#fff",
  },
  container: {
    display: "flex",
    height: 580,
    width: "100%",

    alignItems: "center",
    justifyContent: "center",
    flex: 1,

    backgroundColor: "#EFEFF0",
  },
});
