import logo from './logo.svg';
import './App.css';
import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import HomeProfile from "./components/HomeProfile";
import Counter from "./components/Counter"
import HomeLeaderboard from './components/HomeLeaderboard';
import Feed from './components/Feed';
import Navbar from "./components/Navbar";
import Leaderboard from './components/Leaderboard';
import Leagues from './components/Leagues';
import Profile from './components/Profile';
import { render } from '@testing-library/react';
import Home from './components/Home';
import Messaging from './components/Messaging';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

import {Auth} from "aws-amplify";

console.log(Auth.currentUserInfo());


class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
      <Router>
      <Navbar />
      <AmplifySignOut />
        <div className="content">
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/leaderboard" >
              <Leaderboard /> 
            </Route>
            <Route exact path="/leagues">
              <Leagues />
            </Route>
            <Route exact path="/messages">
              <Messaging />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
        </Switch>
        </div>
      </Router>
      </div>
     );
  }
}
 
export default withAuthenticator(App);
