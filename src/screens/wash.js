import { withStyles } from "@material-ui/styles";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/SymptomsStyles";
import Footer from "../components/Footer"

class Wash extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.symptoms}>
        <h2 className={classes.heading}>
          <h1>Handwashing and Coronavirus</h1>
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
              Handwashing remains the No. 1 tip for preventing the spread of Coronavirus (COVID-19). It’s common sense and it works. However, it must be done properly and with soap and water. When soap and water are not available, the next best option is to use an alcohol-based hand sanitizer.
              </p>
              <h1>Path to improved health </h1>
              <p> Proper handwashing not only reduces the spread of Coronavirus (COVID-19), it can prevent the spread of other viral illnesses such as cold and flu. Handwashing also reduces the risk of getting other easily spread infections, such SARS (severe acute respiratory syndrome) and MERS (Middle East respiratory syndrome).</p>

            </div>
            <div className={classes.symptomsDiv}>
              {/* <p>
                COVID-19 affects different people in different ways. Most
                infected people will develop mild to moderate symptoms.
              </p> */}
              <h2 className={classes.symptomsHeading}>Handwashing requires five simple steps:</h2>
              <ul className={classes.sympList}>
                <li> <h3> Wet :</h3> Put both your hands under clean, running water.</li>
                <li><h3>Lather :</h3> Apply a generous amount of soap to the inside and back of your hands as well as your fingertips. Wash your hands for at least 20 seconds (sing happy birthday) and don’t forget to wash under jewelry and fingernails. Your fingertips are especially important as people often put their fingers on their face, nose, and eyes. This is how the virus spreads.</li>
                <li><h3>Scrub :</h3> Rub both hands together and move your fingertips around both hands. You don’t need a scrub brush. You don’t need to make harsh, scrubbing movements.</li>
                <li><h3>Rinse :</h3> Return both hands to the running water and gently wash away the soap.</li>
                <li><h3>Dry :</h3> Completely dry the water from your hands. Using a disposable towel (paper towel) is best to avoid leaving germs on towels. Air dryers, commonly found in public bathrooms, are also effective.</li>
              </ul> 
              <h5 className={classes.symptomsHeading}>
              When do I need to wash my hands?
              </h5>
              <ul className={classes.sympList}>
                <li>After returning from a public outing (grocery store, work, school, concert, sporting activity, hospital, nursing home, etc.).</li>
                <li>Before leaving the bathroom — both at home and in public bathrooms.</li>
                <li>After shaking hands during flu season and virus outbreaks.</li>
                <li>Before, during, and after preparing food, especially raw food</li>
                <li>Before eating food</li>
                <li>Before and after caring for someone at home who is sick with symptoms of vomiting or diarrhea.</li>
                <li>Before and after treating a cut or wound.  </li>
                <li>After changing diapers or cleaning up a child who has used the toilet.  </li>
                <li> After blowing your nose, coughing, or sneezing. </li>
                <li> After touching an animal, animal feed, or animal waste. </li>
                <li> After handling pet food or pet treats. </li>
                <li>After touching garbage.  </li>
                <li>   After using public computers, touching public tables and countertops, cash and coins, other people’s phones, etc.</li>
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
                src="https://www.youtube.com/embed/3PmVJQUCm4E"
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

export default withStyles(styles)(Wash);
