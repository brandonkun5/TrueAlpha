import React, { Component } from 'react';
import Feed from './Feed';
import HomeLeaderboard from './HomeLeaderboard';
import HomeProfile from './HomeProfile';
import {Auth} from "aws-amplify";

console.log("USER INFO ", Auth.currentUserInfo());
// console.log(Auth.userAttributes());

class Home extends React.Component {
    state = {  }
    render() { 
        return ( 
            <React.StrictMode>
                <div className="container">
                    <div className="row">
                    <HomeProfile />
                    <HomeLeaderboard />
                    <Feed />
                    </div>
                </div>
            </React.StrictMode>
         );
    }
}
 
export default Home;