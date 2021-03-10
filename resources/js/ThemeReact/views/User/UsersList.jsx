import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';

function UsersList(){

    return(
        <div>
            <center><h1>Users List</h1>
              <Link to={'/adduser'} className="btn btn-primary">Add User</Link></center>
        </div>
    )
}

export default UsersList;