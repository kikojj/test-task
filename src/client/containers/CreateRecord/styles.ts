import { makeStyles } from "@material-ui/styles";
import { colors } from "@client/utils/colors";

export default makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "100%",
    height: "100%",

    backgroundColor: "rgba(0,0,0,0.2)",

    cursor: "pointer",

    position: "fixed",
    zIndex: 10,
    top: 0,
    left: 0,
  },
  window: {
    padding: 20,

    backgroundColor: "#fff",

    cursor: "default",
  },
  window_input_date: {
    marginTop: 10,
    display: "block",

    width: 300,
    border: 0,
    outline: "none",

    fontSize: 14,
  },
  window_input_distance: {
    marginTop: 10,
    display: "block",

    width: 300,
    borderBottom: `1px solid ${colors.secondary}`,

    fontSize: 14,
  },
  window_btn: {
    margin: "20px auto 0 auto",
    padding: 15,

    display: "block",
    width: 100,

    backgroundColor: colors.primary,

    fontSize: 14,
    color: "#fff",

    cursor: "pointer",
  },
});
