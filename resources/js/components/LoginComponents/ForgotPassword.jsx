import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class ForgotPassword extends React.Component{
    render() {
        return(
            <div className="ForgetPassword-container col-sm-6 card">
                <div id="card text-center"  >
                        <div className="head">
                            <p className="leads">Forgot Password</p>
                            <hr></hr>
                        </div>
                        <div className="body">
                            <form className="form-auth-small" action="index.html">
                               
                                <div className="form-group ">
                                    <label className="field-label">Email Id</label>
                                    <input type="email" className="form-control"/>
                                </div>
                                
                                <button type="submit" id="signup-btn" className="btn btn-lg btn-block"><b>Submit</b></button>
                                 <div className="bottom text-center"> 
                                    <span className="helper-text m-b-10 text-center text-secondary"><i className="fa fa-arrow-left text-primary text-secondary"></i> <Link to={'/'} className="text-secondary">Back to login</Link></span>
                                    {/* <span>Don't have an account? <a href="page-register.html">Register</a></span> */}
                                 </div> 
                            </form>
                        </div>
                </div>
            </div>
        )
    }
}

export default ForgotPassword;