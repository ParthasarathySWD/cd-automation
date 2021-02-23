import React from 'react';
import auth from '../../repository/auth';


import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
function LoginPage(props) {
    
    let history = useHistory();
    function handleSubmit(e){
        e.preventDefault();
        auth.login(function () {
            props.checkAuth(auth.isAuthenticated);
            history.push('/alluser');
        });

    }
        return(
         <>
     
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
                                    <form className="form-auth-small" onSubmit={handleSubmit}>
                                
                                    <div className="form-group ">
                                        <label className="field-label" >Email Id</label>
                                        <input type="email" className="form-control" autoFocus="autofocus"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="field-label">Password
                                        </label>
                                        <input type="password" className="form-control" />
                                    </div>
                                    
                                    <button type="submit" id="signup-btn" className="btn btn-lg btn-block text-center" ><b>Login</b></button>
                                    <div className="bottom text-center">
                                        <span className="helper-text m-b-10 text-center "><i className="fa fa-lock"></i> <Link to={'/forgotpassword'} className="text-secondary">Forgot password?</Link></span>
                                        {/* <span>Don't have an account? <a href="page-register.html">Register</a></span> */}
                                    </div> 
                                </form>
                            </div>
                          
                        </div>
                    </div>
                   
                    
                </div> 
                {/* <p className="signup-text">By signing up you agree to our T&C and Privacy Policy </p> */}
              
            </div>
         
        </>
        
       )
}
export default LoginPage;
