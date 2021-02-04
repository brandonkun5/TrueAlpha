import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import App from '../App';
import Leaderboard from './Leaderboard';
import Leagues from './Leagues';
import Messaging from './Messaging';
import Profile from './Profile';

class Navbar extends React.Component {
    state = {  }
    render() { 
        return ( 
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand">True Alpha</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/leaderboard" className="nav-link">Leaderboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/leagues" className="nav-link">Leagues</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/messages" className="nav-link">Messages</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/profile" className="nav-link">Profile</Link>
                    </li>
                </ul>
                </div>
            </nav>
        </Router>
         );
    }
}
 
export default Navbar;