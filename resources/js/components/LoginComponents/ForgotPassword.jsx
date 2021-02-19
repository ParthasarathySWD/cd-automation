import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class ForgotPassword extends React.Component{
    render() {
        return(
            <div className="ForgetPassword container">
                <div id="card" >
                        <div className="head">
                            <p className="lead">RESET PASSWORD</p>
                            {/* <button className="sign-link" href="#" >Sign in</button> */}
                            <hr></hr>
                        </div>
                        <div className="body">
                            <form className="form-auth-small" action="index.html">
                               
                                <div className="form-group ">
                                    <label className="field-label">CURRENT PASSWORD</label>
                                    <input type="password" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label className="field-label">NEW PASSWORD
                                    </label>
                                    <input type="password" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label className="field-label">CONFIRM NEW PASSWORD
                                    </label>
                                    <input type="password" className="form-control" />
                                </div>
                                
                                <button type="submit" id="signup-btn" className="btn btn-lg btn-block"><b>SUBMIT</b></button>
                                {/* <div className="bottom text-center">
                                    <span className="helper-text m-b-10 text-center"><i className="fa fa-lock"></i> <a href="page-forgot-password.html">Forgot password?</a></span>
                                    {/* <span>Don't have an account? <a href="page-register.html">Register</a></span> */}
                                {/* </div>  */} 
                            </form>
                        </div>
                </div>
            </div>
        )
    }
}

export default ForgotPassword;