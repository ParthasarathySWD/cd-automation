import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AllUsersTab extends Component {
    render() {
        return (
            <>

                <div className="col-lg-8 col-md-12">
                    <div className="card">
                        <ul className="nav nav-tabs3">
                            <li className="nav-item">
                                <Link to={'/alluser'} className="nav-link active">Members</Link>
                            </li>
							{/* <li className="nav-item">
                                <Link to={'/admins'} className="nav-link">Admins</Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-12">

                </div>
                <div className="col-lg-2 col-md-12">
                    <div className="card justify-content-center ">
                    <ul className="nav nav-tabs3 ">
                            <li className="nav-item addUserBtn">
                                <Link to={'/adduser'} className="nav-link" ><i className="fa fa-plus-circle" aria-hidden="true"></i> Add User</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                    
            </>
        );
    }
}

export default AllUsersTab;