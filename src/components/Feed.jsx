import React, { Component } from 'react';

class Feed extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="col-3">
            <div className="d-block d-md-flex justify-content-between mt-4 mt-md-0">
                <div className="text-center mt-4 mt-md-0">
                    <a tabIndex="0" className="btn btn-primary" role="button" data-bs-toggle="popover" data-bs-trigger="focus" title="post" data-bs-content="And here's some amazing content. It's very engaging. Right?">Post</a>
                </div>
                </div>
                <div className="mt-4 py-2 border-top border-bottom">
                <ul className="nav profile-navbar">
                    <li className="nav-item">
                    <a className="nav-link active" href="#">
                        <i className="mdi mdi-newspaper"></i>
                        Feed
                    </a>
                    </li>
                </ul>
                </div>
                <div className="profile-feed">
                <div className="d-flex align-items-start profile-feed-item">
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="profile" className="img-sm rounded-circle"/>
                    <div className="ml-4">
                    <h6>
                        SIA
                        <small className="ml-4 text-muted"><i className="mdi mdi-clock mr-1"></i>10 hours</small>
                    </h6>
                    <p>
                        Mason Beck is shorting Tesla at $600.
                    </p>
                    <p className="small text-muted mt-2 mb-0">
                        <span>
                        <i className="mdi mdi-star mr-1"></i>4
                        </span>
                        <span className="ml-2">
                        <i className="mdi mdi-comment mr-1"></i>11
                        </span>
                        <span className="ml-2">
                        <i className="mdi mdi-reply"></i>
                        </span>
                    </p>
                    </div>
                </div>
                <div className="d-flex align-items-start profile-feed-item">
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="profile" className="img-sm rounded-circle"/>
                    <div className="ml-4">
                    <h6>
                        SIA
                        <small className="ml-4 text-muted"><i className="mdi mdi-clock mr-1"></i>10 hours</small>
                    </h6>
                    <img src="https://i.pinimg.com/originals/00/8c/39/008c39afb60151db46abc378e886f015.png" alt="sample" className="rounded mw-100"/>                            
                    <p className="small text-muted mt-2 mb-0">
                        <span>
                        <i className="mdi mdi-star mr-1"></i>4
                        </span>
                        <span className="ml-2">
                        <i className="mdi mdi-comment mr-1"></i>11
                        </span>
                        <span className="ml-2">
                        <i className="mdi mdi-reply"></i>
                        </span>
                    </p>
                    </div>
                </div>
                <div className="d-flex align-items-start profile-feed-item">
                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="profile" className="img-sm rounded-circle"/>
                    <div className="ml-4">
                    <h6>
                        My Friends
                        <small className="ml-4 text-muted"><i className="mdi mdi-clock mr-1"></i>10 hours</small>
                    </h6>
                    <p>
                        Dylan Silva just bought Tesla stock @$632.56!
                    </p>
                    <img src="https://www.carlogos.org/logo/Tesla-logo-2003-2500x2500.png" alt="sample" className="rounded mw-100"/>                                                        
                    <p className="small text-muted mt-2 mb-0">
                        <span>
                        <i className="mdi mdi-star mr-1"></i>4
                        </span>
                        <span className="ml-2">
                        <i className="mdi mdi-comment mr-1"></i>11
                        </span>
                        <span className="ml-2">
                        <i className="mdi mdi-reply"></i>
                        </span>
                    </p>
                    </div>
                </div>
            </div>
        </div>
         );
    }
}
 
export default Feed;