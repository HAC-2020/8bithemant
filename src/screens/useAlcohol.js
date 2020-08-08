import { withStyles } from "@material-ui/styles";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/SymptomsStyles";
import Footer from "../components/Footer"

class UseAlcohol extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.symptoms}>
        <h2 className={classes.heading}>
          <h1>Use An Alcohol-Based Hand Sanitizer</h1>
        </h2>
        <div className={classes.content}>
          <div className={classes.mainContent}>
            <div className={classes.alert}>
              <p>
                There’s currently no vaccine to prevent coronavirus disease
                (COVID-19). So, take the necessary preventive measures.
              </p>
            </div>
            <div className={classes.symptomsMain}>
              <p>
              Alcohol-based hand sanitizers — which don't require water — are an excellent alternative to soap and water. If you choose to use a commercially prepared hand sanitizer, make sure the product contains at least 60 percent alcohol.
              </p>
            </div>
            <div className={classes.symptomsDiv}>
              <h5 className={classes.symptomsHeading}> Steps To Use Sanitizer</h5>
              <ul className={classes.sympList}>

              <li>Apply enough of the product to the palm of your hand to wet your hands completely.</li>
              <li>Rub your hands together, covering all surfaces, for up to 25 seconds or until they're dry.</li>
              <li>If your hands are visibly dirty, however, wash with soap and water. Antimicrobial wipes or towelettes are another option, although they're not as effective as alcohol-based sanitizers.</li>
              </ul>
            </div>
            <small className={classes.info}>
              These are for informational purposes only. Consult your local
              medical authority for advice. (Source: World Health Organization)
            </small>
          </div>
          <div className={classes.sidebar}>
            <div className={classes.video}>
              <iframe
                title="coronavirus-who"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/ZnSjFr6J9HI"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div>
              <h3>Useful Links</h3>
              <ul className={classes.helpfulLinks}>
                <li>
                  <Link className={classes.link} to="/stay-safe">
                    Prevention of Coronavirus.
                    <span>&rarr;</span>
                  </Link>
                </li>
                <li>
                  <a
                    className={classes.link}
                    href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more on who.int
                    <span>&rarr;</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={classes.footer}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(UseAlcohol);
