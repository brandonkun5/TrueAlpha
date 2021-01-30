import React, { Component } from 'react';

class Leaderboard extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container" style={{'margin-top': '20px'}}>
                <h1>Leaderboard</h1>
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
                            <td>Parker</td>
                            <td>+25%</td>
                            <td>Tesla (TSLA)</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Adwait</td>
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
                            <td>Bernard</td>
                            <td>+25%</td>
                            <td>Tesla (TSLA)</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Stacy</td>
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
                </div>
                </div>
        );
    }
}
 
export default Leaderboard;