import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';

import AllUsers from "./components/UsersComponents/AllUsers";
import AddUser from "./components/UsersComponents/AddUsers";
import EditUser from "./components/UsersComponents/EditUsers";

class Routes extends React.Component
{
    render()
    {
        return (
            <Switch>
                <Route exact path='/alluser' component={AllUsers} />
                <Route exact path='/adduser' component={AddUser} />
                <Route path='/edituser' component={EditUser} />               
            </Switch>
        )
    }
}
export default Routes;