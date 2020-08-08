import { withStyles } from "@material-ui/styles";
import classNames from "classnames";
import React, { Component } from "react";
import styles from "../styles/FooterStyles.js";

class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
      <footer className={classes.footer}>
        <a
          href="https://github.com/8bithemant"
          target="_blank"
          rel="noopener noreferrer"
          className={classNames(classes.btn, classes.github)}
        >
          Github
        </a>
        <a
          href="https://twitter.com/intent/tweet?text=Get the latest Covid-19 updates with Covid-19 India Tracker!&url=https://indiawinscovid.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className={classNames(classes.btn, classes.twitter)}
        >
          Share on Twitter
        </a>
        <a
          href="https://github.com/PrinceSumberia/covid-19-tracker/issues/new"
          target="_blank"
          rel="noopener noreferrer"
          className={classNames(classes.btn, classes.issue)}
        >
          Report an Issue
        </a>
      </footer>
      <h3 style={{"textAlign":"center"}}> Every Life Matters.</h3>
      </div>
    );
  }
}
export default withStyles(styles)(Footer);
