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
                <Route exact path='/' render={(props) => <LoginPage {...props} />}/>
                <Route exact path='/forgotpassword' render={(props) => <ForgotPassword {...props} />} />
                <Route path='*' render={(props) => <LoginPage {...props} />} />
            </Switch>
        )
    }
}
export default LoginRoutes;