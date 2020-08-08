import { withStyles } from "@material-ui/styles";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/SymptomsStyles";
import Footer from "../components/Footer"

class WearMask extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.symptoms}>
        <h2 className={classes.heading}>
          <h1>Masks Vs Covid-19</h1>
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
              COVID-19 spreads mainly from person to person through respiratory droplets produced when an infected person coughs, sneezes, talks, or raises their voice (e.g., while shouting, chanting, or singing). These droplets can land in the mouths or noses of people who are nearby or possibly be inhaled into the lungs. Recent studies show that a significant portion of individuals with COVID-19 lack symptoms (are “asymptomatic”) and that even those who eventually develop symptoms (are “pre-symptomatic”) can transmit the virus to others before showing symptoms.

To reduce the spread of COVID-19, CDC recommends that people wear masks in public settings when around people outside of their household, especially when other social distancing measures are difficult to maintain.
              </p>
              <h2>Why it is important to wear a mask</h2>
              <p>Masks may help prevent people who have COVID-19 from spreading the virus to others. Wearing a mask will help protect people around you, including those at higher risk of severe illness from COVID-19 and workers who frequently come into close contact with other people (e.g., in stores and restaurants). Masks are most likely to reduce the spread of COVID-19 when they are widely used by people in public settings. The spread of COVID-19 can be reduced when masks are used along with other preventive measures, including social distancing, frequent handwashing, and cleaning and disinfecting frequently touched surfaces.

The masks recommended here are not surgical masks or respirators. Currently, those are critical supplies that should be reserved for healthcare workers and other first responders. Masks are not personal protective equipment (PPE). They are not appropriate substitutes for PPE such as respirators (like N95 respirators) or medical facemasks (like surgical masks) in workplaces where respirators or facemasks are recommended or required to protect the wearer.</p>
            </div>
            <div className={classes.symptomsDiv}>
              <p>
                COVID-19 affects different people in different ways. Most
                infected people will develop mild to moderate symptoms.
              </p>
              <h5 className={classes.symptomsHeading}>How to Wear Masks</h5>
              <ul className={classes.sympList}>
                <h2>Wear your Mask Correctly</h2>
                <li> Wash your hands before putting on your mask</li>
                <li>Put it over your nose and mouth and secure it under your chin</li>
                <li>Try to fit it snugly against the sides of your face</li>
                <li>Make sure you can breathe easily</li>
              </ul>
              <h5 className={classes.symptomsHeading}>
              Wear a Mask to Protect Others
              </h5>
              <ul className={classes.sympList}>
                <li>Wear a mask that covers your nose and mouth to help protect others in case you’re infected with COVID-19 but don’t have symptoms</li>
                <li>Wear a mask in public settings when around people who don’t live in your household, especially when it may be difficult for you to stay six feet apart</li>
                <li>Wear a mask correctly for maximum protection</li>
                <li>Don’t put the mask around your neck or up on your forehead</li>
                <li>Don’t touch the mask, and, if you do, wash your hands or use hand sanitizer to disinfect​</li>
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
                src="https://www.youtube.com/embed/adB8RW4I3o4"
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

export default withStyles(styles)(WearMask);
