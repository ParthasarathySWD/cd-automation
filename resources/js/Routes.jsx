import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';

import AllUsers from "./components/UsersComponents/AllUsers";
import AddUser from "./components/UsersComponents/AddUsers";
import EditUser from "./components/UsersComponents/EditUsers";
import OrderEntry from "./components/OrderEntryComponents/OrderEntry";
import Login from "./Login";
import ForgotPassword from './components/LoginComponents/ForgotPassword';

class Routes extends React.Component
{
    render()
    {
        return (
            <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path='/alluser' component={AllUsers} />
                <Route exact path='/adduser' component={AddUser} />
                <Route path='/edituser' component={EditUser} />               
                <Route path='/orderentry' component={OrderEntry} />
                <Route path='/forgotpassword' component={ForgotPassword} />                 
            </Switch>
        )
    }
}
export default Routes;