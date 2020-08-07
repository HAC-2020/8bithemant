import { withStyles } from "@material-ui/styles";
import React, { Component } from "react";
import First from "../static/01.svg";
import Second from "../static/02.svg";
import Third from "../static/03.svg";
import Fourth from "../static/04.svg";
import Fifth from "../static/05.svg";
import Sixth from "../static/06.svg";
import styles from "../styles/StaySafeStyles";
import Cards from "./Cards";

class StaySafe extends Component {
  render() {
    const svgIcons = [
      { src: First, title: "Wash Your Hands Often", link: "/stay-safe/wash" },
      { src: Second, title: "Wear a Mask", link:"/stay-safe/wear-mask" },
      { src: Third, title: "Use Alcohol Based Sanitizer", link :"/stay-safe/use-alcohol" },
      { src: Fourth, title: "Visit Doctor Incase of any Symptoms", link:"/stay-safe/visit-doctor" },
      { src: Fifth, title: "Keep Distance" , link:"/stay-safe/keep-distance"},
      { src: Sixth, title: "Stay Home Stay Safe", link:"/stay-safe/stay-home"},
    ];
    const { classes, isDarkMode } = this.props;
    return (
      <div className={classes.staySafe}>
        <h1>Stay Safe</h1>
        <div className={classes.cardsBox}>
          {svgIcons.map((s, i) => (
         
           
           <Cards direct={s.link}
              key={i}
              src={s.src}
              title={s.title}
              isDarkMode={isDarkMode}
              
              
            />
          ))}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(StaySafe);
