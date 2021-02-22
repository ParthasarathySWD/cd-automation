import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddUserTab extends Component {
    render() {
        return (
            <>

                    

                <div className="col-lg-8 col-md-12">
                    <div className="card">
                        <ul className="nav nav-tabs3">
                            <li className="nav-item">
                                <Link  to={'/userprofile'} className="nav-link">User Profile</Link> 
                            </li>
                            <li className="nav-item">
                                <Link to={'/useraccess'} className="nav-link">User Access</Link> 
                            </li>
                            <li className="nav-item">
                                <Link to={'/userrole'} className="nav-link">UserRole</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}

export default AddUserTab;