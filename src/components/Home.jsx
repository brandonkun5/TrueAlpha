import React, { Component } from 'react';
import Feed from './Feed';
import HomeLeaderboard from './HomeLeaderboard';
import HomeProfile from './HomeProfile';

class Home extends Component {
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