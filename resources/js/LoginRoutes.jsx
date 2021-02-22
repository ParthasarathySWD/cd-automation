import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';

import LoginPage from "./components/LoginComponents/LoginPage";
import ForgotPassword from "./components/LoginComponents/ForgotPassword";

class LoginRoutes extends React.Component
{
    constructor(props){
        super(props);
    }
    render()
    {
        return (
            <Switch>
                <Route exact path='/' component={LoginPage} checkAuth={this.props.checkAuth} />
                <Route exact path='/forgotpassword' component={ForgotPassword} checkAuth={this.props.checkAuth} />
            </Switch>
        )
    }
}
export default LoginRoutes;