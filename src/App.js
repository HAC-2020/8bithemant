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
    super(props);}


    render() {
      return (
        <Paper >
          <div className="root">
          <div className="navBar">
            <Navbar  />
          </div>
          <div className="mainContent">
            <Switch>
              <Route 
                exact
                path="/"
                render={()=>(
                  <HomeApp
                  />
                )} />
                <Route 
                exact
                path="/symptoms"
                render={() => <Symptoms />}
                />
                <Route
                exact
                path="/help"
                render={()=> <Help />}
                />
                <Route
                  exact
                  path="/stay-safe"
                  render={() => <StaySafe />}
                />
                <Route
              exact
              path="/stay-safe/keep-distance"
              render={()=> <KeepDistance /> } 
              />
              <Route
              exact
              path="/stay-safe/stay-home"
              render={()=> <StayHome /> } 
              />
              <Route
              exact
              path="/stay-safe/visit-doctor"
              render={()=> <VisitDoctor /> } 
              />
              <Route
              exact
              path="/stay-safe/use-alcohol"
              render={()=> <UseAlcohol /> } 
              />
              <Route
              exact
              path="/stay-safe/wear-mask"
              render={()=> <WearMask /> } 
              />
              <Route
              exact
              path="/stay-safe/wash"
              render={()=> <Wash /> } 
              />



            </Switch>
            </div>

            </div>
        </Paper>







      )
   
   
    } 
  }

export default App;