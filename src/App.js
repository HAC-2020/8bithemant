import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Paper from './components/Paper'
import HomeApp from './screens/HomeApp'
import Symptoms from "./screens/Symptoms";
import Help from "./screens/Help";
import StaySafe from "./screens/StaySafe";

import KeepDistance from './screens/keepDistance'
import Wash from './screens/wash'
import WearMask from './screens/wearMask'
import UseAlcohol from './screens/useAlcohol'
import VisitDoctor from './screens/visitDoctor'
import StayHome from './screens/stayHome'
import Navbar from "./components/Navbar";


class App extends Component {
  constructor(props) {
    super(props);this.state = {
      isDarkMode: true,
    };
    this.setDarkMode = this.setDarkMode.bind(this);
  }
  setDarkMode(e) {
    this.setState({ isDarkMode: e.target.checked });
  }


    render() {
      const { isDarkMode } = this.state;
      return (
        <Paper isDarkMode={this.state.isDarkMode}>
          <div className="root">
          <div className="navBar">
            <Navbar isDarkMode={isDarkMode} />
          </div>
          <div className="mainContent">
            <Switch>
              <Route 
                exact
                path="/"
                render={()=>(
                  <HomeApp
                  setDarkMode={this.setDarkMode}
                    isDarkMode={this.state.isDarkMode}
                  />
                )} />
                <Route 
                exact
                path="/symptoms"
                render={() => <Symptoms isDarkMode={isDarkMode} />}
                />
                <Route
                exact
                path="/help"
                render={()=> <Help isDarkMode={isDarkMode}/>}
                />
                <Route
                  exact
                  path="/stay-safe"
                  render={() => <StaySafe  isDarkMode={isDarkMode}/>}
                />
                <Route
              exact
              path="/stay-safe/keep-distance"
              render={()=> <KeepDistance isDarkMode={isDarkMode} /> } 
              />
              <Route
              exact
              path="/stay-safe/stay-home"
              render={()=> <StayHome isDarkMode={isDarkMode}/> } 
              />
              <Route
              exact
              path="/stay-safe/visit-doctor"
              render={()=> <VisitDoctor isDarkMode={isDarkMode}/> } 
              />
              <Route
              exact
              path="/stay-safe/use-alcohol"
              render={()=> <UseAlcohol isDarkMode={isDarkMode}/> } 
              />
              <Route
              exact
              path="/stay-safe/wear-mask"
              render={()=> <WearMask isDarkMode={isDarkMode} /> } 
              />
              <Route
              exact
              path="/stay-safe/wash"
              render={()=> <Wash isDarkMode={isDarkMode}/> } 
              />



            </Switch>
            </div>

            </div>
        </Paper>







      )
   
   
    } 
  }

export default App;