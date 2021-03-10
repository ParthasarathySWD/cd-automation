import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';

function ClientsList()
{
    return(
        <div>
            <center><h1 className="p-1">Clients List</h1>
            <Link to={'/addclient'} className="btn btn-primary">Add Client</Link></center>
        </div>
    )
}

export default ClientsList;