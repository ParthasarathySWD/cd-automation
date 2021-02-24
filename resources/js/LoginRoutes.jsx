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
                <Route exact path='/' render={(props) => <LoginPage checkAuth={this.props.checkAuth} {...props} />}/>
                <Route exact path='/forgotpassword' render={(props) => <ForgotPassword checkAuth={this.props.checkAuth} {...props} />} />
                <Route path='*' render={(props) => <LoginPage checkAuth={this.props.checkAuth} {...props} />} />
            </Switch>
        )
    }
}
export default LoginRoutes;