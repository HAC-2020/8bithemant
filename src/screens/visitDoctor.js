import { withStyles } from "@material-ui/styles";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/SymptomsStyles";
import Footer from "../components/Footer"

class VisitDoctor extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.symptoms}>
        <h2 className={classes.heading}>
          <h1>Visit Doctor</h1>
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
              <h2>When to see a doctor about COVID-19</h2>
              <p>
              Chances are you have lots of procedures in place to protect yourself from the novel coronavirus.
<ul> 
<li> You’re staying home except for truly essential errands, going for walks with plenty of distance between yourself and others.</li>
<li>You know how to clean anything brought into the house and you’re giving soap and water a workout like never before.</li></ul><p>
<br />But few of us have prepared for how we’ll react if we start feeling sick and suspect we have COVID-19, the disease caused by the virus. <br />
</p>
<br />
<ul>

<li> At what point do I call a doctor?</li>
<li>Should I head to an emergency room?</li>
 </ul>             </p>
            </div>
            <div className={classes.symptomsDiv}>
              <h5 className={classes.symptomsHeading}>When to call a doctor</h5>
              <p>If you learn that you have been exposed to someone who has tested positive for the virus or who has become sick, stay inside and monitor yourself for any symptoms for the next 14 days, UCI Health infectious disease experts advise.

Call your doctor's office if you develop the signature symptoms associated with COVID-19, including:</p>
              <ul className={classes.sympList}>
                <li>Fever (above 100.4 Fahrenheit)</li>
                <li>New cough</li>
                <li>New shortness of breath</li>
              </ul>
              <div className={classes.symptomsHeading}>
              Before fever and lower respiratory symptoms emerge, other symptoms often occur, say UCI Health experts. They include
              </div>
              <ul className={classes.sympList}>
                <li>Sore throat</li>
                <li>Headache</li>
                <li>Diarrhea</li>
                <li>Nausea or vomiting</li>
                <li>Loss of smell or taste</li>
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
                src="https://www.youtube.com/embed/rphOwUHBQa4"
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

export default withStyles(styles)(VisitDoctor);
