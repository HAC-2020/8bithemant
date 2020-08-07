import colors from "../constants/colors";
import sizes from "./sizes";

export default {
  

  number: {
    color: (props) => {
      let color;
      let title = props.title.toLowerCase();
      if (title === "recovered") {
        color = colors.green;
      } else if (title === "deceased") {
        color = colors.purple;
      } else if (title === "active") {
        color = colors.orange;
      } else if (title === "confirmed") {
        color = colors.red;
      }
      return color;
    },
    fontSize: (props) => (props.isMiniPanel ? "2.2rem" : "3.5rem"),
    paddingTop: ".5rem",
    paddingBottom: ".5rem",

    [sizes.down("lg")]: {
      fontSize: (props) => (props.isMiniPanel ? "1.5rem" : "3rem"),
    },

    [sizes.down("md")]: {
      fontSize: (props) => (props.isMiniPanel ? "1.5rem" : "2rem"),
    },
  },

  dataChange: {
    fontSize: (props) => (props.isMiniPanel ? "1.4rem" : "inherit"),
    color: (props) => {
      let color;
      let title = props.title.toLowerCase();
      if (title === "recovered") {
        color = colors.green;
      } else if (title === "deceased") {
        color = colors.purple;
      } else if (title === "active") {
        color = colors.orange;
      } else if (title === "confirmed") {
        color = colors.red;
      }
      return color;
    },
  },
};
