import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Paper from './components/Paper'
import HomeApp from './screens/HomeApp'



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




            </Switch>


        </Paper>







      )
   
   
    } 
  }

export default App;