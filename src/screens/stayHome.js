import { withStyles } from "@material-ui/styles";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/SymptomsStyles";
import Footer from "../components/Footer";

class UseAlcohol extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.symptoms}>
        <h2 className={classes.heading}>
          <h1>Stay Home, Stay Safe</h1>
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
              Each day we hear about more people testing positive for COVID-19 in our county, the United States and throughout the world.

              The virus that causes COVID-19 can spread from person to person through droplets that are expelled into the air when an infected person coughs or sneezes. If you are nearby, these droplets can enter your body through the nose, mouth or lungs.

              Recent studies suggest that COVID-19 may be spread by people who show no symptoms, according to the U.S. Centers for Disease Control and Prevention. That is why it is extremely important to take the necessary precautions to stop the spread of this virus.
              </p>
            </div>
            <div className={classes.symptomsDiv}>
              <p>
                COVID-19 affects different people in different ways. Most
                infected people will develop mild to moderate symptoms.
              </p>
              <h5 className={classes.symptomsHeading}>How to limit the spread of COVID-19 with social distancing:</h5>
              <ul className={classes.sympList}>
              <li>Avoid public spaces and social gatherings</li>
              <li>Stay at least 6 feet away from others if you must go out</li>
              <li>Wear a homemade cloth or fabric mask in public</li>
              <li>Don't attend or host gatherings</li>
              <li>Avoid mass transit</li>
              <li>Consider using delivery services for groceries, medications and other household items</li>
                </ul>

              <p>
              To slow the spread of COVID-19 to a manageable level for hospitals and healthcare providers, Gov. Tom Wolf recently extended a stay-at-home order to all Pennsylvanians through April 30.

              The stay-at-home-order asks Pennsylvanians to refrain from non-essential travel. Essential travel includes commuting to and from an essential job, picking up groceries and medicine and checking on family and pets in other households, according to the Pennsylvania Department of Health.
              </p>
              <h5 className={classes.symptomsHeading}>
              Social Distancing Precautions at Doylestown Health
              </h5>
              <p>We are committed to ensuring the safety of our patients, staff and visitors. During this time, Doylestown Health has taken several measures to protect the community by limiting exposure.</p>
              <ul className={classes.sympList}>

              <li>All in-person classes and events have been canceled and some are now available via virtual webinars. More educational resources can be found on our Health News & Blog.</li>
              <li>Visitors are restricted and the few who are permitted to visit a patient are required to wear a mask and remain in the patient's room until they leave the hospital.</li>
              <li>Access to the hospital has been restricted to three locations, including the Emergency Department, Main Lobby, and the Gorsky Atrium (Heart Center).</li>
              <li>Everyone who enters the hospital is screened for temperature (using a no-touch thermometer) in addition to verbal questions about health and travel.</li>
              <li>Staff is required to wear a mask at all times.</li>
              <li>All inpatients are given a cloth mask and are asked to use the mask when a healthcare worker enters the room.</li>
              <li>Some Doylestown Hospital medical staff physicians and clinicians now offer telehealth services.</li>
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
                src="https://www.youtube.com/embed/ghfm_L4yo18"
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
