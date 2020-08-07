import { withStyles } from "@material-ui/styles";
import React from "react";
import styles from "../styles/OverviewStyles";

function Overview(props) {
  const { classes, isDarkMode } = props;
  const {
    active,
    confirmed,
    deaths,
    recovered,
    deltaconfirmed,
    deltadeaths,
    deltarecovered,
  } = props.data;

  const deltaActive =
    Number(deltaconfirmed) - (Number(deltadeaths) + Number(deltarecovered));

  return (
    <div className={classes.root}>
      <div className={classes.panels}>
        <div className={classes.panelContainer}>
          
            title="Confirmed"
            number={confirmed}
            isDarkMode={isDarkMode}
            dataChange={deltaconfirmed > 0 ? deltaconfirmed : "-"}
          
        </div>
        <div className={classes.panelContainer}>
         
            title="Active"
            number={active}
            isDarkMode={isDarkMode}
            dataChange={deltaActive}
          
        </div>
        <div className={classes.panelContainer}>
          
            title="Recovered"
            number={recovered}
            isDarkMode={isDarkMode}
            dataChange={deltarecovered}
        
        </div>
        <div className={classes.panelContainer}>
        
            title="Deceased"
            number={deaths}
            isDarkMode={isDarkMode}
            dataChange={deltadeaths}
          
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Overview);
