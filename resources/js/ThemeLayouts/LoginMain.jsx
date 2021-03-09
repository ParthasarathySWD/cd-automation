import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LoginPage from './components/LoginComponents/LoginPage';

class LoginMain extends React.Component {
    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <LoginPage />
                    <Routes/>
                </div>
               
            </Router>
        )
    }

}
export default LoginMain;

