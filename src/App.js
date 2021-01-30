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
import { withAuthenticator } from '@aws-amplify/ui-react'


class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
      <Navbar />
        <div className="content">
        <Router>
        <Switch>
            <Route exact path="/*" component={Home} />
            <Route exact path="/leaderboard" component={Leaderboard} />
            <Route exact path="/leagues" component={Leagues} />
            <Route exact path="/messages" component={Messaging} />
            <Route exact path="/profile" component={Profile} />
        </Switch>
        </Router>
        </div>
      </div>
     );
  }
}
 
export default withAuthenticator(App);
