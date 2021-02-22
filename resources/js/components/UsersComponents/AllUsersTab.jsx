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
                                <Link to={'/members'} className="nav-link">Members</Link>
                            </li>
							<li className="nav-item">
                                <Link to={'/admins'} className="nav-link">Admins</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}

export default AllUsersTab;