import { makeStyles } from "@material-ui/styles";
import { colors } from "@client/utils/colors";

export default makeStyles({
  window: {
    backgroundColor: "#fff",
    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.35)",
  },
  window_title: {
    display: "flex",

    backgroundColor: colors.secondary,

    color: "#fff",
    fontSize: 14,
  },
  window_title_col: {
    padding: 15,
    width: 150,
    display: "flex",
    alignItems: "center",

    cursor: "pointer",

    "&>img": {
      marginLeft: 5,
      opacity: 0.5,
    },

    "&:hover >img": {
      opacity: 1,
    },

    "&-1": {
      width: 150,
    },

    "&-2": {
      width: 200,
    },

    "&-revert": {
      "&>img": {
        transform: "rotate(180deg)",
      },
    },

    "&-active": {
      "&>img": {
        opacity: 1,
      },
    },
  },
  window_content: {
    fontSize: 12,
    maxHeight: 480,
    overflowY: "auto",
  },
  window_row: {
    display: "flex",
    alignItems: "center",

    backgroundColor: "#fff",

    cursor: "pointer",

    "&:hover": {
      backgroundColor: "#dbdbdb",
    },

    "&:nth-child(2n)": {
      backgroundColor: "#EFEFF0",

      "&:hover": {
        backgroundColor: "#dbdbdb",
      },
    },
  },
  window_action: {
    padding: 15,
    display: "block",

    backgroundColor: colors.primary,
    border: 0,

    color: "#fff",
    fontSize: 18,
    textAlign: "center",

    cursor: "pointer",
  },
});
