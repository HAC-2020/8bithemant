import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Paper from './components/Paper'
import HomeApp from './screens/HomeApp'
import Symptoms from "./screens/Symptoms";



class App extends Component {
  constructor(props) {
    super(props);}


    render() {
      return (
        <Paper >
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




            </Switch>


        </Paper>







      )
   
   
    } 
  }

export default App;