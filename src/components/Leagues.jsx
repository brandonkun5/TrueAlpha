import React, { Component } from 'react';
class Leagues extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container" style={{'margin-top': '20px'}}>
                <h1>Feed</h1>
                    <div className="card text-center">
                        <div className="card-header">
                        <ul className="nav nav-pills card-header-pills">
                            <li className="nav-item">
                            <a className="nav-link">SIA</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link">My Friends</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link">My Family</a>
                            </li>
                        </ul>
                        </div>
                        <div className="card-body">
                        <app-feed></app-feed>
                        </div>
                    </div>
                </div>
         );
    }
}
 
export default Leagues;