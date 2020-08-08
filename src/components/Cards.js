import { withStyles } from "@material-ui/styles";
import React from "react";
import styles from "../styles/CardsStyles";
import {Link} from 'react-router-dom'

function Cards({ title, src, classes, direct }) {
  return (
    <div className={classes.card}>
      <Link to={direct} style={{textDecoration:"none"}}>
      <h3 className={classes.cardTitle}>{title}</h3>
      <img src={src} alt={title} className={classes.cardImage} />
      </Link>
    </div>
  );
}

export default withStyles(styles)(Cards);
