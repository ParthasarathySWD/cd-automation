import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
 
class LoginPage extends React.Component {
    render() {
        return(
         <Router>
            <div className="main-container">
                <div id="header" className="child col-sm-6">
                    <h2 className="heading"><b>CD-Automation</b></h2>
                    <h5>We automate your work in a simple way</h5>
                </div>
                <div id="login-container" className="col-sm-6 card">
                    <div id="card" >
                        <div className="form-container">
                            <div className="head">
                                <p className="lead">Login</p>
                                {/* <button className="sign-link" href="#" >Sign in</button> */}
                                <hr></hr>
                            </div>
                            <div className="body">
                                <form className="form-auth-small" action="index.html">
                                
                                    <div className="form-group ">
                                        <label className="field-label">User Name</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label className="field-label">Password
                                        </label>
                                        <input type="password" className="form-control" />
                                    </div>
                                    
                                    <button type="submit" id="signup-btn" className="btn btn-lg btn-block"><b>Login</b></button>
                                    <div className="bottom text-center">
                                        <span className="helper-text m-b-10 text-center"><i className="fa fa-lock"></i> <Link to={'/forgotpassword'}>Forgot password?</Link></span>
                                        {/* <span>Don't have an account? <a href="page-register.html">Register</a></span> */}
                                    </div> 
                                </form>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <p className="signup-text">By signing up you agree to our T&C and Privacy Policy </p>
             </div>
        </Router>
       )
    }
}
export default LoginPage;
