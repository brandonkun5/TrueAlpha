import React, { Component } from 'react';

class HomeProfile extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="col-3">
                <h1>Profile</h1>
                <div className="card">
                    <div className="card-body">
                        <div className="border-bottom text-center pb-4">
                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="profile" className="img-sm rounded-circle"/>
                        <div className="mb-3">
                            <h3>Brandon Kung</h3>
                            <div className="d-flex align-items-center justify-content-center">
                            <h5 className="mb-0 mr-2 text-muted">USA</h5>
                            <div className="br-wrapper br-theme-css-stars"><select id="profile-rating" name="rating" autoComplete="off" style={{display: 'none'}}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select><div className="br-widget"><a href="#" data-rating-value="1" data-rating-text="1" className="br-selected br-current"></a><a href="#" data-rating-value="2" data-rating-text="2"></a><a href="#" data-rating-value="3" data-rating-text="3"></a><a href="#" data-rating-value="4" data-rating-text="4"></a><a href="#" data-rating-value="5" data-rating-text="5"></a></div></div>
                            </div>
                        </div>
                        <p className="w-75 mx-auto mb-3">Michigan State University</p>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-success mr-1">Portfolio</button>
                            <button className="btn btn-success">My Groups</button>
                        </div>
                        </div>
                        <div className="border-bottom py-4">
                        <p>Stocks</p>
                        <div>
                            <ul className="list-group list-group-flush">
                            <li className="list-group-item">Facebook</li>
                            <li className="list-group-item">Apple</li>
                            <li className="list-group-item">Netflix</li>
                            <li className="list-group-item">Google</li>
                            <li className="list-group-item">Amazon</li>
                            </ul>  
                        </div>                                                               
                        </div>
                        <div className="border-bottom py-4">
                        <div className="d-flex mb-3">
                            <div className="progress progress-md flex-grow">
                            <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="55" style={ {width: '55%' } } aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="progress progress-md flex-grow">
                            <div className="progress-bar bg-success" role="progressbar" aria-valuenow="75" style={{width: '75%'}} aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        </div>
                        <div className="py-4">
                        <p className="clearfix">
                            <span className="float-left">
                            Rank
                            </span>
                            <span className="float-right text-muted">
                            Beginner
                            </span>
                        </p>
                        <p className="clearfix">
                            <span className="float-left">
                            Phone
                            </span>
                            <span className="float-right text-muted">
                            006 3435 22
                            </span>
                        </p>
                        <p className="clearfix">
                            <span className="float-left">
                            Mail
                            </span>
                            <span className="float-right text-muted">
                            Jacod@testmail.com
                            </span>
                        </p>
                        <p className="clearfix">
                            <span className="float-left">
                            Facebook
                            </span>
                            <span className="float-right text-muted">
                            <a href="#">David Grey</a>
                            </span>
                        </p>
                        <p className="clearfix">
                            <span className="float-left">
                            Twitter
                            </span>
                            <span className="float-right text-muted">
                            <a href="#">@davidgrey</a>
                            </span>
                        </p>
                        </div>
                        <button className="btn btn-primary btn-block mb-2">Preview</button>
                    </div>
                    </div>
                </div>
        );
    }
}
 
export default HomeProfile;