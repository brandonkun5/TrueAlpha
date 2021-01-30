import React, { Component } from 'react';

class HomeLeaderboard extends Component {
    state = {  }
    render() { 
        return ( 
                <div className="col-6">
                    <h1>Leaderboard</h1>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">Rank</th>
                            <th scope="col">Name</th>
                            <th scope="col">Return</th>
                            <th scope="col">Top Performer</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>+25%</td>
                            <td>Tesla (TSLA)</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>+5%</td>
                            <td>Palantir (PLTR)</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Brandon</td>
                            <td>-10%</td>
                            <td>Amazon (AMZN)</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
         );
    }
}
 
export default HomeLeaderboard;